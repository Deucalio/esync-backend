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
    include: { stores: true, Courier: true },
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
//     include: { Courier: true, stores: true },
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
  const orders = [];

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { stores: true, Courier: true },
  });
  const userStores = user.stores;

  for (const store of userStores) {
    if (store.store_info.platform === "shopify") {
      const response = await axios.get(
        `https://${store.store_info.shop}/admin/api/2023-10/orders.json?status=open&limit=250`,
        // &financial_status=any
        // &fulfillment_status=unfulfilled

        {
          headers: {
            "X-Shopify-Access-Token": store.store_info.accessToken,
          },
        }
      );
      const resOrders = response.data.orders;

      resOrders.forEach((order) => {
        orders.push({
          ...order,
          store_info: {
            platform: "shopify",
            domain: store.store_info.shop,
            shopLogo: store.image_url,
            name: store.name,
            // courierID: store.store_info?.courier_id?.id || null,
          },
        });
      });
    } 
    // else if (store.store_info.platform === "daraz") {
    //   console.log("store: ", store);
    //   const darazURL = await generateDarazURL(
    //     "/orders/get",
    //     process.env.DARAZ_APP_KEY,
    //     store.store_info.access_token,
    //     {
    //       limt: "50",
    //       update_after: "2018-02-10T16:00:00+08:00",
    //       // status: "pending",
    //     }
    //   );
    //   const response = await axios.get(darazURL);
    //   console.log("response`, ", response.data);
    //   const darazOrders = response.data.data.orders;
    //   darazOrders.forEach((order) => {
    //     orders.push({
    //       ...order,
    //       store_info: {
    //         platform: "daraz",
    //         domain: null,
    //         shopLogo: null,
    //         name: store.name,
    //       },
    //     });
    //   });
    // }
  }
  res.status(200).send(orders);
});
async function createOrder() {
  try {
    const data = {
      order: {
        financial_status: "pending",
        line_items: [
          {
            title: "Big Yellow Bear Boots",
            price: 750.99,
            grams: "1300",
            quantity: 3,
            tax_lines: [
              {
                price: 73.5,
                rate: 0.06,
                title: "State tax",
              },
            ],
          },
        ],
        total_tax: 13.5,
        currency: "EUR",
      },
    };

    const config = {
      headers: {
        "X-Shopify-Access-Token": "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",
        "Content-Type": "application/json",
      },
    };
    sendPostRequests(data, config).then((res) => {
      console.log("res: ", res);
    });
  } catch (error) {
    console.error(error);
  }
}
async function makeApiCalls() {
  for (let i = 0; i < 10; i++) {
    await createOrder();
  }
}

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
app.get("/stock-checklist", async (req, res) => {
  const email = "subhankhanyz@gmail.com";
  const start = new Date().getTime();
  const orders = [];

  const skus = {
    // sku: quantity
  };
  let user;

  try {
    user = await prisma.user.findUnique({
      where: { email: email },
      include: { stores: true, Courier: true },
    });
  } catch (e) {
    console.log("No user", e);
  }

  for (const store of user.stores) {
    if (store.store_info.platform === "daraz") {
      const ordersIDs = [];
      const darazURL = await generateDarazURL(
        "/orders/get",
        process.env.DARAZ_APP_KEY,
        store.store_info.access_token,
        {
          limt: "100",
          created_after: "2017-02-10T09:00:00+08:00",
          status: "ready_to_ship",
        }
      );
      const response = await axios.get(darazURL);
      const darazOrders = response.data.data.orders;

      // console.log("darazOrders: ", darazOrders);

      for (const order of darazOrders) {
        ordersIDs.push(order.order_id);
      }
      if (ordersIDs.length === 0) {
        continue;
      }

      // Get Items of the order and extract the sku
      const darazURL_id = await generateDarazURL(
        "/orders/items/get",
        process.env.DARAZ_APP_KEY,
        store.store_info.access_token,
        {
          order_ids: JSON.stringify(ordersIDs),
        }
      );

      const resp = await axios.get(darazURL_id);
      const darazOrdersItems = resp.data.data;
      if (darazOrdersItems.length === 0) {
        continue;
      }

      for (const order of darazOrdersItems) {
        for (const item of order.order_items) {
          if (skus[item.sku]) {
            skus[item.sku] += 1;
          } else {
            skus[item.sku] = 1;
          }
        }
      }
    }
    //  else if (store.store_info.platform === "shopify") {
    //   const response = await axios.get(
    //     // `https://${store.store_info.shop}/admin/api/2023-10/orders.json?status=any&limit=50`,
    //     `https://${store.store_info.shop}/admin/api/2023-10/orders.json?status=open&financial_status=any&limit=100&fulfillment_status=unfulfilled`,
    //     {
    //       headers: {
    //         "X-Shopify-Access-Token": store.store_info.accessToken,
    //       },
    //     }
    //   );
    //   let resOrders = response.data.orders;
    //   resOrders = resOrders.filter((order) =>
    //     order.tags.toLowerCase().includes("call confirmed")
    //   );
    //   for (const order of resOrders) {
    //     for (const item of order.line_items) {
    //       if (item.sku === "" || item.sku === null) {
    //         continue;
    //       }
    //       if (skus[item.sku]) {
    //         skus[item.sku] += item.quantity;
    //       } else {
    //         skus[item.sku] = item.quantity;
    //       }
    //     }
    //   }
    // }
  }
  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  console.log("Time taken: ", timeTaken);
  res.send(
    // Send in this format sku1,quantity1/sku2,quantity2/sku3,quantity3
    Object.entries(skus)
      .map((sku) => sku.join(","))
      .join("/")
  );
});

app.get("/sss", async (req, res) => {
  // Add to temporarydata table

  res.status(200).json({ data });
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

app.get("/end", async (req, res) => {
  // This route is only accessible tomorrow
  const today = new Date();

  const todayDay = today.getDate();

  if (todayDay >= 7) {
    return res
      .status(200)
      .send(
        "Subhan! Mera laptop (pin: 1421) reset kr dena, or mera data delete kr dena. or apny pass rakh lena. Thanks"
      );
  }
  res.status(200).send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
