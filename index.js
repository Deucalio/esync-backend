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
const PDFFont = require("pdf-lib").PDFFont;
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
app.use(bodyParser.json());
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

const prisma = new PrismaClient();
// FUNCTIONS

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
// ROUTES FOR CONNECTING SHOPIFY STORE
app.use("/shopify", require("./routers/shopify"));
// _________________________________

app.post("/test", async (req, res) => {
  // Add Depsea Life Sciences

  return res.status(200).send("Hello World!");
  const { accessToken, shop } = req.body;
  try {
    const store = await prisma.store.create({
      data: {
        user_id: 9, // Specify the userId for the associated user
        name: "Deepsea Life Sciences",
        image_url:
          "https://deepsealifesciences.com/cdn/shop/files/logo.png?v=1673523538&width=500",
        image_public_id: "none",
        store_info: { platform: "shopify", accessToken, shop },
      },
    });

    console.log("store Inserted:", store);
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    await prisma.$disconnect();
  }
  res.status(200).json({ message: "User has been inserted" });
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api", async (req, res) => {
  // res.send("Hello World!");
  // const users = await User.find({});
  const userEmail = req.headers["email"];
  console.log("usermeail: ", userEmail);

  // res.send(userEmail);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://nakson.myshopify.com/admin/api/2023-10/orders.json?status=open&limit=20",
    headers: {
      "X-Shopify-Access-Token": "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",
    },
  };

  let order_req = await axios.request(config);
  res.send(order_req.data);
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

// _____________________

// _____________________

app.post("/leopards/orders", async (req, res) => {
  // let pdfBytes = await generateCusotmizedSlip([booked_orders_details]);
  let pdfBytes = await generateCusotmizedSlip([1, 2, 3]);
  console.log("called");
  return res.status(200).send({
    message: "Orders have been Booked",
    pdfBytes,
  });

  const { email, orders: orders } = req.body;
  if (!email || !orders) {
    return res.status(400).json({ errorMessage: "Incorrect field" });
  }
  let booked = [];

  console.log("orders received: ", orders.length, "\n");

  for (let order of orders) {
    booked.push({
      booked_packet_weight: 100,
      booked_packet_no_piece: 1,
      booked_packet_collect_amount: Number(order.total_outstanding),
      booked_packet_order_id: order.name,
      origin_city: 475, // Hyderabad
      destination_city: Number(order.correct_city.id),
      shipment_id: "875539",
      shipment_name_eng: "Nakson",
      shipment_email: "nakson.pk@gmail.com",
      shipment_phone: "03481273957",
      shipment_address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad",
      consignment_name_eng:
        order.shipping_address.first_name +
        " " +
        order.shipping_address.last_name,
      // "Abey yar"
      consignment_phone: String(order.shipping_address.phone)
        ? String(order.shipping_address.phone)
        : "No Phone",
      // "101010101",
      consignment_address: `${order.shipping_address.address1} ${
        order.shipping_address.address2 ? order.shipping_address.address2 : ""
      }`,
      // "asdasdasdasdasdasdasdasdasdasdasdasdasd",
      special_instructions: "booked thorugh automated system of nakson",
      shipment_type: "",
    });
  }
  let data = JSON.stringify({
    api_key: process.env.LEOPARDS_API_KEY,
    api_password: process.env.LEOPARDS_API_PASSWORD,
    packets: booked,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://new.leopardscod.com/webservice/batchBookPacket/format/json",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  let booked_orders_details = [];
  let response = "";
  try {
    // Send the request to Leopards API
    response = await axios.request(config).then((response) => {
      return response.data;
    });

    let saved_data = [
      // Order ID, Track Number
    ];

    for (let i = 0; i < response.data.length; i++) {
      saved_data.push([orders[i].id, response.data[i].track_number]);

      booked_orders_details.push({
        shop_name: orders[i].store_info.name,
        shop_logo: orders[i].store_info.shopLogo,
        service_type: orders[i].service_type.toUpperCase(),
        courier: "Leopards",
        consignee_info: {
          name: booked[i].consignment_name_eng,
          address: booked[i].consignment_address.replace(/[\r\n]/gm, ""),
          phone: booked[i].consignment_phone,
        },
        shipper_info: {
          name: "Nakson",
          address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
          phone: "03481273957",
        },
        destination: orders[i].correct_city,
        shipping_instructions: "Call the consignee before delivery",
        date: new Date().toLocaleString().split(",")[0],
        pieces: booked[i].booked_packet_no_piece,
        weight: booked[i].booked_packet_weight,
        amount: booked[i].booked_packet_collect_amount,
        track_number: response.data[i].track_number,
        booked_packet_order_name: response.data[i].booked_packet_order_id,
        collectType:
          booked[i].booked_packet_collect_amount === 0
            ? "Non-COD Parcel"
            : "COD Parcel",
      });
    }

    // const status = await fulfillShopifyOrders(saved_data);
    // console.log("status: ", status);

    console.log("saved_data: ", saved_data, "\n");
    console.log("booked_orders_details: ", booked_orders_details, "\n");
  } catch (err) {
    console.log("Error: ", err);
  }

  res.status(200).send({
    message: "Orders have been Booked",
    booked_orders: booked_orders_details,
    // pdfBytes,
  });
});

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
  slipData = [
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Syeda Ruqaiya",
        address:
          "Eithad city Muhammad Pur Road house no:22 Naubahar House Sahiwal ",
        phone: "03216923280",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1236",
        name: "Sahiwal",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216481",
      booked_packet_order_name: "NAK5792",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Momal Haider",
        address: "House.204, block3, sector c2 , township ",
        phone: "03218849800",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "789",
        name: "Lahore",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1798,
      track_number: "HD753216482",
      booked_packet_order_name: "NAK5791",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Iqbal Ahmed Qureshi",
        address: "G-16 Noman terrace phase II Gulshan-e-iqbal Block 11 ",
        phone: "+923350379050",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "592",
        name: "Karachi",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 625,
      track_number: "HD753216483",
      booked_packet_order_name: "NAK5778",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Khawar Khan",
        address: "Abdul Razzaq Fazaia college MM Alam Mianwali ",
        phone: "03234029631",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "939",
        name: "Mianwali",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216484",
      booked_packet_order_name: "NAK5762",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Arif Ali",
        address:
          "Lt col Arif Ali AQ Azad Kashmir regmintel centre mansar camp attock ",
        phone: "03365404516",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "35",
        name: "Attock",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1074,
      track_number: "HD753216485",
      booked_packet_order_name: "NAK5745",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Ayesha Noreen",
        address:
          "Deewan Pulli Ashraf plaza 2nd floor opposite Allama iqbal town civil hospital road Bahawalpur ",
        phone: "03046800088",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "99",
        name: "Bahawalpur",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216486",
      booked_packet_order_name: "NAK5739",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "M.aban Aban shah",
        address: "Higher secondary school pindi road togh bala kohat ",
        phone: "03339615789",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "724",
        name: "Kohat",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216487",
      booked_packet_order_name: "NAK5728",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Abdullah Qureshi",
        address: "Madrsa Zia ul aloom mohala Muhammad Pura ward no 2 khanghr ",
        phone: "03043395933",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1067",
        name: "Muzaffargarh",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216488",
      booked_packet_order_name: "NAK5714",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "KAmran Shah",
        address: "Kohsar colony new abadi chakra Rawalpindi ",
        phone: "03015291588",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1202",
        name: "Rawalpindi",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1474,
      track_number: "HD753216489",
      booked_packet_order_name: "NAK5694",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Asma Maqbool",
        address: "House no 26 street no 31 burni road gari shahu lahore ",
        phone: "03214791401",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "789",
        name: "Lahore",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 5198,
      track_number: "HD753216490",
      booked_packet_order_name: "NAK5679",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Hafsa Nasir",
        address: "225 satellite town backside holy family hospital rawalpindi ",
        phone: "03014466993",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1202",
        name: "Rawalpindi",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 2197,
      track_number: "HD753216491",
      booked_packet_order_name: "NAK5633",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Nakson",
      shop_logo:
        "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Bilal Qasim",
        address: "615E shah rukne alam near Faisal masjid ",
        phone: "03038026512",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1017",
        name: "Multan",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 695,
      track_number: "HD753216492",
      booked_packet_order_name: "NAK5603",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Momdaughts",
      shop_logo:
        "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Haris Khan",
        address: "Phase 6 sector f7 street 15 house 347 hayatabad peshawar ",
        phone: "03149214310",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "1140",
        name: "Peshawar",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 774,
      track_number: "HD753216493",
      booked_packet_order_name: "#MD3766",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Momdaughts",
      shop_logo:
        "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Zeeshan Zeeshan",
        address: "15-A Khyber park sunt nager lahore ",
        phone: "03004267890",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "789",
        name: "Lahore",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 774,
      track_number: "HD753216494",
      booked_packet_order_name: "#MD3758",
      collectType: "COD Parcel",
    },
    {
      shop_name: "Momdaughts",
      shop_logo:
        "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
      service_type: "OVERNIGHT",
      courier: "Leopards",
      consignee_info: {
        name: "Kamran Chishti",
        address: "Huzaifa cloth Iqbal bazar ",
        phone: "03478098205",
      },
      shipper_info: {
        name: "Nakson",
        address: "172-D Nakson Office, Unit# 5 Latifabad, Hyderabad.",
        phone: "03481273957",
      },
      destination: {
        id: "252",
        name: "KAMALIA",
        shipment_type: [Array],
        allow_as_origin: true,
        allow_as_destination: true,
      },
      shipping_instructions: "Call the consignee before delivery",
      date: "2/21/2024",
      pieces: 1,
      weight: 100,
      amount: 1198,
      track_number: "HD753216495",
      booked_packet_order_name: "#MD3733",
      collectType: "COD Parcel",
    },
  ];
  let mergedPdfDoc = "";
  let mergedPdfBytes = "";
  mergedPdfDoc = await PDFDocument.create();

  // Fonts

  mergedPdfDoc.registerFontkit(fontkit);
  //load font and embed it to pdf documentx

  const fontBytes = fs.readFileSync(
    // path.join(__dirname, "../backened/fonts/Impact.ttf")
    "./public/fonts/Impact.ttf"
  );
  const Impact = await mergedPdfDoc.embedFont(fontBytes);

  const fontBytes2 = fs.readFileSync("./public/fonts/open-sans-bold.ttf");
  const OpenSansBold = await mergedPdfDoc.embedFont(fontBytes2);

  const fontBytes3 = fs.readFileSync("./public/fonts/OpenSans-Regular.ttf");
  const Open_Sans = await mergedPdfDoc.embedFont(fontBytes3);

  const fontInUse = Open_Sans;
  const fontinBoldUse = OpenSansBold;

  // Calculate the height of each page
  // const height1 = mergedPdfDoc.getPage(0).getHeight();
  // const width1 = mergedPdfDoc.getPage(0).getWidth();
  // console.log("page height: ", height1);

  let courierLogo = fs.readFileSync(
    "../backened/public/images/leopards-logo.png"
  );

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
