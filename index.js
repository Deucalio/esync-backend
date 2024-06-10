// Set up an express app
const express = require("express");
const app = express();
const port = 4000;
const axios = require("axios");
const cors = require("cors");
const cloudinary = require("cloudinary");
const PDFDocument = require("pdf-lib").PDFDocument;
const { rgb, concatTransformationMatrix } = require("pdf-lib");
const StandardFonts = require("pdf-lib").StandardFonts;
const bodyParser = require("body-parser");
const { copyStringIntoBuffer, pdfDocEncodingDecode } = require("pdf-lib");
const path = require("path");
const fs = require("fs");
const fontkit = require("@pdf-lib/fontkit");
const bwipjs = require("bwip-js");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
require("dotenv").config();
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);
const https = require("https");
app.use(bodyParser.json());
const { dummy } = require("./routers/dummy");
const { generateDarazURL } = require("./utils/darazActions");

app.use(
  cors({
    origin: "*",
  })
);

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// resend.apiKeys.create({ name: "Production" });
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

cloudinary.config({
  cloud_name: process.env.CLD_CLOUD_NAME,
  api_key: process.env.CLD_API_KEY,
  api_secret: process.env.CLD_API_SECRET,
});

const bcrypt = require("bcryptjs");
const { PrismaClient } = require("./generated/client"); // Adjust the path based on your project structure
const { config } = require("dotenv");

const prisma = new PrismaClient();
// FUNCTIONS

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

function readFontFileFromUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let fontData = Buffer.alloc(0);

      response.on("data", (chunk) => {
        fontData = Buffer.concat([fontData, chunk]);
      });

      response.on("end", () => {
        resolve(fontData);
      });

      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}

// ROUTES FOR CONNECTING SHOPIFY STORE
app.use("/shopify", require("./routers/shopify"));

// Routes for connecting Daraz Store
app.use("/daraz", require("./routers/daraz"));

// Routes for Leopards API
app.use("/leopards", require("./routers/leopards"));

// Routes for TCS API
app.use("/tcs", require("./routers/tcs"));

// Routes for Daewoo API
app.use("/daewoo", require("./routers/daewoo"));

app.get("/kewl", async (req, res) => {
  console.log("Hello World!");
  res.status(200).send("Got em!");
});

// Update Temp Data

app.post("/update-temp-data", async (req, res) => {
  const { data, id } = req.body;
  try {
    const existingData = await prisma.temporaryData.findUnique({
      where: { id: Number(id) },
    });

    const jsonData = { ...existingData.data, fulfilledOrders: data };
    const UpdatedData = await prisma.temporaryData.update({
      where: { id: Number(id) },
      data: { data: jsonData },
    });
  } catch (e) {
    console.log("Error Updating data inside database: ", e);
    return res.status(400).json({ message: "Could not Update data" });
  }
  res.status(200).json({ message: "Data Updated Successfully" });
});

// Get user Info

app.post("/user", async (req, res) => {
  const { email } = req.body;
  console.log("email: ", email);
  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { Store: true, Courier: true },
  });
  res.status(200).send(user);
});
// Add Shipper
app.post("/add-shipper", async (req, res) => {
  const {
    userEmail,
    name,
    email,
    phone,
    city,
    address,
    specialInstructions,
    shopID,
    courierServices,
    courierAccount,
  } = req.body;
  const store = await prisma.store.findUnique({
    where: { id: Number(shopID) },
  });

  const shipment_EMAIL = email;

  // get couriers by user_id
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { Courier: true },
  });
  let userCouriers = user["Courier"];
  userCouriers = userCouriers.filter((courier) => courier.name === "Leopards");

  // You can't assign a shipper to a shop that already has a shipper
  for (const shipper of userCouriers) {
    if (shipper.shippers !== "null") {
      const alreadyAssignedShop = shipper.shippers.find(
        (ship) => ship.shop === store.name
      );
      if (alreadyAssignedShop) {
        return res.status(409).json({ message: "Shop already has a shipper" });
      }
    }
  }

  const shipper = await prisma.courier.findUnique({
    where: { id: Number(courierAccount) },
  });

  const { apiKey, password } = shipper.data;

  let uodateCourier = "";

  if (
    !name ||
    !email ||
    !phone ||
    !address ||
    !specialInstructions ||
    !shopID ||
    !courierServices
  ) {
    return res.status(400).json({ errorMessage: "Incorrect field" });
  }
  let leopardsRes = "";
  if (courierServices.includes("Leopards")) {
    try {
      leopardsRes = await axios.post(
        "https://merchantapi.leopardscourier.com/api/createShipper/format/json",
        {
          api_key: apiKey,
          api_password: password,
          shipment_name: name,
          shipment_phone: phone,
          shipment_address: address,
          city_id: Number(city),
        }
      );
      console.log("res!!!!!!!", leopardsRes.data);

      if (leopardsRes.data.message === "Shipper already exists.") {
        return res.status(409).json({ message: "Shipper already exists" });
      } else if (leopardsRes.data.status === 0) {
        return res.status(400).json({ message: "Incorrect Field" });
      } else {
        if (shipper.shippers === "null") {
          uodateCourier = await prisma.courier.update({
            where: {
              id: Number(courierAccount),
            },
            data: {
              shippers: [
                {
                  id: Math.floor(Math.random() * 1000),
                  specialInstructions,
                  shop: store.name,
                  response: leopardsRes.data.data,
                },
              ],
            },
          });
        } else {
          uodateCourier = await prisma.courier.update({
            where: {
              id: Number(courierAccount),
            },
            data: {
              shippers: [
                ...shipper.shippers,
                {
                  id: Math.floor(Math.random() * 1000),
                  specialInstructions,
                  shop: store.name,
                  response: leopardsRes.data.data,
                },
              ],
            },
          });
        }

        return res
          .status(200)
          .json({ message: "Successfully added", uodateCourier });
      }
    } catch (e) {
      console.log("Error: ", e);
      return res.status(500).json({ errorMessage: "Internal Server Error" });
    }
  }
});

// Delete Shipper

app.delete("/delete-shipper/:id", async (req, res) => {
  // Only deletes the shipper from database not from LEOPARDS PORATL !!
  const { id } = req.params;
  const shipperID = id;
  const courierID = req.query.accountID;

  const courier = await prisma.courier.findUnique({
    where: { id: Number(courierID) },
  });

  const shippers = courier.shippers.filter(
    (shipper) => shipper.id !== Number(shipperID)
  );
  // Update the courier with the new shippers

  const updatedCourier = await prisma.courier.update({
    where: { id: Number(courierID) },
    data: {
      shippers: shippers,
    },
  });

  if (updatedCourier.shippers.length === 0) {
    // Update it again
    const updatedCourier2 = await prisma.courier.update({
      where: { id: Number(courierID) },
      data: {
        shippers: "null",
      },
    });
  }

  res.status(200).json({ message: "Shipper deleted successfully" });
});

// app.get("/ok", async (req, res) => {
//   const user = await prisma.user.findUnique({
//     where: { email: "subhankhanyz@gmail.com" },
//     include: { Courier: true, Stores: true },
//   });

//   res.status(200).send(user);
// });
async function sendPostRequests(data, config) {
  for (let i = 1; i < 11; i++) {
    try {
      const response = await axios.post(
        "https://quickstart-65d173cf.myshopify.com/admin/api/2024-01/orders.json",
        data,
        config
      );
      // console.log(
      //   `Request ${i + 1} successful. Status code: ${response.status}`
      // );
      console.log(`Order Created: ${i} `, response.data.order.name);
      // console.log("Hello")
      if (i % 4 === 0) {
        // Wait for a minute before sending the next request
        await sleep(60000);
      }
    } catch (error) {
      console.error(`Request ${i + 1} failed:`, error);
    }
  }
  // await new Promise((resolve) => setTimeout(resolve, 60000)); // wait for a minute
}

// Helper function to pause execution for a specified duration
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Get all Orders from all the store user has connected
app.post("/orders", async (req, res) => {
  const { email } = req.body;
  const start = new Date().getTime();
  const orders = [];

  console.log("email:", email);

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { Store: true },
  });
  let userID = user.id;
  let userStores = user.Store;

  for (const store of userStores) {
    if (store.platform === "daraz") {
      // SELECT * FROM "DarazOrders" where user_id = user.id ORDER BY created_at DESC LIMIT 500

      const darazOrders = await prisma.darazOrder.findMany({
        where: { seller_id: store.store_info.user_info.seller_id },
        orderBy: { created_at: "desc" },
        take: 50,
      });
      darazOrders.forEach((order) => {
        orders.push({
          ...order,
          store_info: {
            platform: "daraz",
            domain: null,
            shopLogo: null,
            name: store.name,
          },
        });
      });
    } else if (store.platform === "shopify") {
    }
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  console.log("Time taken: ", timeTaken);

  res.status(200).send(orders);
});

app.get("/test", async (req, res) => {
  // Send post request to shopify with headers X-Shopify-Access-Token and orders data
  // Call the async function
  // await createOrder();
  const user = await prisma.user.findMany({});
  console.log("user: ", user);
  res.status(200).send(user);
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});
app.get("/create-barcode-stockchecklist/:id", async (req, res) => {
  const orderTrackNumber = req.params.id;

  const buffer = await bwipjs.toBuffer({
    bcid: "code128", // Barcode type
    text: String(orderTrackNumber), // Text to encode
    // scale: 5, // 3x scaling factor
    scaleX: 3,
    width: 1, // Bar width, in millimeters
    scaleY: 3,
    height: 4, // Bar height, in millimeters
  });
  res.set("Content-Type", "image/png");
  res.send(buffer);
});

app.get("/create-barcode/:id", async (req, res) => {
  const text = req.params.id;

  const buffer = await bwipjs.toBuffer({
    bcid: "code128", // Barcode type
    text: String(text),
    scale: 3, // 3x scaling factor
    height: 10, // Bar height, in millimeters
    includetext: Object.keys(req.query).length === 0 ? true : false, // Show human-readable text
    textxalign: "center", // Always good to set this
  });
  res.set("Content-Type", "image/png");
  res.send(buffer);
});
// LOGIN AND REGISTER ENDPOINTS
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("req.body", req.body);
  if (!email || !password)
    return res.status(400).json({ errorMessage: "Incorrect field" });
  const existingUser = await prisma.user.findFirst({
    where: { email: email },
  });
  console.log("existingUser: ", existingUser);
  if (!existingUser)
    return res.status(404).json({ errorMessage: "Wrong email or password" });
  const passwordCorrect = await bcrypt.compare(password, existingUser.password);
  if (!passwordCorrect)
    return res.status(401).json({ errorMessage: "Wrong email or password" });

  res.status(200).json({
    user: { email, password: "123" },
    message: "User has been logged in successfully",
  });
});

app.get("/otp/:id", async (req, res) => {
  const otp = generateOTP();
  console.log("otp: ", otp);

  const { data, error } = await resend.emails.send({
    from: "ESync@nakson.services",
    to: [`${req.params.id}`],
    subject: "One-Time Password (OTP) Verification",
    html: `
    <p style="font-weight: bold;">Please use the following OTP to complete the verification process:</p>
    <p style="background-color: #f5f5f5; padding: 10px; font-size: 16px; font-weight: bold;">OTP Code: ${otp}</p>
    `,
  });
  res.status(200).json({ data, otp });
});

//

app.post("/otp", async (req, res) => {
  // Check if the email is valid and already exists in the database
  const { email } = req.body;

  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (user) {
    return res.status(409).json({ message: "Email already exists" });
  }

  const otp = generateOTP();
  console.log("otp: ", otp);

  const { data, error } = await resend.emails.send({
    from: "ESync@nakson.services",
    to: [`${email}`],
    subject: "One-Time Password (OTP) Verification",
    html: `
    <p style="font-weight: bold;">Please use the following OTP to complete the verification process:</p>
    <p style="background-color: #f5f5f5; padding: 10px; font-size: 16px; font-weight: bold;">OTP Code: ${otp}</p>
    `,
  });

  console.log("data: ", data, "error: ", error);

  res.status(200).json(otp);
});

app.get("/da/:id", async (req, res) => {
  const { id } = req.params;
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(id, salt);
  res.send(passwordHash);
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("req.body", req.body);

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  // Unhash the password

  try {
    // Insert a user with a store
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: passwordHash, // Hash the password using a secure method
        phone: "null",
        address: "null",
      },
    });
    console.log("User Inserted:", user);
  } catch (error) {
    console.error("Error inserting sample data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }

  res.status(200).json({ message: "User has been registered successfully" });
});
// Function to make a POST request with a rate limit
async function postRequestWithRateLimit(url, data, config) {
  // A promise that resolves after a certain delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Call the API with exponential backoff
  async function callApiWithRetry(
    url,
    data,
    config,
    retries = 10,
    delayMs = 3000
  ) {
    try {
      const response = await axios.post(url, data, config);
      console.log("response: ", response.data);
      return response.data;
    } catch (error) {
      if (retries === 0) {
        throw error;
      }
      // Exponential backoff to wait before retrying
      await delay(delayMs);
      return callApiWithRetry(url, data, config, retries - 1, delayMs * 3);
    }
  }

  return callApiWithRetry(url, data, config);
}
// Function to make a request with a rate limit
async function makeRequestWithRateLimit(url, config) {
  // A promise that resolves after a certain delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Call the API with exponential backoff
  async function callApiWithRetry(url, config, retries = 10, delayMs = 3000) {
    try {
      // const response = await axios.get(url, config);
      // const response = await axios.get(url, config);
      const response = await axios.get(url, config);

      return response.data;
    } catch (error) {
      if (retries === 0) {
        throw error;
      }
      // Exponential backoff to wait before retrying
      await delay(delayMs);
      return callApiWithRetry(url, config, retries - 1, delayMs * 3);
    }
  }

  return callApiWithRetry(url, config);
}

// _____________________
// orders = [   {id: 1, cnNo: "123", courierService: "Leopards",  }, {id: 2, cnNo: "456", courierService: "Leopards" }   ]

app.get("/api/hello", (req, res) => {
  res.status(200).send({
    message: "Hello from server.js",
  });
});

app.get("/speed", async (req, res) => {
  const start = new Date().getTime();

  const data = await prisma.temporaryData.findMany({});
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;
  res.status(200).send({ timeTaken, data });
});

// BULKSOURCE !!!!
app.get("/bulksource/products", async (req, res) => {
  // Send a request to get all Products
  const url = `https://bulksource.pk/wp-json/wc/v3/products?consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.consumer_secret}&per_page=46&tag=161`;
  const products = await axios.get(url);
  res.send(products.data);
});

app.post("/bulksource/create-order", async (req, res) => {
  const {
    data: { userInfo, products, shippingInfo },
  } = req.body;

  const line_items = products.map((product) => {
    if (product.id === 1866) {
      return {
        product_id: product.id,
        quantity: product.quantity,
        subtotal: product.correctPrice,
        total: product.correctPrice,
        meta_data: [
          {
            key: product.name,
            value: product.quantity,
          },
        ],
      };
    }
    return {
      product_id: `${product.id}`,
      quantity: `${product.quantity}`,
      subtotal: `${product.correctPrice * product.quantity}`,
      total: `${product.correctPrice * product.quantity}`,
    };
  });

  // Create a new order
  let order = {
    billing: {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      address_1: userInfo.address,
      city: userInfo.city,
      // state: "CA",
      // postcode: "12345",
      country: "PK",
      // email: "john.doe@example.com",
      phone: userInfo.number,
    },
    shipping: {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      address_1: userInfo.address,
      city: userInfo.city,
      // state: "CA",
      // postcode: "54321",
      country: "PK",
    },
    line_items: [...line_items],
    shipping_lines: [
      {
        method_id: shippingInfo.courier,
        method_title: shippingInfo.courier,
        total: shippingInfo.charges,
      },
    ],
    fee_lines: [
      {
        name: shippingInfo.name,
        total: shippingInfo.price,
      },
    ],
  };

  const url = `https://bulksource.pk/wp-json/wc/v3/orders?consumer_key=${process.env.consumer_key}&consumer_secret=${process.env.consumer_secret}`;
  const resp = await axios.post(url, order);
  const orderData = resp.data;
  if (!orderData.id) {
    return res.status(400).json({ message: "Order not created" });
  }

  res.status(200).json({ success: true, orderData });
});

app.post("/get-stores", async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { Store: true },
  });
  res.status(200).json({ stores: user.Store });
});

// _____________________
app.get("/orders", async (req, res) => {
  // /orders?email=email&platform=platform&shop=shop&filter=filter&offset=offset&limit=limit
  // Limit is the orders per page

  const { email, platform, shop, status, page, ordersPerPage } = req.query;

  const limit = ordersPerPage;
  const offset = (page - 1) * ordersPerPage;

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { Store: true },
  });
  const user_id = Number(user.id);

  if (platform === "daraz") {
    // Get orders from Daraz
    let orders = await prisma.darazOrder.findMany({
      skip: Number(offset),
      take: Number(limit),
      where: {
        user_id: user_id,
        seller_id: {
          contains: shop === "all" ? "" : shop, // If shop is all, then return all orders of all seller_ids, else return orders of the specific seller_id
        },
        statuses: {
          contains: status === "all" ? "" : status, // If status is all, then return all orders, else return orders with the specific status
        },
      },
      orderBy: { created_at: "desc" },
    });

    const count = await prisma.darazOrder.count({
      where: {
        user_id: user_id,
        seller_id: {
          contains: shop === "all" ? "" : shop,
        },
        statuses: {
          contains: status === "all" ? "" : status,
        },
      },
    });

    for (const order of orders) {
      order["store_info"] = {
        platform: "daraz",
        domain: null,
        shopLogo: null,
        name: order.seller_id,
      };
    }
    console.log("orders: ", orders);
    return res.status(200).json({ count, orders });
  }
});

app.get("/delete/:seller_id", async (req, res) => {
  const { seller_id } = req.params;
  const orders = await prisma.darazOrder.deleteMany({
    where: {
      seller_id: seller_id,
    },
  });
  const dd = await prisma.darazStoreTransaction.deleteMany({});
  res.status(200).send(orders);
});

app.get("/order", async (req, res) => {
  const { email, platform, orderId } = req.query;

  let order = "";
  if (platform === "daraz") {
    const order = await prisma.darazOrder.findUnique({
      where: { order_id: orderId },
    });
    return res.status(200).send(order);
  }

  res.status(200).send(order);
});

// Customers

app.get("/customers", async (req, res) => {
  const { email, page, customersPerPage } = req.query;

  const limit = customersPerPage;
  const offset = (page - 1) * customersPerPage;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  // Get all customers
  let customers = await prisma.customer.findMany({
    skip: Number(offset),
    take: Number(limit),
    where: {
      user_id: user.id,
    },
  });

  const customers_ids = customers.map((customer) => customer.id);

  const customerDaraz = await prisma.darazOrder.findMany({
    where: {
      customer_id: {
        in: customers_ids,
      },
    },
  });

  customers = customers.map((customer) => {
    const darazCustomer = customerDaraz.find(
      (darazCustomer) => darazCustomer.customer_id === customer.id
    );
    return {
      ...customer,
      darazCustomer: darazCustomer ? darazCustomer : null,
    };
  });

  const count = await prisma.customer.count({
    where: {
      user_id: user.id,
    },
  });

  res.status(200).json({ customers, count });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
