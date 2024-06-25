const router = require("express").Router();
const crypto = require("crypto");
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();
const CryptoJS = require("crypto-js");
const { generateDarazURL, orders } = require("../utils/darazActions");
const { create } = require("domain");

function convertStringToFloat(str) {
  // Remove commas from the string
  const sanitizedStr = str.replace(/,/g, "");
  // Convert the sanitized string to a float
  const floatValue = parseFloat(sanitizedStr);

  // Return the float value
  return floatValue;
}

function convertStringToInt(str) {
  // Remove commas from the string
  const sanitizedStr = str.replace(/,/g, "");
  // Convert the sanitized string to a float
  const intValue = parseInt(sanitizedStr);

  // Return the float value
  return intValue;
}

function convertPhoneNumber(phoneNumber) {
  // Remove all non-digit characters except for the leading '+'
  const cleanedNumber = phoneNumber.replace(/[^\d+]/g, "");

  // Check if the phone number starts with '+92'
  if (cleanedNumber.startsWith("92")) {
    // Replace '+92' with '0'
    return cleanedNumber.replace("92", "0");
  }

  // If the number does not start with '+92', return it as is
  return cleanedNumber;
}

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

router.get("/sad", async (req, res) => {
  res.status(200).json({
    data: await prisma.darazOrder.findMany({
      where: {
        order_id: "187132552068523",
      },
    }),
  });
});

// Define a function to send a request for each order

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

  const darazURL__ = generateDarazURL(
    "/seller/get",
    storeData.access_token,
    {}
  );
  const response__ = await axios.get(darazURL__);
  const name = response__.data.data.name;
  const logo_url = response__.data.data.logo_url;

  // let newStore = "";

  const newStore = {
    seller_id: storeData.user_info.seller_id,
    user_id: userId, // Specify the userId for the associated user
    name: name,
    platform: "daraz",
    image_url: logo_url || "none",
    store_info: { platform: "daraz", ...storeData },
    connected_at: new Date().toISOString(),
  };

  // try {
  //   newStore = await prisma.store.create({
  //     data: {
  //       seller_id: storeData.user_info.seller_id,
  //       user_id: userId, // Specify the userId for the associated user
  //       name: name,
  //       platform: "daraz",
  //       image_url: response__.logo_url || "none",
  //       image_public_id: "none",
  //       store_info: { platform: "daraz", ...storeData },
  //     },
  //   });
  // } catch (e) {
  //   console.log("error adding store to DB: ", e);
  //   return res.status(200).json({ message: "Error adding store to DB" });
  // }

  const redirectCode = CryptoJS.HmacSHA256(name, "daraz").toString();

  // Send a request to nakson.services to trigger the inngest api to append orders
  // const ingestUrl = `https://esync.nakson.services/api/daraz/orders`;

  // const orderRes = await axios.post(ingestUrl, {
  //   userID: userId,
  //   accessToken: storeData.access_token,
  //   sellerID: storeData.user_info.seller_id,
  // });

  // console.log("orderRes: ", orderRes.data);

  res.status(200).json({
    newStore: newStore,
    code: redirectCode,
    message: "Store Added",
  });
});

// Show all connected Stores
router.post("/get-stores", async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Store: true,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const darazStores = user.Store.filter((s) => s.platform === "daraz");
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

router.delete("/dd", async (req, res) => {
  const ord = await prisma.darazOrder.deleteMany({});
  const cus = await prisma.customer.deleteMany({});
  res.status(200).json({ cus, ord });
});
router.post("/add-customers", async (req, res) => {
  const { customers } = req.body;
  try {
    const newCustomer = await prisma.customer.createMany({
      data: customers,
      skipDuplicates: true,
    });
    return res.status(200).json({ newCustomer });
  } catch (e) {
    console.log("Error adding customer", e);
    return res.status(400).json({ message: "Error adding customer" });
  }
});

router.post("/append-orders", async (req, res) => {
  const { orders } = req.body;

  for (let order of orders) {
    if (!order.order_items) {
      console.log("Order Items not found", order.order_id);
      continue;
    }
  }

  console.log("orders:", orders.length);
  let data = "";
  try {
    data = await prisma.darazOrder.createMany({
      data: orders,
      skipDuplicates: true,
    });
  } catch (e) {
    console.log("Couldn't append to DB", e);
    return res.status(400).json({ message: "Couldn't append to DB" });
  }

  res.status(200).json({ message: "Success", data: data });
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

router.post("/add-transaction", async (req, res) => {
  // Only adds transactions orderItem_status of which is Delivered or Returned

  const start = new Date();
  const { order_numbers, order_transactions } = req.body;
  let compressedTransactions = "";

  if (
    !order_numbers ||
    order_numbers.length === 0 ||
    !order_transactions ||
    Object.values(order_transactions).length === 0
  ) {
    compressedTransactions = req.body.compressedTransactions;
  }

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
  const orders = await prisma.darazOrder.findMany({
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

  // const updates = orders.map((order) => {
  //   const order_number = order.order_number;
  //   const order_transactions = transactions[order_number];
  //   return {
  //     order_number,
  //     data: {
  //       transactions: [...order.transactions, ...order_transactions],
  //     },
  //   };
  // });

  // Write an update query to update all the orders at once, updateMany
  let t;

  let counter = 0;
  for (let order of orders) {
    let transactionToBeUpdated = order_transactions[order.order_id];
    let transactions = order.transactions;

    transactions = [...transactions, ...transactionToBeUpdated];

    transactions = // Remove duplicates and append the new transactions
      transactions.filter(
        (obj1, i, arr) =>
          arr.findIndex(
            (obj2) => JSON.stringify(obj2) === JSON.stringify(obj1)
          ) === i
      );

    order.transactions = transactions;
    console.log(
      "created at: ",
      order.created_at,
      "count: ",
      counter + 1,
      "order_id: ",
      order.order_id
    );
    counter += 1;
  }

  // useUpdateMany to update orders

  const updatedOrders = await prisma.darazOrder.updateMany({
    where: {
      order_id: {
        in: order_numbers,
      },
    },
    data: {
      transactions: orders.map((order) => order.transactions),
    },
  });

  res.status(200).json({ updatedOrdersCount: updatedOrders.count, timeTaken });
});
// const fetchTransactions = async (startDate, endDate, accessToken) => {
//   const limit = 500;
//   const maxOffset = 100000;
//   const order_numbers = [];
//   const order_transaction = {};

//   let currentStartDate = new Date(startDate);
//   const finalEndDate = new Date(endDate);

//   while (currentStartDate < finalEndDate) {
//     let currentEndDate = new Date(currentStartDate);
//     currentEndDate.setDate(currentEndDate.getDate() + 179);
//     if (currentEndDate > finalEndDate) {
//       currentEndDate = finalEndDate;
//     }

//     let offset = 0;
//     while (true) {
//       const transactionAPIURL = generateDarazURL(
//         "/finance/transaction/details/get",
//         accessToken,
//         {
//           start_time: currentStartDate.toISOString(),
//           end_time: currentEndDate.toISOString(),
//           limit,
//           offset,
//         }
//       );

//       let response = "";
//       let transactions = "";
//       try {
//         response = await fetch(transactionAPIURL, {
//           method: "GET",
//           redirect: "follow",
//         });
//         transactions = await response.json();
//         transactions = transactions.data;
//       } catch (e) {
//         console.log("error: Could not send request to Transaction API", e);
//       }

//       if (transactions.length === 0) break;

//       for (let transaction of transactions) {
//         const order_no = transaction.order_no;
//         console.log(
//           "Date: ",
//           transaction.transaction_date,
//           "Offset: ",
//           offset,
//           "currentEndDate: ",
//           currentEndDate
//         );
//         if (order_no) {
//           if (!order_transaction[order_no]) {
//             order_transaction[order_no] = [];
//             order_numbers.push(order_no);
//           }
//           if (
//             !order_transaction[order_no].some(
//               (t) => JSON.stringify(t) === JSON.stringify(transaction)
//             )
//           ) {
//             order_transaction[order_no].push(transaction);
//           }
//         }
//       }

//       offset += limit;
//       if (offset >= maxOffset) {
//         currentEndDate = new Date(
//           convertDateFormat(
//             transactions[transactions.length - 1].transaction_date
//           )
//         );
//         currentEndDate.setSeconds(currentEndDate.getSeconds() - 1);
//         offset = 0;
//       }
//     }

//     currentStartDate.setDate(currentStartDate.getDate() + 180);
//   }
//   return { order_numbers, order_transaction };
// };

const fetchTransactions = async (startDate, endDate, accessToken) => {
  console.log("Fetching transactions from Daraz API");
  const limit = 500;
  const maxOffset = 100000;
  const order_numbers = [];
  const order_transaction = [];

  let currentStartDate = new Date(startDate);
  const finalEndDate = new Date(endDate);

  while (currentStartDate < finalEndDate) {
    let currentEndDate = new Date(currentStartDate);
    currentEndDate.setDate(currentEndDate.getDate() + 179);
    if (currentEndDate > finalEndDate) {
      currentEndDate = finalEndDate;
    }

    let offset = 0;
    while (true) {
      const transactionAPIURL = generateDarazURL(
        "/finance/transaction/details/get",
        accessToken,
        {
          start_time: currentStartDate.toISOString(),
          end_time: currentEndDate.toISOString(),
          limit,
          offset,
        }
      );

      let response = "";
      let transactions = "";
      try {
        response = await fetch(transactionAPIURL, {
          method: "GET",
          redirect: "follow",
        });
        transactions = await response.json();
        transactions = transactions.data;
      } catch (e) {
        console.log("error: Could not send request to Transaction API", e);
      }

      if (transactions.length === 0) break;

      for (let t of transactions) {
        if (!t.order_no) {
          continue;
        } else {
          order_transaction.push(t);
        }
      }

      console.log(
        "transaction_date",
        transactions[transactions.length - 1].transaction_date
      );

      offset += limit;
      if (offset >= maxOffset) {
        currentEndDate = new Date(
          convertDateFormat(
            transactions[transactions.length - 1].transaction_date
          )
        );
        currentEndDate.setSeconds(currentEndDate.getSeconds() - 1);
        offset = 0;
      }
    }

    currentStartDate.setDate(currentStartDate.getDate() + 180);
  }
  return { order_numbers, order_transaction };
};

router.get("/trans", async (req, res) => {
  // 60 days of transactions. should be appended within 30 mins
  // const startDate = new Date("2024-05-25").toISOString();
  // const endDate = new Date().toISOString();

  const startDate = new Date("2023-12-20").toISOString();
  const endDate = new Date().toISOString();

  const t = await fetchTransactions(
    startDate,
    endDate,
    "500009000281H3ZxXReCQSeRjLow4vpED3lUelsB1e9e3d9ausCABiR5WFXJve"
  );
  let order_transactions = t.order_transaction;
  let order_numbers = t.order_numbers;

  let paid_order_numbers = [];
  let paid_order_amounts = [];

  // Save them in an object {}
  const paidOrdersMap = {};

  // let sliced_order_transactions: any = Object.keys(order_transactions).slice(i, i + sliceCount).reduce((result, key) => {
  //   result[key] = order_transactions[key];

  order_transactions = order_transactions.map((t) => {
    const randomID = Math.floor(10000000000 + Math.random() * 90000000000);
    return {
      id: `${randomID}`,
      // seller_id: `${sellerID}`,
      order_number: t.order_no || "none",
      order_item_status: t.orderItem_status,
      amount: convertStringToFloat(t.amount),
      transaction_date: new Date(t.transaction_date).toISOString(),
      transaction_type: t.transaction_type,
      statement: t.statement,
      fee_name: t.fee_name,
      paid_status: t.paid_status,
      WHT_amount: t.WHT_amount,
      VAT_in_amount: t.VAT_in_amount,
      transaction_number: t.transaction_number,
      comment: t.comment,
      // user_id: userID,
    };
  });

  // for (let t of sliced_order_transcations) {
  //   console.log("t", t);
  //   if (
  //     t.order_item_status === "Delivered" &&
  //     t.paid_status.toLowerCase() === "paid"
  //   ) {
  //     // Mark the order paid in the database

  //     if (!paid_order_numbers.includes(t.order_number)) {
  //       paid_order_numbers.push(t.order_number);
  //     }
  //   }
  // }

  // for (let on of paid_order_numbers) {
  //   paid_order_amounts.push(
  //     sliced_order_transcations
  //       .filter((t) => t.order_number === on)
  //       .reduce((acc, t) => acc + t.amount, 0)
  //   );
  // }
  // First, collect the order numbers that are both delivered and paid
  for (let t of order_transactions) {
    if (
      t.order_item_status === "Delivered" &&
      t.paid_status.toLowerCase() === "paid"
    ) {
      if (!paidOrdersMap[t.order_number]) {
        paidOrdersMap[t.order_number] = 0;
      }
    } else if (
      t.order_item_status === "Returned" &&
      t.paid_status.toLowerCase() === "paid"
    ) {
      if (!paidOrdersMap[t.order_number]) {
        paidOrdersMap[t.order_number] = 0;
      }
    }
  }

  // Then, sum the amounts for each paid order number
  for (let t of order_transactions) {
    if (paidOrdersMap.hasOwnProperty(t.order_number)) {
      paidOrdersMap[t.order_number] += t.amount;
    }
  }

  res.status(200).json({
    paidOrdersMap,
    sad: order_transactions.filter((t) => t.order_number === "175985463223476"),
  });
});

router.post("/add-store-transactions", async (req, res) => {
  const { transactions } = req.body;
  let data = "";
  try {
    data = await prisma.darazStoreTransaction.createMany({
      data: transactions,
      skipDuplicates: true,
    });
  } catch (e) {
    console.log("Couldn't append to DB", e);
    return res.status(400).json({ message: "Couldn't append to DB" });
  }
  res.status(200).json({ storeTransactionsCount: data.count });
});

router.post("/add-store", async (req, res) => {
  const { store } = req.body;

  const newStore = await prisma.store.create({
    data: store,
  });

  res.status(200).json({ newStore });
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

  const darazURL = generateDarazURL("/order/get", access_token, {
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

  let phone = convertPhoneNumber(order.address_shipping.phone);
  // If phone is ""
  if (phone === "" || !phone) {
    phone = `${Math.floor(10000000000 + Math.random() * 90000000000)}1234`;
  }

  // Get its line items
  const darazURL2 = generateDarazURL("/order/items/get", access_token, {
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

  const newOrder = {
    seller_id: `${seller_id}`,
    shop_skus: orderItems.map((oi) => oi.shop_sku).join(","),
    promised_shipping_times: `${order.promised_shipping_times}`,
    voucher_platform: `${order.voucher_platform || 0}`,
    voucher: `${order.voucher}`,
    voucher_seller: `${order.voucher_seller || 0}`,
    payment_status: false,
    order_number: `${order.order_number}`,
    created_at: new Date(order.created_at).toISOString(),
    voucher_code: `${order.voucher_code}`,
    gift_option: `${order.gift_option}`,
    shipping_fee_discount_platform: convertStringToFloat(
      `${order.shipping_fee_discount_platform}`
    ),
    updated_at: new Date(order.updated_at).toISOString(),
    price: convertStringToFloat(order.price),
    shipping_fee_original: order.shipping_fee_original,
    payment_method: `${order.payment_method}`,
    shipping_fee_discount_seller: order.shipping_fee_discount_seller,
    shipping_fee: order.shipping_fee,
    items_count: order.items_count,
    statuses: order.statuses.join(","),
    order_id: `${order.order_id}`,
    gift_message: order.gift_message,
    remarks: order.remarks,
    order_items: orderItems,
    shipping_address: order.address_shipping,
    billing_address: order.address_billing,
    is_received: false,
    user_id: store.user_id,
    customer_id: phone,
    transactions_amount: 0,
  };
  const potentialNewCustomer = [
    {
      id: phone,
      shopify_id: "none",
      first_name: order.address_shipping.first_name,
      last_name: order.address_shipping.last_name,
      email: orderItems[0].digital_delivery_info,
      city: order.address_shipping.city,
      province: order.address_shipping.address3,
      country: order.address_shipping.country,
      user_id: store.user_id,
    },
  ];

  // Add The Customer
  let customerAdded = "";
  try {
    customerAdded = await prisma.customer.createMany({
      data: potentialNewCustomer,
      skipDuplicates: true,
    });
  } catch (e) {
    console.log("Error Adding Customer: ", e);
    return res.status(400).json({ message: "Could not Add Customer" });
  }

  // Finally append the order into the DB
  let orderAdded = "";
  try {
    orderAdded = await prisma.darazOrder.create({
      data: newOrder,
    });
  } catch (e) {
    console.log("error: ", e);
    console.log("e", e.code);
    // If the prisma error is due to the unique constraint violation, it means the order already exists
    if (e.code === "P2002") {
      return res
        .status(400)
        .json({ message: "Order Already Exists", newOrder });
    }
    return res
      .status(400)
      .json({ message: "Could not Append Order into DB", newOrder });
  }
  console.log(`${newOrder.order_id}: ${newOrder.statuses}`, "Created");
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

  const darazURL = generateDarazURL("/order/get", access_token, {
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
  const darazURL2 = generateDarazURL("/order/items/get", access_token, {
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

  if (fetched_order.statuses.includes("returned")) {
    // Save to Temporary Data
    await prisma.temporaryData.create({
      data: {
        email: "return@gmail.com",
        data: fetched_order,
      },
    });
  }

  const updatedFields = {
    statuses: fetched_order.statuses.join(","),
    order_items: orderItems,
    updated_at: new Date(fetched_order.updated_at).toISOString(),
  };
  let orderUpdated = "";
  try {
    orderUpdated = await prisma.darazOrder.update({
      where: {
        order_id,
      },
      data: updatedFields,
    });
    console.log(`${order_id}: ${fetched_order.statuses.join(",")}`, "Synced");
  } catch (e) {
    if (e.code === "P2025") {
      // That means the order is not found, so we need to create a new order
      const newOrderRes = await axios.get(
        `https://esync-backend.vercel.app/daraz/orders/add-new-order?seller_id=${seller_id}&order_id=${order_id}`
      );
      return res
        .status(200)
        .json({ message: "Order Synced", orderUpdated: newOrderRes.data });
    }

    console.log("error: ", e);
    return res.status(400).json({ message: "Could not update order" });
  }

  res.status(200).json({ orderUpdated, message: "Order Synced" });
});

router.get("/order/:seller_id", async (req, res) => {
  // Returns only 1 order given the seller_id

  const seller_id = req.params.seller_id;
  const order = await prisma.darazOrder.findFirst({
    where: {
      seller_id: seller_id,
    },
  });

  res.status(200).json({ order: order });
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

  let result = "";

  const allRequests = [];

  const RTSed = {};
  const shipping_label_data = {};

  // {"124214124":  {orders: [], access_token: ""}, "2222": {orders: [], access_token: ""}}

  const seller_ids = Object.keys(rtsData);
  for (let s of seller_ids) {
    const store = rtsData[s].store_name;

    RTSed[s] = {
      rts_orders: { count: 0, data: [], order_item_ids: [], store_name: store },
      cancelled_orders: { count: 0, data: [], store_name: store },
    };

    shipping_label_data[s] = {
      seller_id: s,
      store_name: store,
      order_item_ids: [],
      access_token: "",
    };

    // const store = await prisma.store.findUnique({
    //   where: {
    //     seller_id: `${s}`,
    //   },
    // });
    // const access_token = store.store_info.access_token;

    const requests = rtsData[s].orders.map((order) => {
      const RTSURL = generateDarazURL("/order/rts", rtsData[s].access_token, {
        delivery_type: "dropship",
        order_item_ids: JSON.stringify(
          order.order_items.map((oi) => `${oi.order_item_id}`)
        ),
      });

      // let response;
      // let result;

      return axios.post(RTSURL, {
        delivery_type: "dropship",
        order_item_ids: JSON.stringify(
          order.order_items.map((oi) => `${oi.order_item_id}`)
        ),
      });
    });

    result = await Promise.all(requests);
    result.map((r, i) => {
      allRequests.push({
        data: r.data,
        order_id: rtsData[s].orders[i].order_id,
        order_item_ids: rtsData[s].orders[i].order_items.map(
          (oi) => oi.order_item_id
        ),
        seller_id: s,
      });
    });
    // promises__.push(result);
    // result.map((r, i) => {
    //   const order = rtsData[s].orders[i];
    //   if (r.data.code === "0") {
    //     RTSed[store].rts_orders.data.push(order.order_id);
    //     RTSed[store].rts_orders.count = RTSed[store].rts_orders.data.length;
    //     RTSed[store].seller_id = s;
    //   } else {
    //     RTSed[store].seller_id = s;
    //     RTSed[store].cancelled_orders.data.push(order.order_id);
    //     RTSed[store].cancelled_orders.count =
    //       RTSed[store].cancelled_orders.data.length;
    //   }
    // });
    // result.forEach(async (r, i) => {
    //   const order = rtsData[s].orders[i];

    //   let result_ = "";
    //   if (r.data.code === "82") {
    //     // This code occurs when atleast one of the order items is not in the RTS state
    //     // So we need to sync this order, perhaps this order is canceled
    //     const url = `https://esync-backend.vercel.app/daraz/orders/sync?seller_id=${s}&order_id=${order.order_id}`;
    //     result_ = await axios.get(url);
    //     console.log(`Synced cancelled Order: ${order.order_id}`);

    //     RTSed[store].cancelled_orders.data.push(order.order_id);
    //     RTSed[store].cancelled_orders.count =
    //       RTSed[store].cancelled_orders.data.length;
    //   }

    //   if (r.data.code === "0") {
    //     RTSed[store].rts_orders.data.push(order.order_id);
    //     RTSed[store].rts_orders.count = RTSed[store].rts_orders.data.length;
    //   }

    //   // if (!RTSed[store]) {
    //   //   RTSed[store] = [];
    //   //   RTSed[store].push(order.order_id);
    //   // } else {
    //   //   RTSed[store].push(order.order_id);
    //   //   RTSed[store]["orders_count"] = RTSed[s].length;
    //   // }

    //   if (i === result.length - 1 && s === seller_ids[seller_ids.length - 1]) {
    //     // Add to db
    //     RTSed.timeTaken = (new Date().getTime() - start) / 1000;
    //     prisma.temporaryData
    //       .create({
    //         data: {
    //           email: "RTSed@gmail.com",
    //           data: RTSed,
    //         },
    //       })
    //       .then((a) => {
    //         console.log("Added to DB: ", a);
    //       });
    //     console.log("RTSed: ", RTSed);
    //   }
    // });
  }
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  res.status(200).json({
    message: "RTSed",
    timeTaken,
    allRequests,
    RTSed,
    shipping_label_data,
  });
});

router.post("/save-rts", async (req, res) => {
  const { RTSed } = req.body;
  const add = await prisma.temporaryData.create({
    data: {
      email: "rtsed@gmail.com",
      data: RTSed,
    },
  });
  res.status(200).json({ add });
});

router.get("/order/:id", async (req, res) => {
  const order_id = req.params.id;

  const order = await prisma.darazOrder.findUnique({
    where: {
      order_id: order_id,
    },
  });

  res.status(200).json({ order: order });
});

router.get("/orders", async (req, res) => {
  // SELECT * FROM "DarazOrders" WHERE order_id in ('213123', '123123', '123123')

  let { order_ids } = req.query; //111,22

  // Convert to string
  order_ids = order_ids.split(",");

  if (!order_ids) {
    return res.status(400).json({ message: "No Order IDs Provided" });
  }

  const orders = await prisma.darazOrder.findMany({
    where: {
      order_id: {
        in: order_ids,
      },
    },
  });

  res.status(200).json({ orders });
});

router.post("/pack", async (req, res) => {
  const { pack_data } = req.body;

  // pack_data = { [seller_id] :  {order_ids: [], order_item_ids: []}, store_name: "sad", access_token: "sad" }  }
  const sads = [];

  const response = {};

  const start = new Date().getTime();
  // const packReq = {
  //   pack_order_list: [
  //     {
  //       order_item_list: [186889420966175, 186889421066175, 186889421166175],
  //       order_id: 186889420866175,
  //     },
  //   ],
  //   delivery_type: "dropship",
  //   shipment_provider_code: "FM50",
  //   shipping_allocate_type: "TFS",
  // };

  const seller_ids = Object.keys(pack_data);

  // seller_ids.map(async (s) => {
  for (let s of seller_ids) {
    const requests = pack_data[s].order_ids.map((order_id, index) => {
      const order_items_ids = pack_data[s].order_item_ids[index];
      const packReq = {
        pack_order_list: [
          {
            order_item_list: order_items_ids,
            order_id: order_id,
          },
        ],
        delivery_type: "dropship",
        shipment_provider_code: "FM50",
        shipping_allocate_type: "TFS",
      };

      const url = generateDarazURL(
        "/order/fulfill/pack",
        pack_data[s].access_token,
        {
          packReq: JSON.stringify(packReq),
        }
      );

      return axios.post(url, {
        packReq: JSON.stringify(packReq),
      });
    });

    response[pack_data[s].store_name] = {
      package_ids: [],
      failed: [],
      order_ids: [],
      access_token: pack_data[s].access_token,
    };

    let result_ = await Promise.all(requests);
    for (let r of result_) {
      let i = 0;
      if (r.data.code === "0" && r.data.result) {
        const pack_order_list = r.data.result.data.pack_order_list[0];
        const packed_order_id = pack_order_list.order_id;
        const package_id = pack_order_list.order_item_list[0].package_id;

        response[pack_data[s].store_name].package_ids.push(package_id);
        response[pack_data[s].store_name].order_ids.push(packed_order_id);
      } else {
        response[pack_data[s].store_name].failed.push(r.data);
      }
      i += 1;
    }
  }
  // const requests = order_ids.map((order_id, index) => {
  //   const order_items_ids = order_item_ids[index];
  //   const packReq = {
  //     pack_order_list: [
  //       {
  //         order_item_list: order_items_ids,
  //         order_id: order_id,
  //       },
  //     ],
  //     delivery_type: "dropship",
  //     shipment_provider_code: "FM50",
  //     shipping_allocate_type: "TFS",
  //   };

  //   const url = generateDarazURL(
  //     "/order/fulfill/pack",
  //     "50000901a10jXhsqhAgCQB1434ada5lSWGKmSpvIVxFDyCrQdNOZPtOxhSSIWb",
  //     {
  //       packReq: JSON.stringify(packReq),
  //     }
  //   );

  //   return axios.post(url, {
  //     packReq: JSON.stringify(packReq),
  //   });
  // });

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  res.status(200).json({ timeTaken, response });
});

router.post("/ready-to-ship", async (req, res) => {
  const { rtsData } = req.body;

  const rtsResponses = {};
  //  {shop: "", package_ids: [], failed: [], order_ids: [], access_token: ""}

  // const rtsData = {
  //   BulkSource: {
  //  20 packages_ids per array
  //     package_ids: [ [1,2,3....20], [21,22,23....40] ],
  //     order_ids: [[1,2,3....20], [21,22,23....40]],
  //     access_token:
  //       "50000600740bIxLfV8MFQ3rQbAzFtloqhzseXEixhkzucJgtcFnu1239eeaer",
  //   },
  // };
  const start = new Date().getTime();

  const shops = Object.keys(rtsData);

  for (let s of shops) {
    rtsResponses[s] = {
      shop: s,
      package_ids: [],
      failed: [],
      order_ids: [],
      access_token: rtsData[s].access_token,
    };

    // const rtsbody = { packages: [{ package_id: "FP038524014" }] };
    const requests = rtsData[s].package_ids.map((package_ids_arr, i) => {
      const rtsBody = {
        packages: package_ids_arr.map((package_id) => ({ package_id })),
      };
      const rtsURL = generateDarazURL(
        "/order/package/rts",
        rtsData[s].access_token,
        {
          readyToShipReq: JSON.stringify(rtsBody),
        }
      );

      return axios.post(rtsURL, {
        readyToShipReq: JSON.stringify(rtsBody),
      });
    });

    const result_ = await Promise.all(requests);
    let i = 0;
    for (let r of result_) {
      if (r.data.result.success === true) {
        rtsResponses[s].package_ids.push(
          // r.data.result.data.packages[i].package_id
          r.data.result.data.packages.map((p) => p.package_id)
        );
      }
    }
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  res.status(200).json({ timeTaken, RTSED: rtsResponses });
});

router.post("/shipping-label", async (req, res) => {
  const { shippingLabelBody, access_token } = req.body;
  const start = new Date().getTime();

  let shippingLabelURL = "";

  const url = generateDarazURL("/order/package/document/get", access_token, {
    getDocumentReq: JSON.stringify(shippingLabelBody),
  });

  let response = "";
  try {
    response = await axios.post(url, {
      getDocumentReq: JSON.stringify(shippingLabelBody),
    });
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get shipping labels" });
  }

  if (response.data.code === "ServiceTimeout") {
    return res.status(200).json({ message: "Service Timeout" });
  }

  if (response.data.result.success === true) {
    shippingLabelURL = response.data.result.data.pdf_url;
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  res.status(200).json({ timeTaken, shippingLabelURL });
});

router.put("/update-store", async (req, res) => {
  const { seller_id, image_url, name } = req.body;

  const updatedStore = await prisma.store.update({
    where: { seller_id: seller_id },
    data: {
      name: name,
      image_url: image_url,
    },
  });

  res.status(200).json(updatedStore);
});

router.put("/mark-orders-as-received", async (req, res) => {
  const { order_ids } = req.body;

  try {
    const updatedOrders = await prisma.darazOrder.updateMany({
      where: {
        order_id: {
          in: order_ids,
        },
      },
      data: {
        is_received: true,
      },
    });
    return res.status(200).json({ updatedOrders });
  } catch (e) {
    console.log("Error marking orders as received", e);
    return res
      .status(400)
      .json({ message: "Error marking orders as received" });
  }
});

// PRODUCTS
router.get("/get-products", async (req, res) => {
  const { at, name, seller_id } = req.query;

  const product_url = generateDarazURL("/products/get", at, {
    filter: "live",
  });

  let response = "";
  let products = "";

  try {
    response = await axios.get(product_url);
    products = response.data.data.products;
  } catch (e) {
    console.log("error: ", e);
    return res.status(400).json({ message: "Could not get products" });
  }

  res.status(200).json({ seller_id: seller_id, storeName: name, products: products });
});

router.get("/import-products", async (req, res) => {
  const { productsToBeImported, user_id, seller_id } = req.body;

  const productsToAppend = [];
  const variantsToAppend = [];
  const variantOnStoresToAppend = [];

  for (let product of productsToBeImported) {
    // Generate a random number of 9 digits
    // const randomNum = Math.floor(100000000 + Math.random() * 900000000);
    const product_id = product.item_id;
    const newProduct = {
      id: product_id,
      name: product.attributes.name_en
        ? product.attributes.name_en
        : product.attributes.name,
      image_url: product.images.join(","),
      description: product.attributes.short_description
        ? product.attributes.short_description
        : product.attributes.description
        ? product.attributes.description
        : "No Description",
      created_at: new Date(Number(product.created_time)),
      updated_at: new Date(Number(product.updated_time)),
      category_id: 1,
      user_id: user_id,
      packing_material_cost: 0,
    };
    productsToAppend.push(newProduct);

    // Create Variants

    // Generate a random of 9 digits

    for (let sku of product.skus) {
      const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
      const newVariant = {
        id: randomNumber,
        name: sku.color_family ? sku.color_family : sku.SellerSku,
        sku: sku.SellerSku,
        cost: 0,
        image_url: sku.Images.join(","),
        product_id: newProduct.id,
        user_id: user_id,
      };
      variantsToAppend.push(newVariant);
      const VariantOnStore = {
        variant_id: newVariant.id,
        status: sku.Status,
        store_id: seller_id,
        daraz_shop_sku: sku.ShopSku,
        price: sku.price,
        sale_price: sku.special_price,
        deduction_unit: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        platform_details: {
          special_price_start_time: sku.special_from_date,
          special_price_end_time: sku.special_to_date,
        },
        sku_id: sku.ShopSku.split("-")[1],
        seller_sku: sku.SellerSku,
        user_id: user_id,
      };
      variantOnStoresToAppend.push(VariantOnStore);
    }

    // Append to Database
    const productsAppended = await prisma.product.createMany({
      data: productsToAppend,
      skipDuplicates: true,
    });
    console.log("productsAppended", productsAppended);

    const variantsAppended = await prisma.variant.createMany({
      data: variantsToAppend,
      skipDuplicates: true,
    });
    console.log("variantsAppended", variantsAppended);

    const variantOnStoresAppended = await prisma.variantOnStores.createMany({
      data: variantOnStoresToAppend,
      skipDuplicates: true,
    });
    console.log("variantOnStoresAppended", variantOnStoresAppended);
  }

  res.status(200).json({
    message: "done",
  });
});

module.exports = router;
