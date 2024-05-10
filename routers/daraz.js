const router = require("express").Router();
const crypto = require("crypto");
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();
const CryptoJS = require("crypto-js");
const { generateDarazURL } = require("../utils/darazActions");

function sign(secret, api, parameters) {
  const sortKeys = Object.keys(parameters).sort();
  let parametersStr = api;

  sortKeys.forEach((key) => {
    parametersStr += key + parameters[key];
  });

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(parametersStr);

  return hmac.digest("hex").toUpperCase();
}
router.post("/sign", async (req, res) => {
  const { secret, api, parameters } = req.body;
  res.status(200).send(sign(secret, api, parameters));
});

router.post("/access-token", async (req, res) => {
  const { signature, code, timeStamp, app_key, userEmail, name } = req.body;

  // Get all the stores
  const stores = await prisma.store.findMany({
    where: {
      platform: "daraz",
    },
  });

  let url = "";
  let response = "";
  let storeData = "";
  try {
    url = `https://api.daraz.pk/rest/auth/token/create?code=${code}&app_key=${app_key}&sign_method=sha256&timestamp=${timeStamp}&sign=${signature}`;
    response = await axios.post(url);
    storeData = response.data;

    if (storeData.code === "InvalidCode") {
      return res.status(200).json({ message: storeData.code });
    }
  } catch (e) {
    console.log("error: ", e);
    return res.status(200).json({ message: "Invalid Code" });
  }

  const storeAlreadyExists = stores.find(
    (s) => s.store_info.account === storeData.account
  );
  if (storeAlreadyExists) {
    return res.status(200).json({ message: "Store Already Exists" });
  }

  //   Get the UserId associated with the userEmail
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;

  let newStore = "";

  try {
    newStore = await prisma.store.create({
      data: {
        user_id: userId, // Specify the userId for the associated user
        name: name,
        platform: "daraz",
        image_url: "none",
        image_public_id: "none",
        store_info: { platform: "daraz", ...storeData },
      },
    });
  } catch (e) {
    console.log("error adding store to DB: ", e);
    return res.status(200).json({ message: "Error adding store to DB" });
  }

  const redirectCode = CryptoJS.HmacSHA256(name, "daraz").toString();

  // Send a request to nakson.services to trigger the inngest api to append orders
  const ingestUrl = `https://nakson.services/api/daraz/orders`;

  const orderRes = await axios.post(ingestUrl, {
    userID: userId,
    accessToken: storeData.access_token,
    sellerID: storeData.user_info.seller_id,
  });

  console.log("orderRes: ", orderRes.data);

  res.status(200).json({ code: redirectCode, message: "Store Added" });
});

// Show all connected Stores
router.post("/get-stores", async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Stores: true,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const darazStores = user.Stores.filter(
    (user) => user.store_info.platform === "daraz"
  );
  if (!darazStores) {
    return res.status(204);
  }
  res.status(200).json({ stores: darazStores });
});

// Delete a Store
router.delete("/delete-store/:id", async (req, res) => {
  const id = Number(req.params.id);

  // Delete the store
  const store = await prisma.store.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ message: "Store deleted successfully" });
});

// Append into DB all the logs
router.post("/save-log", async (req, res) => {
  const { seller_id, data, timestamp } = req.body;

  // Search the user by email

  const stores = await prisma.store.findMany({
    where: {
      platform: "daraz",
    },
  });
  const darazStore = stores.find(
    (store) => store.store_info.account === seller_id
  );

  const userId = darazStore.user_id;

  const logData = await prisma.darazLogs.create({
    data: {
      store: seller_id,
      receivedAt: new Date(timestamp * 1000),
      data: data,
      user_id: userId,
    },
  });
  res.status(200).json({ message: "Log Added" });
});

router.post("/append-orders", async (req, res) => {
  const { orders } = req.body;
  let data = "";
  try {
    data = await prisma.darazOrders.createMany({
      data: orders,
      skipDuplicates: true,
    });
  } catch (e) {
    console.log("Couldn't append to DB", e);
    return res.status(400).json({ message: "Couldn't append to DB" });
  }
  res.status(200).json({ message: "Success", data: data });
});

router.post("/get-orders-certain-date-range", async (req, res) => {
  const { user_id, date } = req.body;
  // Date format should be = 07 Jan 2024
  const formattedDate = convertDateFormat(date);

  const orders = await prisma.darazOrders.findMany({
    where: {
      user_id,
      created_at: {
        lte: new Date(date),
      },
    },
  });

  res.status(200).json({ orders });
});

router.get("/d", async (req, res) => {
  // SELECT * FROM "DarazOrders" order by created_at asc limit 82;
  const oOne = await prisma.darazOrders.findMany({
    orderBy: {
      created_at: "asc",
    },
    take: 150,
  });

  // SELECT * FROM "DarazOrders" WHERE created_at < '2024-01-02 00:00:00';
  const oTwo = await prisma.darazOrders.findMany({
    where: {
      created_at: {
        // lte: new Date("2024-01-02 09:00:00 +0800"),
        lte: new Date("2024-01-03 05:00:00"),
      },
    },
  });

  console.log("oOne length: ", oOne.length);
  console.log("oTwo length: ", oTwo.length);

  // I should be getting 82 orders from oTwo as well, but I am not
  // find the missing orders by comparing the two arrays
  const missingOrders = oOne.filter(
    (order) => !oTwo.find((o) => o.order_id === order.order_id)
  );
  console.log("missingOrders length: ", missingOrders.length);

  res.status(200).json({ oTwo });
});
function convertDateFormat(inputDate) {
  // Split the input date string into day, month, and year
  const parts = inputDate.split(" ");
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];

  // Convert month name to month number
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = monthNames.indexOf(month) + 1;

  // Pad day and month with leading zeros if needed
  const paddedDay = day.padStart(2, "0");
  const paddedMonth = monthIndex.toString().padStart(2, "0");

  // Format the date as year-mm-dd
  const formattedDate = `${year}-${paddedMonth}-${paddedDay}`;

  return formattedDate;
}
router.get("/f", async (req, res) => {
  // Already have (userid, access_token, seller_id)
  const accessToken =
    "50000700311adaobhpumqgJ1d66dcd7mOvPubc6mteKU9UQHfGbSBMTVdDbGww";

  // ________

  // Right when all the orders are appended into the db with their line items, do this ->
  let orders_before_date;
  let orders_;

  let offset = 2;
  while (true) {
    const transactionAPIURL = await generateDarazURL(
      "/finance/transaction/detail/get",
      accessToken,
      {
        start_time: "2024-01-01",
        end_time: new Date().toISOString(),
        limit: 28,
        offset,
      }
    );
    let response = "";
    let transactions = "";
    try {
      response = await axios.get(transactionAPIURL);
      transactions = response.data.data;
    } catch (e) {
      console.log("error: Could not send request to Transaction API", e);
    }

    if (transactions.length === 0) {
      console.log("Transactions Appended!");
      break;
    }

    const ordersTransactions = [
      {
        order_no,
      },
    ];

    // Get all the order numbers without duplicates

    for (let i = 0; i < transactions.length; i++) {
      if (!transactions[i].order_no) {
        continue;
      }
      const order_number = transactions[i].order_no;
      if (!order_numbers.includes(order_number)) {
        order_numbers.push(order_number);
      }
    }

    // Append into DarazOrders transcations columns with corresponding order_numbers
    let response_ = "";
    let orders = "";
    try {
      response_ = await axios.put(
        "http://localhost:4000/daraz/add-transaction",
        {
          order_numbers: order_numbers,
          order_transaction: order_transaction,
        }
      );
      orders = response_.data.orders;
    } catch (e) {
      console.log("error: Could not get orders", e);
    }

    console.log("Added Transactions: ", orders.length);
    // Append into DarazUnpaidTransactions, for those who have no order_numbers

    offset += 250000;
  }
  res.status(200).json({ message: "Success", offset });
});

router.put("/add-transaction", async (req, res) => {
  const start = new Date();
  const { order_numbers, transactions } = req.body;

  //  "transactions": {
  //       "176267067548404": [
  //         {
  //             "sad": "Hammad",
  //             "desk": "sad"
  //         }
  //     ],
  //     "176264886101675": [
  //         {
  //             "s": "i",
  //             "f": "r"
  //         }
  //     ]
  // }

  // Get all the orders with the order_numbers
  const orders = await prisma.darazOrders.findMany({
    where: {
      order_id: {
        in: order_numbers,
      },
    },
  });

  const updatedOrders = [];

  // Append the transaction into the orders
  // Append transactions into the orders
  for (const order of orders) {
    const orderNumber = order.order_number;
    if (transactions.hasOwnProperty(orderNumber)) {
      order.transactions = [];
      order.transactions.push(...transactions[orderNumber]);
      updatedOrders.push(order);
    }
  }

  console.log("updatedOrders[0]: ", updatedOrders[0]);

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  const updates = [
    {
      order_number: "176267067548404",
      data: {
        transactions: [
          {
            sad: "Hammad",
          },
          {
            sad: "Salar",
          },
        ],
      },
    },
    {
      order_number: "176264886101675",
      data: {
        transactions: [
          {
            sad: "ALI",
          },
          {
            desk: "Shapater",
          },
        ],
      },
    },
  ];

  // Write an update query to update all the orders at once, updateMany
  let t;

  try {
    t = await prisma.$transaction(
      updates.map((update) =>
        prisma.darazOrders.update({
          where: { order_id: update.order_number },
          data: update.data,
        })
      )
    );
  } catch (e) {
    console.log("Could not Update Orders", e);
    console.log("Order Number: ", order_numbers);
    return res.status(400).json({ message: "Could not Update Orders" });
  }

  res.status(200).json({ rowsUpdated: t.length, timeTaken });
});

module.exports = router;
