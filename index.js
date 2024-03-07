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
        // Update the Store
        const updatedStore = await prisma.store.update({
          where: { id: Number(shopID) },
          data: {
            store_info: {
              ...store.store_info,
              courier_id: { id: Number(courierAccount) },
            },
          },
        });

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

let lastRequestTime = 0;
const debounceInterval = 60000; // 1 minute in milliseconds

async function sendPostRequest(data, config) {
  const currentTime = Date.now();

  // Check if the time since the last request is less than the debounce interval
  if (currentTime - lastRequestTime < debounceInterval) {
    console.log("Exceeded rate limit. Retrying in 3 seconds...");
    await sleep(6000); // Wait for 15 seconds before retrying
  }

  try {
    // Make the API request
    const response = await axios.post(
      "https://quickstart-65d173cf.myshopify.com/admin/api/2024-01/orders.json",
      data,
      config
    );

    // Update the last request time
    lastRequestTime = currentTime;

    // Handle response
    console.log("Response:", response.data.order.name);
  } catch (error) {
    console.error("Error:", error.message);

    // Retry after 3 seconds if the error is due to rate limiting
    if (error.response && error.response.status === 429) {
      console.log("Retrying in 10 seconds...");
      await sleep(6000); // Wait for 6 seconds
      await sendPostRequest(data, config); // Retry the request
    }
  }
}

// Helper function to pause execution for a specified duration
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get all Orders from all the store user has connected
app.post("/orders", async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { stores: true, Courier: true },
  });
  const userStores = user.stores;
  const userCouriers = user.Courier;

  const shippers = [];
  for (const courier of userCouriers) {
    if (courier.shippers !== "null") {
      shippers.push(...courier.shippers);
    }
  }

  console.log("shippers: ", shippers);
  console.log("userCouriers: ", userCouriers);
  const orders = [];

  for (const store of userStores) {
    if (store.store_info.platform === "shopify") {
      const response = await axios.get(
        `https://${store.store_info.shop}/admin/api/2023-10/orders.json?status=open&financial_status=unpaid&limit=250&fulfillment_status=unfulfilled`,
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
            courierID: store.store_info.courier_id.id || null,
          },
        });
      });
    }
    // } else if (store.store_info.platform === "daraz") {
    //   console.log("store: ", store);
    //   const darazURL = await generateDarazURL(
    //     "/orders/get",
    //     // "/orders/items/get",
    //     "get",
    //     process.env.DARAZ_APP_KEY,
    //     store.store_info.access_token,
    //     {
    //       limt: "30",
    //       update_after: "2018-02-10T16:00:00+08:00",
    //       status: "pending",
    //       // order_ids: "[180683837008934, 140003114135239]",
    //     }
    //   );

    //   const response = await axios.get(darazURL);
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
  res
    .status(200)
    .send(orders.filter((order) => order.tags.includes("Call Confirmed")));
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

    sendPostRequest(data, config);
  } catch (error) {
    console.error(error);
  }
}
app.get("/test", async (req, res) => {
  // Send post request to shopify with headers X-Shopify-Access-Token and orders data
  for (let i = 0; i < 10; i++) {
    await createOrder();
  }
  return 1;
  const { accessToken, shop, email } = req.body;
  try {
    const store = await prisma.store.create({
      data: {
        user_id: 5, // Specify the userId for the associated user
        name: "Momdaughts",
        image_url:
          "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
        image_public_id: "none",
        store_info: { platform: "shopify", accessToken, shop },
      },
    });

    // const user = await prisma.user.findMany({});

    // Get user with stores
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: { stores: true },
    });
    console.log("user: ", user);
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
  return 1;

  const FONT_URL =
    // "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2";
    "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";

  const fontBytes = fs.readFileSync(
    // path.join(__dirname, "../backened/fonts/Impact.ttf")
    "./public/fonts/Impact.ttf"
  );

  readFontFileFromUrl(FONT_URL)
    .then((fontData) => {
      console.log("TimesRoman", StandardFonts.TimesRoman);
      console.log("Impact", fontBytes);
      console.log("Open Sans: ", fontData);

      console.log("Font file read successfully.");
      // Use the font data as needed
    })
    .catch((error) => {
      console.error("Error reading font file:", error);
    });
  // Add Depsea Life Sciences

  return res.status(200).send("hello");

  res.status(200).json({ message: "User has been inserted" });
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
  const orderTrackNumber = req.params.id;
  const buffer = await bwipjs.toBuffer({
    bcid: "code128", // Barcode type
    text: String(orderTrackNumber), // Text to encode
    scale: 3, // 3x scaling factor
    height: 10, // Bar height, in millimeters
    includetext: true, // Show human-readable text
    textxalign: "center", // Always good to set this
  });
  res.set("Content-Type", "image/png");
  res.send(buffer);
});

app.get("/checklist", async (req, res) => {
  const response = await axios.get(
    "https://nakson.myshopify.com/admin/api/2023-10/orders.json?status=any&limit=50",
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const orders = response.data.orders;

  // Get the total products of an order
  const stock = []; // Number of products in an order
  const skus = [{}];

  orders.forEach((order, index) => {
    stock.push(order.line_items.length);

    for (const product of order.line_items) {
      skus.forEach((sku) => {
        if (sku[product.sku]) {
          sku[product.sku] += product.quantity;
        } else {
          sku[product.sku] = product.quantity;
        }
      });
    }
  });

  // Return the sum of Stock
  const sumStock = stock.reduce((a, b) => a + b, 0);

  res.status(200).json({ total_items: sumStock, skus });
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
const markOrdersFulfilled = async (orders) => {
  let Counter = 1;
  // for (const ord of orders) {
  orders.forEach(async (ord) => {
    const config = {
      headers: {
        "X-Shopify-Access-Token": "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",
        "Content-Type": "application/json",
      },
    };
    try {
      // Get the fulfillment order ID
      const response = await makeRequestWithRateLimit(
        `https://momdaughts.myshopify.com/admin/api/2023-10/orders/${ord.id}/fulfillment_orders.json`,
        config
      );
      const { fulfillment_orders } = response;
      const f_id = fulfillment_orders[0].id;

      // Create a fulfillment
      try {
        const data = {
          fulfillment: {
            line_items_by_fulfillment_order: [
              {
                fulfillment_order_id: f_id,
              },
            ],
            tracking_info: {
              number: "End Ho gaya",
              url: "Ok kr yar",
            },
          },
        };

        const config_two = {
          headers: {
            "X-Shopify-Access-Token": "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",
            "Content-Type": "application/json",
          },
        };

        const finalRes = await postRequestWithRateLimit(
          "https://momdaughts.myshopify.com/admin/api/2023-04/fulfillments.json",
          data,
          config_two
        );

        console.log("Counter: ", Counter);
        Counter += 1;
        console.log("Status: ", finalRes.fulfillment.status);
      } catch (error) {
        console.error(error);
      }

      // return a promise that resolves after 3 seconds
    } catch (error) {
      console.log("Caught Error: ", error);
    }
  });

  return 1;
};

app.get("/api/hello", (req, res) => {
  res.status(200).send({
    message: "Hello from server.js",
  });
});

async function fetchPdfBytes(url) {
  const response = await fetch(url);
  const pdfBytes = await response.arrayBuffer();
  return pdfBytes;
}
async function generateCusotmizedSlip(slipData) {
  // Current Performance:
  // 56 orders in 30 seconds
  // 14 orders in 10 seconds
  // 112 orders in 1 minute

  console.log("HERE ", slipData.length, "Orders");
  let mergedPdfDoc = "";
  let mergedPdfBytes = "";
  mergedPdfDoc = await PDFDocument.create();

  // Fonts

  mergedPdfDoc.registerFontkit(fontkit);

  //load font and embed it to pdf documentx

  const OpenSans =
    "https://cdn.jsdelivr.net/fontsource/fonts/open-sans@latest/latin-400-normal.ttf";
  const OpenSansBold =
    "https://cdn.jsdelivr.net/fontsource/fonts/open-sans@latest/latin-600-normal.ttf";

  const BebasNeue =
    "https://cdn.jsdelivr.net/fontsource/fonts/bebas-neue@latest/latin-400-normal.ttf";

  const fontBytes = await fetchPdfBytes(OpenSans);
  const fontBytes1 = await fetchPdfBytes(OpenSansBold);
  const fontBytes2 = await fetchPdfBytes(BebasNeue);

  const OpenSansFont = await mergedPdfDoc.embedFont(fontBytes);
  const OpenSansBoldFont = await mergedPdfDoc.embedFont(fontBytes1);
  const BebasNeueFont = await mergedPdfDoc.embedFont(fontBytes2);

  // const fontBytes = await readFontFileFromUrl(Inter);

  // const openSans = await mergedPdfDoc.embedFont(fontBytes);

  // const fontBytes2 = fs.readFileSync("./fonts/open-sans-bold.ttf");
  // const OpenSansBold = await mergedPdfDoc.embedFont(fontBytes2);

  // const fontBytes3 = fs.readFileSync(
  //   "./fonts/OpenSans-Regular.ttf"
  // );
  // const Open_Sans = await mergedPdfDoc.embedFont(fontBytes3);

  const fontInUse = OpenSansFont;
  const fontinBoldUse = OpenSansBoldFont;
  const Impact = BebasNeueFont;
  // Calculate the height of each page
  // const height1 = mergedPdfDoc.getPage(0).getHeight();
  // const width1 = mergedPdfDoc.getPage(0).getWidth();
  // console.log("page height: ", height1);

  let courierLogo = await fetchPdfBytes("https://i.imgur.com/GXyWx1J.png");

  for (let order of slipData) {
    const addressWidth = Math.ceil(
      fontinBoldUse.widthOfTextAtSize(order.consignee_info.address, 9)
    );
    const addressMaxWidth = 170;
    const addressLineHeight = 10;
    const adressNumberOfLines = Math.ceil(addressWidth / addressMaxWidth);
    const addressHeight = adressNumberOfLines * addressLineHeight;
    // console.log("address width: ", addressWidth);
    // console.log("address height: ", addressHeight);
    const page = mergedPdfDoc.addPage([595, 305 + addressHeight - 35]);

    const { width, height } = page.getSize();

    // console.log("page width: ", width);
    // console.log("page height: ", height);

    // Fetch QR Code
    let qrCodeBytes = "";
    try {
      try {
        qrCodeBytes = await fetchPdfBytes(
          `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${order.track_number},${order.destination.id},${order.amount}`
        );
      } catch (e) {
        console.log("Error Fetching Bytes for QRCode: ", e);
      }

      const courierImage = await mergedPdfDoc.embedPng(courierLogo);

      page.drawImage(courierImage, {
        x: 470,
        y: 210 + addressHeight,
        width: 100,
        height: 30,
      });
      const qrCodeImage = await mergedPdfDoc.embedPng(qrCodeBytes);
      // add qr code
      page.drawImage(qrCodeImage, {
        x: 253,
        y: 80 + addressHeight,
        width: 90,
        height: 90,
      });
      const barcodeBuffer = await bwipjs.toBuffer({
        bcid: "code128", // Barcode type
        text: order.track_number,
        scale: 5, // 3x scaling factor
        height: 6, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
      });

      const barcodeImg = await mergedPdfDoc.embedPng(barcodeBuffer);

      // add barcode
      page.drawImage(barcodeImg, {
        x: (width - 270) / 2,
        y: 176 + addressHeight,
        width: 270,
        height: 40,
      });

      // Logo Image
      const logoBytes = await fetchPdfBytes(order.shop_logo);

      const logoImage = await mergedPdfDoc.embedPng(logoBytes);
      page.drawImage(logoImage, {
        x: 14,
        y: 210 + addressHeight,
        width: 100,
        height: 50,
      });

      // use the images folder to store the images
      // courierImage = fs.readFileSync("../backened/images/leopards-logo.png");

      // page.drawImage(courierImage, {
      //   x: 470,
      //   y: 210 + addressHeight,
      //   width: 100,
      //   height: 30,
      // });
    } catch (err) {
      console.log("Error spotted: ", err);
    }

    // Order Service Type
    page.drawText(order.service_type, {
      font: fontinBoldUse,
      size: 28,
      x:
        (width -
          Math.ceil(fontinBoldUse.widthOfTextAtSize(order.service_type, 28))) /
        2,
      y: 241 + addressHeight,
    });
    // COD OR NON COD
    page.drawText(order.collectType, {
      font: fontInUse,
      size: 10,
      x:
        (width -
          Math.ceil(fontinBoldUse.widthOfTextAtSize(order.collectType, 10))) /
        2,
      y: 226 + addressHeight,
    });

    // page.drawRectangle({
    //   x: (width - 282) / 2,
    //   y: 173 + addressHeight,
    //   width: 282,
    //   height: 45,
    //   borderWidth: 1.5,
    //   opacity: 0,
    //   borderOpacity: 1,
    // });

    page.drawRectangle({
      x: 14,
      y: 7,
      width: 566,
      height: 166 + addressHeight,
      borderWidth: 2.5,
      opacity: 0,
      borderOpacity: 1,
    });

    page.drawSquare({
      x: (width - 100) / 2,
      y: 108 + addressHeight - 35,
      borderWidth: 1.5,
      size: 100,
      opacity: 0,
    });

    page.drawLine({
      start: { x: (width - 1.5) / 2, y: 108 + addressHeight - 35 },
      end: { x: (width - 1.5) / 2, y: 35 },
      thickness: 1,
    });

    page.drawLine({
      start: { x: 14, y: 35 },
      end: { x: 14 + 565, y: 35 },
      thickness: 1.5,
    });

    page.drawLine({
      start: { x: 399, y: 35 },
      end: { x: 399, y: 7 },
      thickness: 1,
    });

    // Shipper Information Line (below Contact#)
    page.drawLine({
      start: { x: 354, y: 75 + addressHeight },
      end: { x: 574, y: 75 + addressHeight },
      thickness: 1,
    });

    // Consignee Information
    page.drawText("Consignee Information", {
      font: fontinBoldUse,
      size: 16,
      x: 20,
      y: 191 + addressHeight - 35,
    });

    page.drawText("Name:", {
      font: fontinBoldUse,
      size: 10,
      x: 20,
      y: 170 + addressHeight - 35,
    });
    page.drawText(order.consignee_info.name, {
      font: fontInUse,
      x: 75,
      size: 9,
      y: 170 + addressHeight - 35,
    });

    page.drawText("Address:", {
      font: fontinBoldUse,
      size: 10,
      x: 20,
      y: 155 + addressHeight - 35,
    });
    page.drawText(order.consignee_info.address, {
      font: fontInUse,
      x: 75,
      size: 9,
      lineHeight: addressLineHeight,
      maxWidth: addressMaxWidth,
      y: 155 + addressHeight - 35,
    });

    page.drawText("Contact:", {
      font: fontinBoldUse,
      size: 10,
      x: 20,
      y: 118,
    });

    page.drawText(order.consignee_info.phone, {
      font: fontInUse,
      x: 75,
      size: 9,
      y: 118,
    });

    // Line
    page.drawLine({
      start: { x: 20, y: 113 },
      end: { x: 238, y: 113 },
      thickness: 1,
    });

    // Remarks
    page.drawText("Remarks: ", {
      font: fontinBoldUse,
      size: 10,
      x: 20,
      y: 100,
    });
    page.drawText(order.shipping_instructions, {
      font: fontInUse,
      x: 75,
      size: 9,
      maxWidth: addressMaxWidth, //170
      y: 100,
    });

    // Shipper Information
    page.drawText("Shipper Information", {
      font: fontinBoldUse,
      size: 16,
      x: 354,
      y: 191 + addressHeight - 35,
    });

    page.drawText("Name:", {
      font: fontInUse,
      size: 10,
      x: 354,
      y: 170 + addressHeight - 35,
    });
    page.drawText(order.shipper_info.name, {
      font: fontInUse,
      x: 409,
      size: 9,
      y: 170 + addressHeight - 35,
    });

    page.drawText("Address:", {
      font: fontInUse,
      size: 10,
      x: 354,
      maxWidth: addressMaxWidth,
      y: 155 + addressHeight - 35,
    });
    page.drawText(order.shipper_info.address.slice(0, 200), {
      font: fontInUse,
      x: 409,
      size: 9,
      lineHeight: addressLineHeight,
      maxWidth: addressMaxWidth,
      y: 155 + addressHeight - 35,
    });

    page.drawText("Contact:", {
      font: fontInUse,
      size: 10,
      x: 354,
      y: 115 + addressHeight - 35,
    });
    page.drawText(order.shipper_info.phone, {
      font: fontInUse,
      x: 409,
      size: 9,
      y: 115 + addressHeight - 35,
    });

    // Destination
    page.drawText("Destination:", {
      font: fontinBoldUse,
      size: 18,
      x: 20,
      y: 14,
    });

    page.drawText(order.destination.name, {
      font: fontinBoldUse,
      size: 16,
      x: 146,
      y: 14,
    });

    // RS
    let amountWidth = Math.ceil(
      fontinBoldUse.widthOfTextAtSize("RS" + String(order.amount), 28)
    );

    page.drawText("RS " + String(order.amount), {
      font: Impact,
      size: 28,
      x: 396 + (181 - amountWidth),
      y: 9,
    });

    // Tracking #, Date, Pieces and Weight
    page.drawText("Tracking #:", {
      size: 10,
      x: 301,
      y: 97 + addressHeight - 35,
    });
    page.drawText(order.track_number, {
      size: 10,
      x: 354,
      y: 97 + addressHeight - 35,
    });

    page.drawText("Date:", {
      size: 10,
      x: 301,
      y: 85 + addressHeight - 35,
    });
    page.drawText(order.date, {
      size: 10,
      x: 354,
      y: 85 + addressHeight - 35,
    });

    page.drawText("Pieces:", {
      size: 10,
      x: 301,
      y: 73 + addressHeight - 35,
    });
    page.drawText(String(order.pieces), {
      size: 10,
      x: 354,
      y: 73 + addressHeight - 35,
    });

    page.drawText("Weight:", {
      size: 10,
      x: 301,
      y: 61 + addressHeight - 35,
    });
    page.drawText(String(order.weight), {
      size: 10,
      x: 354,
      y: 61 + addressHeight - 35,
    });

    // Order Name
    let orderNameWidth = Math.ceil(
      fontinBoldUse.widthOfTextAtSize(order.booked_packet_order_name, 18)
    );
    page.drawText(order.booked_packet_order_name, {
      size: 18,
      x: 15 + 566 - orderNameWidth,
      y: 40,
    });
  }

  mergedPdfBytes = await mergedPdfDoc.save();
  return mergedPdfBytes;
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
