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
  const { signature, code, timeStamp, app_key, userEmail } = req.body;

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

  const darazURL__ = await generateDarazURL(
    "/seller/get",
    storeData.access_token,
    {}
  );
  const response__ = await axios.get(darazURL__);
  const name = response__.data.data.name;

  let newStore = "";

  try {
    newStore = await prisma.store.create({
      data: {
        seller_id: storeData.user_info.seller_id,
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
  const ingestUrl = `https://esync.nakson.services/api/daraz/orders`;

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
  const darazStores = user.Stores.filter((s) => s.platform === "daraz");
  if (!darazStores) {
    return res.status(204);
  }
  res.status(200).json({ stores: darazStores });
});

// Delete a Store
router.delete("/delete-store/:id", async (req, res) => {
  const seller_id = req.params.id;
  console.log("seller_id: ", seller_id);

  // Delete the store
  const store = await prisma.store.delete({
    where: {
      seller_id: seller_id,
    },
  });
  res.status(200).json({ message: "Store deleted successfully" });
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
  const start = new Date();
  // Already have (userid, access_token, seller_id)

  // ________

  // Right when all the orders are appended into the db with their line items, do this ->
  let updatedRowsCount = 0;
  let NumberOfTimesTransactionApiCalled = 0;
  let storeTransactionsCount = 0;

  let offset = 0;
  while (true) {
    const transactionAPIURL = await generateDarazURL(
      "/finance/transaction/detail/get",
      accessToken,
      {
        start_time: "2024-01-01",
        end_time: new Date().toISOString(),
        limit: 500,
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

    NumberOfTimesTransactionApiCalled += 1;

    if (transactions.length === 0) {
      console.log("Transactions Appended!");
      break;
    }

    // 1.  Append all those transactions which contains order_no into DarazOrders
    const order_numbers = [];
    const order_transaction = {
      // 176267067548404: [
      //   {
      //     sad: "Hammad",
      //     desk: "sad",
      //   },
      // ],
      // 176264886101675: [
      //   {
      //     s: "i",
      //     f: "r",
      //   },
      //   {
      //     s: "sss",
      //     f: "yo",
      //   },
      // ],
    };

    // 2.
    const daraz_store_transaction = [];

    // Get all the order numbers without duplicates
    for (let data of transactions) {
      const order_number = data.order_no;
      data.transaction_date = new Date(data.transaction_date).toISOString();
      if (order_number) {
        if (!order_numbers.includes(order_number)) {
          order_transaction[order_number] = [
            {
              statement: data.statement,
              order_item_status: data.orderItem_status,
              fee_name: data.feeName,
              transaction_date: data.transaction_date,
              transtion_type: data.transaction_type,
              amount: data.amount,
              paid_status: data.paid_status,
              VAT_in_amount: data.VAT_in_amount,
              WHT_amount: data.WHT_amount,
            },
          ];
          order_numbers.push(order_number);
        } else {
          order_transaction[order_number].push({
            statement: data.statement,
            order_item_status: data.orderItem_status,
            fee_name: data.feeName,
            transaction_date: data.transaction_date,
            transtion_type: data.transaction_type,

            amount: data.amount,
            paid_status: data.paid_status,
            VAT_in_amount: data.VAT_in_amount,
            WHT_amount: data.WHT_amount,
          });
        }
      } else {
        daraz_store_transaction.push({
          statement: data.statement,
          amount: data.amount,
          transaction_date: data.transaction_date,
          fee_name: data.feeName,
          payment_ref_id: data.payment_ref_id,
          transaction_type: data.transaction_type,

          paid_status: data.paid_status,
          VAT_in_amount: data.VAT_in_amount,
          WHT_amount: data.WHT_amount,
          transaction_number: data.transaction_number,
          comment: data.comment,
          user_id: userID,
        });
      }
    }

    // return res.status(200).json({
    //   order_numbers,
    //   transactions: order_transaction,
    //   daraz_store_transaction,
    // });

    // Append into DarazOrders transcations columns with corresponding order_numbers
    let response_ = "";
    let result = "";
    try {
      response_ = await axios.post(
        "http://localhost:4000/daraz/add-transaction",
        {
          order_numbers: order_numbers,
          transactions: order_transaction,
        }
      );
      result = response_.data;
    } catch (e) {
      console.log("error: Could not get orders", e);
    }

    updatedRowsCount += result.rowsUpdated;

    // Append into DarazStoreTransactions
    let response__ = "";
    let result_ = "";
    try {
      response__ = await axios.post(
        "http://localhost:4000/daraz/add-store-transactions",
        {
          transactions: daraz_store_transaction,
        }
      );
      result_ = response__.data;
      storeTransactionsCount += result_.storeTransactionsCount;
    } catch (e) {
      console.log("error: Could not get orders", e);
    }
    const log = {
      Transaction_API_Called: NumberOfTimesTransactionApiCalled,
      Updated_Orders_Rows: result.rowsUpdated,
      TimeTaken_In_Updating_Orders: result.timeTaken,
      Store_Transactions: storeTransactionsCount,
      Offset: offset,
    };

    console.log("log: ", log);

    offset += 500;
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  res.status(200).json({
    ordersRowsUpdatedCount: updatedRowsCount,
    NumberOfTimesTransactionApiCalled,
    storeTransactionsCount,
    timeTaken,
    offset,
  });
});

router.post("/add-transaction", async (req, res) => {
  // Only adds transactions orderItem_status of which is Delivered or Returned

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

  if (orders.length === 0) {
    return res.status(200).json({ rowsUpdated: 0, timeTaken: 0 });
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  const updates = orders.map((order) => {
    const order_number = order.order_number;
    const order_transactions = transactions[order_number];
    return {
      order_number,
      data: {
        transactions: [...order.transactions, ...order_transactions],
      },
    };
  });

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

router.post("/add-store-transactions", async (req, res) => {
  const { transactions } = req.body;
  let data = "";
  try {
    data = await prisma.darazStoreTransactions.createMany({
      data: transactions,
      skipDuplicates: true,
    });
  } catch (e) {
    console.log("Couldn't append to DB", e);
    return res.status(400).json({ message: "Couldn't append to DB" });
  }
  res.status(200).json({ storeTransactionsCount: data.count });
});

// Route when a new order is placed
router.get("/orders/add-new-order", async (req, res) => {
  // const { seller_id, order_id } = req.body;

  // use req.query to get the query parameters
  const { seller_id, order_id } = req.query;

  // Find the store with the seller_id
  const store = await prisma.store.findUnique({
    where: {
      seller_id,
    },
  });
  if (!store || store.length === 0) {
    return res.status(404).json({ message: "Store not found", seller_id });
  }

  const { access_token } = store.store_info;

  const darazURL = await generateDarazURL("/order/get", access_token, {
    order_id,
  });

  let response = "";
  let order = "";

  try {
    response = await axios.get(darazURL);
    order = response.data.data;
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get order details" });
  }

  const newOrder = {
    seller_id: `${seller_id}`,
    //promised_shipping_times, updated_at, price, shipping_fee_original, payment_method, shipping_fee_discount_seller, shipping_fee,
    // items_count, statuses, address_billing, order_id, gift_message, remarks, address_shipping, order_items
    promised_shipping_times: `${order.promised_shipping_times}`,
    voucher_platform: `${order.voucher_platform || 0}`,
    voucher: `${order.voucher}`,
    voucher_seller: `${order.voucher_seller || 0}`,
    order_number: `${order.order_number}`,
    created_at: new Date(order.created_at).toISOString(),
    voucher_code: `${order.voucher_code}`,
    gift_option: `${order.gift_option}`,
    shipping_fee_discount_platform: `${order.shipping_fee_discount_platform}`,
    customer_name:
      order.customer_first_name && order.customer_last_name
        ? order.customer_first_name + " " + order.customer_last_name
        : order.customer_first_name
        ? order.customer_first_name
        : order.customer_last_name
        ? order.customer_last_name
        : "N/A",
    updated_at: new Date(order.updated_at).toISOString(),
    price: order.price,
    shipping_fee_original: `${order.shipping_fee_original}`,
    payment_method: `${order.payment_method}`,
    shipping_fee_discount_seller: `${order.shipping_fee_discount_seller}`,
    shipping_fee: `${order.shipping_fee}`,
    items_count: `${order.items_count}`,
    statuses: `${order.statuses}`,
    address_billing: order.address_billing,
    order_id: `${order.order_id}`,
    gift_message: order.gift_message,
    remarks: order.remarks,
    address_shipping: order.address_shipping,
    order_items: [],
    transactions: [],
    shop_logo: "none",
    user_id: store.user_id,
  };

  // Get its line items
  const darazURL2 = await generateDarazURL("/order/items/get", access_token, {
    order_id: order_id,
  });

  let response2 = "";
  let orderItems = "";

  try {
    response2 = await axios.get(darazURL2);
    orderItems = response2.data.data;
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get order items" });
  }
  newOrder.order_items = orderItems;

  // Finally append the order into the DB
  let orderAdded = "";
  try {
    orderAdded = await prisma.darazOrders.create({
      data: newOrder,
    });
  } catch (e) {
    console.log("error: ", e);

    // If the prisma error is due to the unique constraint violation, it means the order already exists
    if (e.meta.target[0] === "order_id") {
      return res
        .status(400)
        .json({ message: "Order Already Exists", newOrder });
    }
    return res
      .status(400)
      .json({ message: "Could not Append Order into DB", newOrder });
  }

  res.status(200).json({ orderAdded, message: "Order Added" });
});

router.get("/orders/sync", async (req, res) => {
  const { seller_id, order_id } = req.query;

  // Only update its statuses, and the order items

  // Find the store with the seller_id
  const store = await prisma.store.findUnique({
    where: {
      seller_id,
    },
  });
  if (!store || store.length === 0) {
    return res.status(404).json({ message: "Store not found", seller_id });
  }

  const { access_token } = store.store_info;

  const darazURL = await generateDarazURL("/order/get", access_token, {
    order_id,
  });

  let response = "";
  let fetched_order = "";

  try {
    response = await axios.get(darazURL);
    fetched_order = response.data.data;
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get order details" });
  }

  // Fetch its line items
  // Get its line items
  const darazURL2 = await generateDarazURL("/order/items/get", access_token, {
    order_id: order_id,
  });

  let response2 = "";
  let orderItems = "";

  try {
    response2 = await axios.get(darazURL2);
    orderItems = response2.data.data;
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get order items" });
  }

  const updatedFields = {
    statuses: `${fetched_order.statuses}`,
    order_items: orderItems,
    updated_at: new Date(fetched_order.updated_at).toISOString(),
  };
  let orderUpdated = "";
  try {
    orderUpdated = await prisma.darazOrders.update({
      where: {
        order_id,
      },
      data: updatedFields,
    });
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not update order" });
  }

  res.status(200).json({ orderUpdated, message: "Order Synced" });
});

router.get("/d", async (req, res) => {
  const d = await prisma.darazStoreTransactions.deleteMany();
  const d2 = await prisma.darazOrders.deleteMany();

  res.status(200).json({ d, d2 });
});

router.get("/pepsi", async (req, res) => {
  // const d = await prisma.darazOrders.findMany();

  // SELECT * from "DarazOrders" where seller_id = '6005013234019' and created_at >= '2024-04-18 06:49:21' order by created_at asc;
  // Delete the above query
  const d = await prisma.darazOrders.deleteMany({});
  const dd = await prisma.darazStoreTransactions.deleteMany({});
  const ddd = await prisma.darazLogs.deleteMany({});

  res.status(200).json({ d });
});

router.post("/save-log", async (req, res) => {
  //
  const { log } = req.body;
  let save = "";
  try {
    save = await prisma.darazLogs.create({
      data: {
        ...log,
      },
    });
  } catch (e) {
    console.log("Error saving the log", e, log);
  }

  res.status(200).json({ message: "Log Saved" });
});

router.post("/rts", async (req, res) => {
  const { rtsData } = req.body;
  const start = new Date().getTime();

  const RTSed = {};

  // {"124214124":  {orders: [], access_token: ""}, "2222": {orders: [], access_token: ""}}

  const seller_ids = Object.keys(rtsData);
  for (let s of seller_ids) {
    const store = await prisma.store.findUnique({
      where: {
        seller_id: `${s}`,
      },
    });
    // const access_token = store.store_info.access_token;

    rtsData[s].access_token = store.store_info.access_token;

    console.log("PRE-RTS LOG: ", {
      store: store.name,
      orders_ids: rtsData[s].orders.map((o) => o.order_id),
      order_items_ids: rtsData[s].orders.map((o) =>
        o.order_items.map((oi) => oi.order_item_id)
      ),
      orders_count: rtsData[s].orders.length,
      seller_id: s,
    });

    for (let order of rtsData[s].orders) {
      const RTSURL = await generateDarazURL(
        "/order/rts",
        rtsData[s].access_token,
        {
          delivery_type: "dropship",
          order_item_ids: JSON.stringify(
            order.order_items.map((oi) => `${oi.order_item_id}`)
          ),
        }
      );

      let response;
      let result;

      try {
        response = await axios.post(RTSURL, {
          delivery_type: "dropship",
          order_item_ids: JSON.stringify(
            order.order_items.map((oi) => `${oi.order_item_id}`)
          ),
        });

        result = response.data;
        console.log("result", result);
        if (result.code === "82") {
          // This code occurs when atleast one of the order items is not in the RTS state
          // So we need to sync this order, perhaps this order is canceled
          console.log(result.message);
          const url = `https://esync-backend.vercel.app/daraz/orders/sync?seller_id=${s}&order_id=${order.order_id}`;
          try {
            res = await axios.get(url);
            console.log(`Synced new Order: ${order.order_id}`, res.data);
          } catch (e) {
            console.log(
              `Error syncing ${store.name} order ${order.order_id}`,
              e
            );
          }
        }

        if (result.code === "0") {
          if (!RTSed[store.name]) {
            RTSed[s] = [];
            RTSed[s].push(order.order_id);
          } else {
            RTSed[s].push(order.order_id);
            RTSed[s]["orders_count"] = RTSed[s].length;
          }
        }
      } catch (e) {
        console.log(
          `error couldn't send request to daraz RTS URL for store ${store.name}: `,
          e
        );
      }
    }
  }
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  res.status(200).json({ timeTaken, RTSed });
});

module.exports = router;
