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

  const resOrders = orders.push(
    ...[
      {
        id: 5741602570532,
        admin_graphql_api_id: "gid://shopify/Order/5741602570532",
        app_id: 580111,
        browser_ip: "182.180.12.157",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-e01a369cb89dc5708ab4213b87ae063c",
        checkout_id: 37301667430692,
        checkout_token: "c43cb5e81595361086a004e9e22fc505",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "182.180.12.157",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 11; Infinix X688B Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.105 Mobile Safari/537.36 Instagram 321.0.0.39.106 Android (30/11; 320dpi; 720x1472; INFINIX MOBILITY LIMITED/Infinix; Infinix X688B; Infinix-X688B; mt6765; en_US; 572962949)",
        },
        closed_at: null,
        confirmation_number: "0JWM3I3LW",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-09T14:35:47+05:00",
        currency: "PKR",
        current_subtotal_price: "644.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "844.00",
        current_total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAaYVHO2CsirxynnSipFvt-CD28z3HfKiP0lKvHLvhSDyYLEqaM47gRs8ZiI",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4210",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3210,
        order_number: 4210,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/3434b991abd22fe6983769a6a1e31694/authenticate?key=075023821021e11f9234a0f1ae1f0441",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923165130304",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T14:35:46+05:00",
        reference: "ac1c554e56e57dd988ccde0edcbfaa40",
        referring_site: "https://l.instagram.com/",
        source_identifier: "ac1c554e56e57dd988ccde0edcbfaa40",
        source_name: "web",
        source_url: null,
        subtotal_price: "644.00",
        subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "3434b991abd22fe6983769a6a1e31694",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "644.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "844.00",
        total_price: "844.00",
        total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T14:45:18+05:00",
        user_id: null,
        billing_address: {
          first_name: "Kainat",
          address1:
            "House 309-A, street#9, Eastridge housing scheme High court road Rawalpindi",
          phone: "03165130304",
          city: "Rawalpindi",
          zip: "46610",
          province: null,
          country: "Pakistan",
          last_name: "Ali",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Kainat Ali",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128328368420,
          email: null,
          created_at: "2024-03-09T14:35:46+05:00",
          updated_at: "2024-03-09T14:35:48+05:00",
          first_name: "Kainat",
          last_name: "Ali",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923165130304",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128328368420",
          default_address: {
            id: 10195912425764,
            customer_id: 8128328368420,
            first_name: "Kainat",
            last_name: "Ali",
            company: null,
            address1:
              "House 309-A, street#9, Eastridge housing scheme High court road Rawalpindi",
            address2: null,
            city: "Rawalpindi",
            province: null,
            country: "Pakistan",
            zip: "46610",
            phone: "03165130304",
            name: "Kainat Ali",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14691092726052,
            admin_graphql_api_id: "gid://shopify/LineItem/14691092726052",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Short Tailed Menstrual Cup - Pink / Small",
            price: "644.00",
            price_set: {
              shop_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7981575209252,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "SPS",
            taxable: true,
            title: "MomDaughts' Short Tailed Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43723996004644,
            variant_inventory_management: "shopify",
            variant_title: "Pink / Small",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Kainat",
          address1:
            "House 309-A, street#9, Eastridge housing scheme High court road Rawalpindi",
          phone: "03165130304",
          city: "Rawalpindi",
          zip: "46610",
          province: null,
          country: "Pakistan",
          last_name: "Ali",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Kainat Ali",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629273870628,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741559513380,
        admin_graphql_api_id: "gid://shopify/Order/5741559513380",
        app_id: 580111,
        browser_ip: "154.80.32.167",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-761b22cdad4b190ba59415a73f73e870",
        checkout_id: 37300286718244,
        checkout_token: "ec3f4b8d0a2e6a861ebd826e45eb8421",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "154.80.32.167",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 11; Infinix X689B Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.64 Mobile Safari/537.36 Instagram 320.0.0.42.101 Android (30/11; 320dpi; 720x1472; INFINIX MOBILITY LIMITED/Infinix; Infinix X689B; Infinix-X689B; mt6769; en_US; 570684067)",
        },
        closed_at: null,
        confirmation_number: "FGRIKG8MW",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-09T13:28:43+05:00",
        currency: "PKR",
        current_subtotal_price: "1288.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1488.00",
        current_total_price_set: {
          shop_money: {
            amount: "1488.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1488.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAabH2_kv9DcPiQTZghAfZPr14JLbu6Ckk1Y1gYL4sFd-lYpfpWjxwi-ZKIs",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4208",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3208,
        order_number: 4208,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/1bc1c7ea010d90cbafcb765f83c3ec04/authenticate?key=1ba89d16ecdeba12d7f457cfe644636c",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923224026790",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T13:28:41+05:00",
        reference: "308178b146de411e57e8f70246eff055",
        referring_site: "https://l.instagram.com/",
        source_identifier: "308178b146de411e57e8f70246eff055",
        source_name: "web",
        source_url: null,
        subtotal_price: "1288.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "1bc1c7ea010d90cbafcb765f83c3ec04",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1288.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1288.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1488.00",
        total_price: "1488.00",
        total_price_set: {
          shop_money: {
            amount: "1488.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1488.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-09T13:30:04+05:00",
        user_id: null,
        billing_address: {
          first_name: "Amna",
          address1: "35-C 4th avenue NFC housing society wapda town",
          phone: "03224026790",
          city: "Lahore",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Arslan",
          address2: null,
          company: null,
          latitude: 31.41403729999999,
          longitude: 74.2702387,
          name: "Amna Arslan",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128260768036,
          email: null,
          created_at: "2024-03-09T13:28:41+05:00",
          updated_at: "2024-03-09T13:28:43+05:00",
          first_name: "Amna",
          last_name: "Arslan",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923224026790",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128260768036",
          default_address: {
            id: 10195853279524,
            customer_id: 8128260768036,
            first_name: "Amna",
            last_name: "Arslan",
            company: null,
            address1: "35-C 4th avenue NFC housing society wapda town",
            address2: null,
            city: "Lahore",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03224026790",
            name: "Amna Arslan",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14691026141476,
            admin_graphql_api_id: "gid://shopify/LineItem/14691026141476",
            fulfillable_quantity: 2,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Short Tailed Menstrual Cup - Pink / Large",
            price: "644.00",
            price_set: {
              shop_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7981575209252,
            properties: [],
            quantity: 2,
            requires_shipping: true,
            sku: "SPL",
            taxable: true,
            title: "MomDaughts' Short Tailed Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43723996037412,
            variant_inventory_management: "shopify",
            variant_title: "Pink / Large",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Amna",
          address1: "35-C 4th avenue NFC housing society wapda town",
          phone: "03224026790",
          city: "Lahore",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Arslan",
          address2: null,
          company: null,
          latitude: 31.41403729999999,
          longitude: 74.2702387,
          name: "Amna Arslan",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629243855140,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741546701092,
        admin_graphql_api_id: "gid://shopify/Order/5741546701092",
        app_id: 580111,
        browser_ip: "39.51.51.22",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-d9728580e216b67412ec2b1a01fcc9c5",
        checkout_id: 37301565358372,
        checkout_token: "f9e56665de7dc9ff6ea85e5d4ca5bb98",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.51.51.22",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21D61 Instagram 320.0.2.29.98 (iPhone16,2; iOS 17_3_1; en_PK; en; scale=3.00; 1290x2796; 569998124)",
        },
        closed_at: null,
        confirmation_number: "HPXR59AME",
        confirmed: true,
        contact_email: "sehrishzeeshan04@gmail.com",
        created_at: "2024-03-09T13:04:49+05:00",
        currency: "PKR",
        current_subtotal_price: "742.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "942.00",
        current_total_price_set: {
          shop_money: {
            amount: "942.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "942.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "sehrishzeeshan04@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAabraCqxY9XOvynGl1P_p0bH-1Y4PsMwb1HjsEqujnqcpHM7Twc6BHzogis_aem_Ab8JX23vDHYzTqHCEXHuUkc3NWa7-r6QAqPlqIc6GQy5mlHDXJ9TE9zK0bwPZNEVO56fArXHvBc9-2WJM77rPhrM&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4207",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3207,
        order_number: 4207,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/2d314d16ec9284ff2f0f233f78faab14/authenticate?key=900cbb3395e521bdf4a89dc1ded12c3d",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T13:04:48+05:00",
        reference: "91e80663d48ba097dbf892ba3de18817",
        referring_site: "",
        source_identifier: "91e80663d48ba097dbf892ba3de18817",
        source_name: "web",
        source_url: null,
        subtotal_price: "742.00",
        subtotal_price_set: {
          shop_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "2d314d16ec9284ff2f0f233f78faab14",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "742.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "742.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "942.00",
        total_price: "942.00",
        total_price_set: {
          shop_money: {
            amount: "942.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "942.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T13:15:24+05:00",
        user_id: null,
        billing_address: {
          first_name: "Sehrish",
          address1: "House No 5 Block 7/8 Ameer Khusro Road",
          phone: "03312012323",
          city: "Karachi",
          zip: "00000",
          province: null,
          country: "Pakistan",
          last_name: "Zeeshan",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Sehrish Zeeshan",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128240746788,
          email: "sehrishzeeshan04@gmail.com",
          created_at: "2024-03-09T13:04:49+05:00",
          updated_at: "2024-03-09T13:04:50+05:00",
          first_name: "Sehrish",
          last_name: "Zeeshan",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128240746788",
          default_address: {
            id: 10195835748644,
            customer_id: 8128240746788,
            first_name: "Sehrish",
            last_name: "Zeeshan",
            company: null,
            address1: "House No 5 Block 7/8 Ameer Khusro Road",
            address2: null,
            city: "Karachi",
            province: null,
            country: "Pakistan",
            zip: "00000",
            phone: "03312012323",
            name: "Sehrish Zeeshan",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14691005333796,
            admin_graphql_api_id: "gid://shopify/LineItem/14691005333796",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Small / Pink",
            price: "742.00",
            price_set: {
              shop_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPS",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215159076,
            variant_inventory_management: "shopify",
            variant_title: "Small / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Sehrish",
          address1: "House No 5 Block 7/8 Ameer Khusro Road",
          phone: "03312012323",
          city: "Karachi",
          zip: "00000",
          province: null,
          country: "Pakistan",
          last_name: "Zeeshan",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Sehrish Zeeshan",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629235106084,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741537853732,
        admin_graphql_api_id: "gid://shopify/Order/5741537853732",
        app_id: 580111,
        browser_ip: "39.42.33.171",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-eb7db946b3bbd8583a7659c2880dba38",
        checkout_id: 37301548581156,
        checkout_token: "44b97af8b6d38fc0732390ab784cdb8b",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.42.33.171",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "7QHGYXUGE",
        confirmed: true,
        contact_email: "hinayaqub.lcwu@gmail.com",
        created_at: "2024-03-09T12:54:25+05:00",
        currency: "PKR",
        current_subtotal_price: "1538.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1738.00",
        current_total_price_set: {
          shop_money: {
            amount: "1738.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1738.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "hinayaqub.lcwu@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAaali9B_rr4abDG2GYBx15Ey9W_9405kgdD7cWfDduUy3dvobJ7q9z6IKhs_aem_Ab8BnnbGn5WN5EHZhC13KidQ7oF45JW8q2pEy3BYYTW03kAMHMJ0RA7MsIQPsrwCAElBWIjrKHCFNI1tFibB7spO&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4206",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3206,
        order_number: 4206,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/2324ea90de8792ade92fb1c783860804/authenticate?key=ae1ff26df1dfce83c98f251296d5281f",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T12:54:23+05:00",
        reference: "aa80b64fe68fec27454a59fcb37318e9",
        referring_site: "",
        source_identifier: "aa80b64fe68fec27454a59fcb37318e9",
        source_name: "web",
        source_url: null,
        subtotal_price: "1538.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "2324ea90de8792ade92fb1c783860804",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1538.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1538.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1738.00",
        total_price: "1738.00",
        total_price_set: {
          shop_money: {
            amount: "1738.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1738.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-09T13:00:13+05:00",
        user_id: null,
        billing_address: {
          first_name: "hina",
          address1: "house no. 7, street no. 19/B, chah miran lahore",
          phone: "03314338674",
          city: "Lahore",
          zip: "54900",
          province: null,
          country: "Pakistan",
          last_name: "yaqub",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "hina yaqub",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128232489252,
          email: "hinayaqub.lcwu@gmail.com",
          created_at: "2024-03-09T12:54:23+05:00",
          updated_at: "2024-03-09T12:54:26+05:00",
          first_name: "hina",
          last_name: "yaqub",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128232489252",
          default_address: {
            id: 10195828441380,
            customer_id: 8128232489252,
            first_name: "hina",
            last_name: "yaqub",
            company: null,
            address1: "house no. 7, street no. 19/B, chah miran lahore",
            address2: null,
            city: "Lahore",
            province: null,
            country: "Pakistan",
            zip: "54900",
            phone: "03314338674",
            name: "hina yaqub",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690991866148,
            admin_graphql_api_id: "gid://shopify/LineItem/14690991866148",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Pink",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215257380,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14690991898916,
            admin_graphql_api_id: "gid://shopify/LineItem/14690991898916",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Purple",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPRL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215290148,
            variant_inventory_management: "shopify",
            variant_title: "Large / Purple",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "hina",
          address1: "house no. 7, street no. 19/B, chah miran lahore",
          phone: "03314338674",
          city: "Lahore",
          zip: "54900",
          province: null,
          country: "Pakistan",
          last_name: "yaqub",
          address2: null,
          company: null,
          latitude: 31.5872562,
          longitude: 74.3419079,
          name: "hina yaqub",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629228486948,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741530874148,
        admin_graphql_api_id: "gid://shopify/Order/5741530874148",
        app_id: 580111,
        browser_ip: "154.192.136.37",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-25cda5f9a96c7f657545ea09274fb023",
        checkout_id: 37301535277348,
        checkout_token: "d08a165450ff6a751a83f53a86749e6f",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "154.192.136.37",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/21D61 Instagram 321.0.2.24.105 (iPhone16,1; iOS 17_3_1; en_PK; en; scale=3.00; 1179x2556; 572181444)",
        },
        closed_at: null,
        confirmation_number: "5KXE6LMJ9",
        confirmed: true,
        contact_email: "syamazher@hotmail.com",
        created_at: "2024-03-09T12:40:08+05:00",
        currency: "PKR",
        current_subtotal_price: "1268.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1468.00",
        current_total_price_set: {
          shop_money: {
            amount: "1468.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1468.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "syamazher@hotmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAaYlH7eVKjAKybnvnw6mk_wa94sXzTOlbIT40Ef0JI5VTifV6NgxPHrLM7g_aem_Ab_dibvTufThL7Vbg2IUbqtTOI94JiEUAbfcfyacHKD5l9M3IapK-JzaW_oVADSi8ZU8I9JxOfKp5SE8TWg9Bqr9&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4205",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3205,
        order_number: 4205,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/d132e5703142610f37e198d88f57a2a3/authenticate?key=ae992d05a0b5196b4087281ab191c73f",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T12:40:06+05:00",
        reference: "deaf6599c3622d57a85d1e92519683f3",
        referring_site: "",
        source_identifier: "deaf6599c3622d57a85d1e92519683f3",
        source_name: "web",
        source_url: null,
        subtotal_price: "1268.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "d132e5703142610f37e198d88f57a2a3",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1268.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1268.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1468.00",
        total_price: "1468.00",
        total_price_set: {
          shop_money: {
            amount: "1468.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1468.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-09T12:45:05+05:00",
        user_id: null,
        billing_address: {
          first_name: "Syam",
          address1: "Dm Centre, Salman Market, F 11/2",
          phone: "+923334001027",
          city: "Islamabad",
          zip: "44000",
          province: null,
          country: "Pakistan",
          last_name: "Azhar",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Syam Azhar",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128221348132,
          email: "syamazher@hotmail.com",
          created_at: "2024-03-09T12:40:06+05:00",
          updated_at: "2024-03-09T12:40:09+05:00",
          first_name: "Syam",
          last_name: "Azhar",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128221348132",
          default_address: {
            id: 10195819594020,
            customer_id: 8128221348132,
            first_name: "Syam",
            last_name: "Azhar",
            company: null,
            address1: "Dm Centre, Salman Market, F 11/2",
            address2: null,
            city: "Islamabad",
            province: null,
            country: "Pakistan",
            zip: "44000",
            phone: "+923334001027",
            name: "Syam Azhar",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690980725028,
            admin_graphql_api_id: "gid://shopify/LineItem/14690980725028",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "Medicated Inti Wash Hygiene Wash For Women 100 ML",
            price: "499.00",
            price_set: {
              shop_money: {
                amount: "499.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "499.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7984830513444,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Deepsea_Intiwash",
            taxable: true,
            title: "Medicated Inti Wash Hygiene Wash For Women 100 ML",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736226169124,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14690980757796,
            admin_graphql_api_id: "gid://shopify/LineItem/14690980757796",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Pink",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215257380,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Syam",
          address1: "Dm Centre, Salman Market, F 11/2",
          phone: "+923334001027",
          city: "Islamabad",
          zip: "44000",
          province: null,
          country: "Pakistan",
          last_name: "Azhar",
          address2: null,
          company: null,
          latitude: 33.5530834,
          longitude: 73.1365962,
          name: "Syam Azhar",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629224227108,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741450821924,
        admin_graphql_api_id: "gid://shopify/Order/5741450821924",
        app_id: 580111,
        browser_ip: "119.155.194.66",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-3884c69619ce74ccad2f7127172c4c27",
        checkout_id: 37301385003300,
        checkout_token: "66dc12cd610ecae5bcb0ddcf87a2fdd0",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "119.155.194.66",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 13; V2207 Build/TP1A.220624.014_NONFC; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.180 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/452.0.0.45.110;]",
        },
        closed_at: null,
        confirmation_number: "WAUM8GXKP",
        confirmed: true,
        contact_email: "nabijan060@gmail.com",
        created_at: "2024-03-09T10:20:47+05:00",
        currency: "PKR",
        current_subtotal_price: "1511.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1711.00",
        current_total_price_set: {
          shop_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "nabijan060@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=IwAR08OM5HSWNIzcfIxo5M31x_BuEKI80sAqNi-KfBdIrVa2LvUKk-mHxyUYI_aem_Ab-h8JfDZh1j9IAaBylqgsVBm2JZKwgDI1Ls7hO7JJxaFOC_QppLOFnO5stguW7GaKzqSlneulrk2LZy5DK9CrXC&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4204",
        note: null,
        note_attributes: [],
        number: 3204,
        order_number: 4204,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/ff773ce73aa4927e5ec74eb388490d55/authenticate?key=c1807978354adece3934eab4f133b5ad",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T10:20:45+05:00",
        reference: "eb84b44f93359991cade05edf4a2d8e7",
        referring_site: "http://m.facebook.com/",
        source_identifier: "eb84b44f93359991cade05edf4a2d8e7",
        source_name: "web",
        source_url: null,
        subtotal_price: "1511.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "ff773ce73aa4927e5ec74eb388490d55",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1511.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1711.00",
        total_price: "1711.00",
        total_price_set: {
          shop_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-09T16:29:51+05:00",
        user_id: null,
        billing_address: {
          first_name: "Mohammad",
          address1: "Brc College Loralai",
          phone: "00923354508725",
          city: "Loralai",
          zip: "8400",
          province: null,
          country: "Pakistan",
          last_name: "Nabi",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Mohammad Nabi",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128087720228,
          email: "nabijan060@gmail.com",
          created_at: "2024-03-09T10:16:40+05:00",
          updated_at: "2024-03-09T16:29:19+05:00",
          first_name: "Mohammad",
          last_name: "Nabi",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128087720228",
          default_address: {
            id: 10195702415652,
            customer_id: 8128087720228,
            first_name: "Mohammad",
            last_name: "Nabi",
            company: null,
            address1: "Brc College Loralai",
            address2: null,
            city: "Loralai",
            province: null,
            country: "Pakistan",
            zip: "8400",
            phone: "00923354508725",
            name: "Mohammad Nabi",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690844541220,
            admin_graphql_api_id: "gid://shopify/LineItem/14690844541220",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Small / Pink",
            price: "742.00",
            price_set: {
              shop_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPS",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215159076,
            variant_inventory_management: "shopify",
            variant_title: "Small / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14691208790308,
            admin_graphql_api_id: "gid://shopify/LineItem/14691208790308",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Pink",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215257380,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Mohammad",
          address1: "Brc College Loralai",
          phone: "00923354508725",
          city: "Loralai",
          zip: "8400",
          province: null,
          country: "Pakistan",
          last_name: "Nabi",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Mohammad Nabi",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629168718116,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741407174948,
        admin_graphql_api_id: "gid://shopify/Order/5741407174948",
        app_id: 580111,
        browser_ip: "39.48.66.152",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-374d917c4d8e0af094437df781ef5da2",
        checkout_id: 37301295055140,
        checkout_token: "90f27ce6aaea2b8f515ab42bcc160fe8",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.48.66.152",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 11; vivo 1901 Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.144 Mobile Safari/537.36 Instagram 320.0.0.42.101 Android (30/11; 320dpi; 720x1406; vivo; vivo 1901; 1901; mt6762; en_US; 570684067)",
        },
        closed_at: null,
        confirmation_number: "98PPHLXVK",
        confirmed: true,
        contact_email: "khadijaanwer6@gmail.com",
        created_at: "2024-03-09T09:03:18+05:00",
        currency: "PKR",
        current_subtotal_price: "769.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "969.00",
        current_total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "khadijaanwer6@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAaYlJ-25LalgOGW0zFcv6Mvx_NouYLZR6qsiFdX5d-nwFzXoZYN97l5xrSo_aem_AdJZ-E3KU877GRLmxtdK0Nw_MwrLxKdEBgwT9WUPtIZsU25FCQwJvfh-pD3LmxHgppLH5s5EsteQZNiTyjONZ9hW&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4202",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3202,
        order_number: 4202,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/af574f9b9086148ebbe7cd0fd87b29b7/authenticate?key=5cc925b979d7b5610a98785bd0f27aa3",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T09:03:16+05:00",
        reference: "c36d2ff4338246f03b45f5dc7cef5c80",
        referring_site: "http://instagram.com/",
        source_identifier: "c36d2ff4338246f03b45f5dc7cef5c80",
        source_name: "web",
        source_url: null,
        subtotal_price: "769.00",
        subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "af574f9b9086148ebbe7cd0fd87b29b7",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "769.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "969.00",
        total_price: "969.00",
        total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T10:31:11+05:00",
        user_id: null,
        billing_address: {
          first_name: "Khadija",
          address1: "Gate#9 NCLA&C H-12 NUST Islamabad",
          phone: "03325391703",
          city: "Islamabad",
          zip: "0000",
          province: null,
          country: "Pakistan",
          last_name: "Anwar",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Khadija Anwar",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128015302948,
          email: "khadijaanwer6@gmail.com",
          created_at: "2024-03-09T09:03:16+05:00",
          updated_at: "2024-03-09T09:03:18+05:00",
          first_name: "Khadija",
          last_name: "Anwar",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128015302948",
          default_address: {
            id: 10195639304484,
            customer_id: 8128015302948,
            first_name: "Khadija",
            last_name: "Anwar",
            company: null,
            address1: "Gate#9 NCLA&C H-12 NUST Islamabad",
            address2: null,
            city: "Islamabad",
            province: null,
            country: "Pakistan",
            zip: "0000",
            phone: "03325391703",
            name: "Khadija Anwar",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690772582692,
            admin_graphql_api_id: "gid://shopify/LineItem/14690772582692",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Purple",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPRL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215290148,
            variant_inventory_management: "shopify",
            variant_title: "Large / Purple",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Khadija",
          address1: "Gate#9 NCLA&C H-12 NUST Islamabad",
          phone: "03325391703",
          city: "Islamabad",
          zip: "0000",
          province: null,
          country: "Pakistan",
          last_name: "Anwar",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Khadija Anwar",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629138080036,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741401473316,
        admin_graphql_api_id: "gid://shopify/Order/5741401473316",
        app_id: 580111,
        browser_ip: "39.40.147.21",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-fd8c559562dae48eebc59ed61bda8f3b",
        checkout_id: 37301284045092,
        checkout_token: "58f5de0f625b4ea2fa2f3d7be95a98b5",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.40.147.21",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 12; SM-A125F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.102 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/454.0.0.44.104;]",
        },
        closed_at: null,
        confirmation_number: "H8892APK7",
        confirmed: true,
        contact_email: "asmazubar01@gmail.com",
        created_at: "2024-03-09T08:54:37+05:00",
        currency: "PKR",
        current_subtotal_price: "769.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "969.00",
        current_total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "asmazubar01@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=IwAR0kUtJTbolLgOV6SCknzLZqo4qiHm5qmS19Dnms9iLn1bQysLtzJDk_WdY_aem_AdKHWDuA3zJZNzk2TIPTNMErg-UOkIKXPExpsqykufeti355eJNyyRJlhxVRaZ5XechD9ABQDyOIEKkhVd1O62Rf&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4201",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "2",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3201,
        order_number: 4201,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/e61a8ea2baa347a0cb24f743487e18b3/authenticate?key=dce5e61de209e0d2799adbd6b1c31fda",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T08:54:35+05:00",
        reference: "3197b8e0a17ca12fa2d630cf3cb2b9d6",
        referring_site: "http://m.facebook.com/",
        source_identifier: "3197b8e0a17ca12fa2d630cf3cb2b9d6",
        source_name: "web",
        source_url: null,
        subtotal_price: "769.00",
        subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "e61a8ea2baa347a0cb24f743487e18b3",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "769.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "969.00",
        total_price: "969.00",
        total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T11:00:54+05:00",
        user_id: null,
        billing_address: {
          first_name: "Asma",
          address1: "C1 Gepco Colony Shahabpura Road Sialkot",
          phone: "03216783004",
          city: "Sialkot",
          zip: "12345",
          province: null,
          country: "Pakistan",
          last_name: "Zubair",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Asma Zubair",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8128007078180,
          email: "asmazubar01@gmail.com",
          created_at: "2024-03-09T08:54:35+05:00",
          updated_at: "2024-03-09T08:54:37+05:00",
          first_name: "Asma",
          last_name: "Zubair",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8128007078180",
          default_address: {
            id: 10195632193828,
            customer_id: 8128007078180,
            first_name: "Asma",
            last_name: "Zubair",
            company: null,
            address1: "C1 Gepco Colony Shahabpura Road Sialkot",
            address2: null,
            city: "Sialkot",
            province: null,
            country: "Pakistan",
            zip: "12345",
            phone: "03216783004",
            name: "Asma Zubair",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690762588452,
            admin_graphql_api_id: "gid://shopify/LineItem/14690762588452",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Pink",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215257380,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Asma",
          address1: "C1 Gepco Colony Shahabpura Road Sialkot",
          phone: "03216783004",
          city: "Sialkot",
          zip: "12345",
          province: null,
          country: "Pakistan",
          last_name: "Zubair",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Asma Zubair",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629133918500,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741360873764,
        admin_graphql_api_id: "gid://shopify/Order/5741360873764",
        app_id: 580111,
        browser_ip: "72.255.7.102",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-96dddab2377e26721f924a57b292a2d3",
        checkout_id: 37301187379492,
        checkout_token: "87af9c1b258f4ff03097affd17ea2df5",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "72.255.7.102",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 14; SM-A235F Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.102 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/454.0.0.44.104;]",
        },
        closed_at: null,
        confirmation_number: "JNWAXUD9I",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-09T07:41:06+05:00",
        currency: "PKR",
        current_subtotal_price: "644.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "844.00",
        current_total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=IwAR2mWpuRLO6YMh7ilxj0A0S57I-lt_Up_meFqdO9FpgQH7hqxGtE0rpaCjM_aem_AdJliCYOiVI7m3CMLJ0yScIwLPHdUzM3Q9ljFYJjsLIM-DoBV5-wcek5K4sTIS0e5r2mwDubJ4Xe8x63HdlcIwM3&utm_source=facebook&utm_medium=paid&campaign_id=120206907489520263&ad_id=120206907489530263",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4199",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3199,
        order_number: 4199,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/d9bbc69bff355afa924518492db96e2e/authenticate?key=d2167556a9d5e570132b881c4207deee",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923335216139",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T07:41:04+05:00",
        reference: "d00530b5fe86e102ec46d154fd6a169b",
        referring_site: "http://m.facebook.com/",
        source_identifier: "d00530b5fe86e102ec46d154fd6a169b",
        source_name: "web",
        source_url: null,
        subtotal_price: "644.00",
        subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "d9bbc69bff355afa924518492db96e2e",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "644.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "844.00",
        total_price: "844.00",
        total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T10:16:48+05:00",
        user_id: null,
        billing_address: {
          first_name: "Yasar",
          address1: "House no.202F, EME Society, Lahore, Pakistan",
          phone: "03335216139",
          city: "Lahore",
          zip: "53710",
          province: null,
          country: "Pakistan",
          last_name: "Imanat",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Yasar Imanat",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8127933972772,
          email: null,
          created_at: "2024-03-09T07:41:04+05:00",
          updated_at: "2024-03-09T07:41:06+05:00",
          first_name: "Yasar",
          last_name: "Imanat",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923335216139",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8127933972772",
          default_address: {
            id: 10195568296228,
            customer_id: 8127933972772,
            first_name: "Yasar",
            last_name: "Imanat",
            company: null,
            address1: "House no.202F, EME Society, Lahore, Pakistan",
            address2: null,
            city: "Lahore",
            province: null,
            country: "Pakistan",
            zip: "53710",
            phone: "03335216139",
            name: "Yasar Imanat",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690688368932,
            admin_graphql_api_id: "gid://shopify/LineItem/14690688368932",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Short Tailed Menstrual Cup - Pink / Large",
            price: "644.00",
            price_set: {
              shop_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7981575209252,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "SPL",
            taxable: true,
            title: "MomDaughts' Short Tailed Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43723996037412,
            variant_inventory_management: "shopify",
            variant_title: "Pink / Large",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Yasar",
          address1: "House no.202F, EME Society, Lahore, Pakistan",
          phone: "03335216139",
          city: "Lahore",
          zip: "53710",
          province: null,
          country: "Pakistan",
          last_name: "Imanat",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Yasar Imanat",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4629104754980,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5741017301284,
        admin_graphql_api_id: "gid://shopify/Order/5741017301284",
        app_id: 580111,
        browser_ip: "58.65.222.199",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-8fbe8cbf306c09ed79bc74e6d6e571c1",
        checkout_id: 37300424933668,
        checkout_token: "d63c443b752a4667672d30babacdcbf2",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "58.65.222.199",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 12; SM-A315F Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/119.0.6045.164 Mobile Safari/537.36 Instagram 320.0.0.42.101 Android (31/12; 420dpi; 1080x2195; samsung; SM-A315F; a31; mt6768; en_US; 570684071)",
        },
        closed_at: null,
        confirmation_number: "LE4ZT8XN0",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-08T23:26:53+05:00",
        currency: "PKR",
        current_subtotal_price: "1388.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1588.00",
        current_total_price_set: {
          shop_money: {
            amount: "1588.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1588.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=PAAaY1y_WA-hHWmD_kc981DbbT4cRXWnAuPmh6boKPs4aaerIJkNjS7wI9_Cs",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4197",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3197,
        order_number: 4197,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/91b63083343699ae3b6595835b38f924/authenticate?key=11a7dcd07e903a3c0a5d2f122f2a8a58",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923107067159",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T23:26:51+05:00",
        reference: "86dcaf143f0f6991f638fe6ec85b382b",
        referring_site: "https://l.instagram.com/",
        source_identifier: "86dcaf143f0f6991f638fe6ec85b382b",
        source_name: "web",
        source_url: null,
        subtotal_price: "1388.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "91b63083343699ae3b6595835b38f924",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1388.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1388.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1588.00",
        total_price: "1588.00",
        total_price_set: {
          shop_money: {
            amount: "1588.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1588.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-09T10:20:33+05:00",
        user_id: null,
        billing_address: {
          first_name: "M.Alyan",
          address1:
            "House no#265 near Sadaqat Hoesary, Green Town,Millat Road,Faisalabad",
          phone: "03107067159",
          city: "Faisalabad",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Khalid",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "M.Alyan Khalid",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8127373803812,
          email: null,
          created_at: "2024-03-08T23:26:51+05:00",
          updated_at: "2024-03-08T23:26:54+05:00",
          first_name: "M.Alyan",
          last_name: "Khalid",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923107067159",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8127373803812",
          default_address: {
            id: 10195092799780,
            customer_id: 8127373803812,
            first_name: "M.Alyan",
            last_name: "Khalid",
            company: null,
            address1:
              "House no#265 near Sadaqat Hoesary, Green Town,Millat Road,Faisalabad",
            address2: null,
            city: "Faisalabad",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03107067159",
            name: "M.Alyan Khalid",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14690072199460,
            admin_graphql_api_id: "gid://shopify/LineItem/14690072199460",
            fulfillable_quantity: 2,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Long Tailed Menstrual Cup - Large / Pink",
            price: "694.00",
            price_set: {
              shop_money: {
                amount: "694.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "694.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7997785407780,
            properties: [],
            quantity: 2,
            requires_shipping: true,
            sku: "LPL",
            taxable: true,
            title: "MomDaughts' Long Tailed Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43786339057956,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "M.Alyan",
          address1:
            "House no#265 near Sadaqat Hoesary, Green Town,Millat Road,Faisalabad",
          phone: "03107067159",
          city: "Faisalabad",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Khalid",
          address2: null,
          company: null,
          latitude: 31.4634111,
          longitude: 73.1026269,
          name: "M.Alyan Khalid",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4628898152740,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5740971393316,
        admin_graphql_api_id: "gid://shopify/Order/5740971393316",
        app_id: 580111,
        browser_ip: "124.29.253.251",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-5cfb5bd45d4b637898b3ab727ba7a1f8",
        checkout_id: 37300330922276,
        checkout_token: "35b3c94653fd9caf0fbe5bdf95889c7f",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "124.29.253.251",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "G6GZC6GGD",
        confirmed: true,
        contact_email: "safdara8899@gmail.com",
        created_at: "2024-03-08T22:35:34+05:00",
        currency: "PKR",
        current_subtotal_price: "644.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "844.00",
        current_total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "safdara8899@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4196",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "3",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3196,
        order_number: 4196,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/385a51f595a597e0e2ff62292dea8629/authenticate?key=4f8b05bad03d013ba9eda7755c032598",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T22:35:32+05:00",
        reference: "f4d85de5450cce9a3d2580e733d549ed",
        referring_site: "https://www.google.com/",
        source_identifier: "f4d85de5450cce9a3d2580e733d549ed",
        source_name: "web",
        source_url: null,
        subtotal_price: "644.00",
        subtotal_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "385a51f595a597e0e2ff62292dea8629",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "644.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "644.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "844.00",
        total_price: "844.00",
        total_price_set: {
          shop_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "844.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-09T11:18:44+05:00",
        user_id: null,
        billing_address: {
          first_name: "Safdar",
          address1: "Tank no 7 old area  block no 36/7 F1 area",
          phone: "03106480208",
          city: "Gujranwala cantt",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Ali",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Safdar Ali",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8127307940132,
          email: "safdara8899@gmail.com",
          created_at: "2024-03-08T22:35:32+05:00",
          updated_at: "2024-03-08T22:35:34+05:00",
          first_name: "Safdar",
          last_name: "Ali",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8127307940132",
          default_address: {
            id: 10195037290788,
            customer_id: 8127307940132,
            first_name: "Safdar",
            last_name: "Ali",
            company: null,
            address1: "Tank no 7 old area  block no 36/7 F1 area",
            address2: null,
            city: "Gujranwala cantt",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03106480208",
            name: "Safdar Ali",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14689992835364,
            admin_graphql_api_id: "gid://shopify/LineItem/14689992835364",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Short Tailed Menstrual Cup - Pink / Small",
            price: "644.00",
            price_set: {
              shop_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "644.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7981575209252,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "SPS",
            taxable: true,
            title: "MomDaughts' Short Tailed Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43723996004644,
            variant_inventory_management: "shopify",
            variant_title: "Pink / Small",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Safdar",
          address1: "Tank no 7 old area  block no 36/7 F1 area",
          phone: "03106480208",
          city: "Gujranwala cantt",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Ali",
          address2: null,
          company: null,
          latitude: 32.1316339,
          longitude: 74.2098208,
          name: "Safdar Ali",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4628868432164,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5740854378788,
        admin_graphql_api_id: "gid://shopify/Order/5740854378788",
        app_id: 580111,
        browser_ip: "111.88.233.195",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-05398c09c5d5d81739ea46ef65607c83",
        checkout_id: 37299885408548,
        checkout_token: "d74cd03387b75c7167c92b5d874faf7d",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "111.88.233.195",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "AMVPUZZWH",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-08T20:22:44+05:00",
        currency: "PKR",
        current_subtotal_price: "998.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1198.00",
        current_total_price_set: {
          shop_money: {
            amount: "1198.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1198.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/collections/the-mother-daughter-collection",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4195",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3195,
        order_number: 4195,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/a0519f6e0be55248b5c5c561893fc821/authenticate?key=df3bb3822288a59bbb218ac7199c372c",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923267477663",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T20:22:43+05:00",
        reference: "cbeda86680f7ed83b5d689b250a18b88",
        referring_site: "https://www.google.com/",
        source_identifier: "cbeda86680f7ed83b5d689b250a18b88",
        source_name: "web",
        source_url: null,
        subtotal_price: "998.00",
        subtotal_price_set: {
          shop_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "a0519f6e0be55248b5c5c561893fc821",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "998.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "998.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1198.00",
        total_price: "1198.00",
        total_price_set: {
          shop_money: {
            amount: "1198.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1198.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-08T20:30:18+05:00",
        user_id: null,
        billing_address: {
          first_name: "Umair",
          address1: "Gulshan Zainab 34 pull house no 8",
          phone: "03267477663",
          city: "Sahiwal",
          zip: "57000",
          province: null,
          country: "Pakistan",
          last_name: "Rafique",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Umair Rafique",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8127105499428,
          email: null,
          created_at: "2024-03-08T20:22:43+05:00",
          updated_at: "2024-03-08T20:22:44+05:00",
          first_name: "Umair",
          last_name: "Rafique",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923267477663",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8127105499428",
          default_address: {
            id: 10194876006692,
            customer_id: 8127105499428,
            first_name: "Umair",
            last_name: "Rafique",
            company: null,
            address1: "Gulshan Zainab 34 pull house no 8",
            address2: null,
            city: "Sahiwal",
            province: null,
            country: "Pakistan",
            zip: "57000",
            phone: "03267477663",
            name: "Umair Rafique",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14689783906596,
            admin_graphql_api_id: "gid://shopify/LineItem/14689783906596",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Niacinamide Zinc Pca Serum: Brighter Skin 30mL",
            price: "599.00",
            price_set: {
              shop_money: {
                amount: "599.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "599.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 8711623639332,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Niacinamide",
            taxable: false,
            title: "MomDaughts' Niacinamide Zinc Pca Serum: Brighter Skin 30mL",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 46971452817700,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14689783939364,
            admin_graphql_api_id: "gid://shopify/LineItem/14689783939364",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "Purify and Restore MomDaughts' Tea Tree 100% Natural & Pure Essential Oil - 10mL",
            price: "399.00",
            price_set: {
              shop_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 8421044650276,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Tea_Tree_10ml",
            taxable: true,
            title:
              "Purify and Restore MomDaughts' Tea Tree 100% Natural & Pure Essential Oil",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 45599103615268,
            variant_inventory_management: "shopify",
            variant_title: "10mL",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Umair",
          address1: "Gulshan Zainab 34 pull house no 8",
          phone: "03267477663",
          city: "Sahiwal",
          zip: "57000",
          province: null,
          country: "Pakistan",
          last_name: "Rafique",
          address2: null,
          company: null,
          latitude: 30.6611649,
          longitude: 73.11160319999999,
          name: "Umair Rafique",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4628792967460,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5740783173924,
        admin_graphql_api_id: "gid://shopify/Order/5740783173924",
        app_id: 580111,
        browser_ip: "39.60.146.204",
        buyer_accepts_marketing: true,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-2cbcfc87cc51fff35bc04f5dc583a0cd",
        checkout_id: 37299946258724,
        checkout_token: "fbf37140c8dc3675e0a7193bb89d6fbb",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.60.146.204",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "H8FR4JMPZ",
        confirmed: true,
        contact_email: "Hossenozel2017@gmail.com",
        created_at: "2024-03-08T18:52:10+05:00",
        currency: "PKR",
        current_subtotal_price: "1511.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1711.00",
        current_total_price_set: {
          shop_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "Hossenozel2017@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4194",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3194,
        order_number: 4194,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/35b1f459fb2d05375d846685a53f1a94/authenticate?key=a1263cd7a91f8eddf4e572c0dcfe66e6",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T18:52:08+05:00",
        reference: "894e5169a70666bd0c75203fe4704d96",
        referring_site: "",
        source_identifier: "894e5169a70666bd0c75203fe4704d96",
        source_name: "web",
        source_url: null,
        subtotal_price: "1511.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "35b1f459fb2d05375d846685a53f1a94",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1511.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1511.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1711.00",
        total_price: "1711.00",
        total_price_set: {
          shop_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1711.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 200,
        updated_at: "2024-03-08T19:00:09+05:00",
        user_id: null,
        billing_address: {
          first_name: "Rimsha",
          address1:
            "Dhama syeddan near imam bargha house #3 street 1, adyala road rawalpindi",
          phone: "03195066622",
          city: "Rawalpindi",
          zip: "47311",
          province: null,
          country: "Pakistan",
          last_name: "Kamran",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Rimsha Kamran",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8126998085924,
          email: "hossenozel2017@gmail.com",
          created_at: "2024-03-08T18:52:08+05:00",
          updated_at: "2024-03-08T18:52:10+05:00",
          first_name: "Rimsha",
          last_name: "Kamran",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: "2024-03-08T18:52:10+05:00",
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: true,
          accepts_marketing_updated_at: "2024-03-08T18:52:10+05:00",
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8126998085924",
          default_address: {
            id: 10194781339940,
            customer_id: 8126998085924,
            first_name: "Rimsha",
            last_name: "Kamran",
            company: null,
            address1:
              "Dhama syeddan near imam bargha house #3 street 1, adyala road rawalpindi",
            address2: null,
            city: "Rawalpindi",
            province: null,
            country: "Pakistan",
            zip: "47311",
            phone: "03195066622",
            name: "Rimsha Kamran",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14689664663844,
            admin_graphql_api_id: "gid://shopify/LineItem/14689664663844",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Pink",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215257380,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14689664696612,
            admin_graphql_api_id: "gid://shopify/LineItem/14689664696612",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Small / Pink",
            price: "742.00",
            price_set: {
              shop_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "742.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPS",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215159076,
            variant_inventory_management: "shopify",
            variant_title: "Small / Pink",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Rimsha",
          address1:
            "Dhama syeddan near imam bargha house #3 street 1, adyala road rawalpindi",
          phone: "03195066622",
          city: "Rawalpindi",
          zip: "47311",
          province: null,
          country: "Pakistan",
          last_name: "Kamran",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Rimsha Kamran",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4628739817764,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5740730319140,
        admin_graphql_api_id: "gid://shopify/Order/5740730319140",
        app_id: 580111,
        browser_ip: "103.200.196.224",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-0b47542aec0a8cb9f3dec361be28dfd3",
        checkout_id: 37299824820516,
        checkout_token: "724d6253aadf70bcf1d6b2cb5f932bef",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "103.200.196.224",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 11; CPH2239 Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.102 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/454.0.0.44.104;]",
        },
        closed_at: null,
        confirmation_number: "K1GYA7NVI",
        confirmed: true,
        contact_email: "anuswajid2011@gmail.com",
        created_at: "2024-03-08T17:29:54+05:00",
        currency: "PKR",
        current_subtotal_price: "769.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "969.00",
        current_total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "anuswajid2011@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/?fbclid=IwAR2Bi9Np9kkzQFg3PvHionYp5U-yJ4Cro8xPVqQ0wJ30mY7gyjJP5Nvy464",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "#MD4193",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "2",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 3193,
        order_number: 4193,
        order_status_url:
          "https://momdaughts.com/66907734308/orders/b532ca3e20dc0d79c779dd6717eb0769/authenticate?key=b4fff1f5ede96d09fc93d618d40c602b",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T17:29:52+05:00",
        reference: "d2054c3eca90b620f4b9eded5752ee7e",
        referring_site: "https://lm.facebook.com/",
        source_identifier: "d2054c3eca90b620f4b9eded5752ee7e",
        source_name: "web",
        source_url: null,
        subtotal_price: "769.00",
        subtotal_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: false,
        test: false,
        token: "b532ca3e20dc0d79c779dd6717eb0769",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "769.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "769.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "969.00",
        total_price: "969.00",
        total_price_set: {
          shop_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "969.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "200.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-08T18:15:45+05:00",
        user_id: null,
        billing_address: {
          first_name: "Syed",
          address1:
            "Chandi rehmani lane shahi bazar.hyd H.No.849 b/19Hyderabad",
          phone: "03153277065",
          city: "Hyderabad",
          zip: "71000",
          province: null,
          country: "Pakistan",
          last_name: "Wajid",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Syed Wajid",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 8126914756900,
          email: "anuswajid2011@gmail.com",
          created_at: "2024-03-08T17:29:53+05:00",
          updated_at: "2024-03-08T17:29:54+05:00",
          first_name: "Syed",
          last_name: "Wajid",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/8126914756900",
          default_address: {
            id: 10194711806244,
            customer_id: 8126914756900,
            first_name: "Syed",
            last_name: "Wajid",
            company: null,
            address1:
              "Chandi rehmani lane shahi bazar.hyd H.No.849 b/19Hyderabad",
            address2: null,
            city: "Hyderabad",
            province: null,
            country: "Pakistan",
            zip: "71000",
            phone: "03153277065",
            name: "Syed Wajid",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14689567834404,
            admin_graphql_api_id: "gid://shopify/LineItem/14689567834404",
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "MomDaughts' Double tail Menstrual Cup - Large / Purple",
            price: "769.00",
            price_set: {
              shop_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "769.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7970555658532,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "DPRL",
            taxable: true,
            title: "MomDaughts' Double tail Menstrual Cup",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 43736215290148,
            variant_inventory_management: "shopify",
            variant_title: "Large / Purple",
            vendor: "MomDaughts",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Syed",
          address1:
            "Chandi rehmani lane shahi bazar.hyd H.No.849 b/19Hyderabad",
          phone: "03153277065",
          city: "Hyderabad",
          zip: "71000",
          province: null,
          country: "Pakistan",
          last_name: "Wajid",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Syed Wajid",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4628701184292,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "Shipping 1-4 Days",
            discounted_price: "200.00",
            discounted_price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "200.00",
            price_set: {
              shop_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "200.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "Shipping 1-4 Days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "momdaughts.myshopify.com",
          shopLogo:
            "https://momdaughts.com/cdn/shop/files/shapater_logo.png?v=1666980932&width=500",
          name: "Momdaughts",
          courierID: 29,
        },
      },
      {
        id: 5758586978611,
        admin_graphql_api_id: "gid://shopify/Order/5758586978611",
        app_id: 580111,
        browser_ip: "39.43.59.243",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token:
          "Z2NwLWV1cm9wZS13ZXN0MTowMUhSR1hCVk5OREpKU1JSRlc5TVA0S0U0RQ",
        checkout_id: 37562317308211,
        checkout_token: "af25dc360c6c4a297a3fc3555c0d6e49",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.43.59.243",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "1XR9J0E09",
        confirmed: true,
        contact_email: "hinahamad555@gmail.com",
        created_at: "2024-03-09T11:15:07+05:00",
        currency: "PKR",
        current_subtotal_price: "2057.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "2232.00",
        current_total_price_set: {
          shop_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "hinahamad555@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/products/manual-breast-pump",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5863",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 4863,
        order_number: 5863,
        order_status_url:
          "https://nakson.pk/60025733318/orders/7f95057bb4a77e1636caba94d596f808/authenticate?key=d91dd4a8bfe4394fc3b8a09e3ddea249",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T11:15:05+05:00",
        reference: "fe0f162fc6000488ce9170d2fd87d28d",
        referring_site: "https://www.google.com/",
        source_identifier: "fe0f162fc6000488ce9170d2fd87d28d",
        source_name: "web",
        source_url: null,
        subtotal_price: "2057.00",
        subtotal_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "7f95057bb4a77e1636caba94d596f808",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "2057.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "2232.00",
        total_price: "2232.00",
        total_price_set: {
          shop_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 300,
        updated_at: "2024-03-09T11:31:14+05:00",
        user_id: null,
        billing_address: {
          first_name: "hammad",
          address1:
            "syed jamil badshah, fertilizer dealer new grain market peshawar",
          phone: "03339155087",
          city: "peshawar",
          zip: "25000",
          province: null,
          country: "Pakistan",
          last_name: "alam",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "hammad alam",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7763085099315,
          email: "hinahamad555@gmail.com",
          created_at: "2024-03-09T10:44:58+05:00",
          updated_at: "2024-03-09T11:15:07+05:00",
          first_name: "hammad",
          last_name: "alam",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7763085099315",
          default_address: {
            id: 9835846697267,
            customer_id: 7763085099315,
            first_name: "hammad",
            last_name: "alam",
            company: null,
            address1:
              "syed jamil badshah, fertilizer dealer new grain market peshawar",
            address2: null,
            city: "peshawar",
            province: null,
            country: "Pakistan",
            zip: "25000",
            phone: "03339155087",
            name: "hammad alam",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14724003397939,
            admin_graphql_api_id: "gid://shopify/LineItem/14724003397939",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Deepsea Cooling Patch Fast fever relief 6 Patches long lasting",
            price: "359.00",
            price_set: {
              shop_money: {
                amount: "359.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "359.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 6909421322438,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "6_Patches",
            taxable: false,
            title:
              "Deepsea Cooling Patch Fast fever relief 6 Patches long lasting",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 40774586990790,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Deepsea Life Sciences",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14724003430707,
            admin_graphql_api_id: "gid://shopify/LineItem/14724003430707",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Baby Pacifier Set Silicone Nipples Chain Combination Baby Sleeping Pacifier With Storage Box - blue",
            price: "399.00",
            price_set: {
              shop_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7512339742918,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Pacifier_Blue",
            taxable: true,
            title:
              "Baby Pacifier Set Silicone Nipples Chain Combination Baby Sleeping Pacifier With Storage Box",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 42237584867526,
            variant_inventory_management: "shopify",
            variant_title: "blue",
            vendor: "Deepsea Life Sciences",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14724003463475,
            admin_graphql_api_id: "gid://shopify/LineItem/14724003463475",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 160,
            name: "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            price: "1299.00",
            price_set: {
              shop_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7060161298630,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "RH-188",
            taxable: false,
            title:
              "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41124964368582,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "hammad",
          address1:
            "syed jamil badshah, fertilizer dealer new grain market peshawar",
          phone: "03339155087",
          city: "peshawar",
          zip: "25000",
          province: null,
          country: "Pakistan",
          last_name: "alam",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "hammad alam",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4669344383283,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5758574690611,
        admin_graphql_api_id: "gid://shopify/Order/5758574690611",
        app_id: 580111,
        browser_ip: "39.43.59.243",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token:
          "Z2NwLWV1cm9wZS13ZXN0MTowMUhSR1RXWVBWWUFZN1IzUUYxUzEwUzczRQ",
        checkout_id: 37562272121139,
        checkout_token: "eaa97a2bbf22132ba7384b0d86d82f95",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "39.43.59.243",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "QXWJ4F4V8",
        confirmed: true,
        contact_email: "hinahamad555@gmail.com",
        created_at: "2024-03-09T10:45:00+05:00",
        currency: "PKR",
        current_subtotal_price: "2057.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "2232.00",
        current_total_price_set: {
          shop_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "hinahamad555@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/products/manual-breast-pump",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5862",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Call Back",
          },
        ],
        number: 4862,
        order_number: 5862,
        order_status_url:
          "https://nakson.pk/60025733318/orders/cd9d4c7bf9a5ac1add0a0947aa61bd13/authenticate?key=7298a8b550a33cc3c936f763cbde0ed4",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-09T10:44:57+05:00",
        reference: "6340f370a474164d3995577ca796d3e9",
        referring_site: "https://www.google.com/",
        source_identifier: "6340f370a474164d3995577ca796d3e9",
        source_name: "web",
        source_url: null,
        subtotal_price: "2057.00",
        subtotal_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "cd9d4c7bf9a5ac1add0a0947aa61bd13",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "2057.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2057.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "2232.00",
        total_price: "2232.00",
        total_price_set: {
          shop_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "2232.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 300,
        updated_at: "2024-03-09T16:18:02+05:00",
        user_id: null,
        billing_address: {
          first_name: "hammad",
          address1:
            "syed jamil badshah, fertilizer dealer new grain market peshawar",
          phone: "3339155087",
          city: "peshawar",
          zip: "25000",
          province: null,
          country: "Pakistan",
          last_name: "alam",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "hammad alam",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7763085099315,
          email: "hinahamad555@gmail.com",
          created_at: "2024-03-09T10:44:58+05:00",
          updated_at: "2024-03-09T11:15:07+05:00",
          first_name: "hammad",
          last_name: "alam",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7763085099315",
          default_address: {
            id: 9835846697267,
            customer_id: 7763085099315,
            first_name: "hammad",
            last_name: "alam",
            company: null,
            address1:
              "syed jamil badshah, fertilizer dealer new grain market peshawar",
            address2: null,
            city: "peshawar",
            province: null,
            country: "Pakistan",
            zip: "25000",
            phone: "03339155087",
            name: "hammad alam",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14723983409459,
            admin_graphql_api_id: "gid://shopify/LineItem/14723983409459",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Baby Pacifier Set Silicone Nipples Chain Combination Baby Sleeping Pacifier With Storage Box - blue",
            price: "399.00",
            price_set: {
              shop_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "399.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7512339742918,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Pacifier_Blue",
            taxable: true,
            title:
              "Baby Pacifier Set Silicone Nipples Chain Combination Baby Sleeping Pacifier With Storage Box",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 42237584867526,
            variant_inventory_management: "shopify",
            variant_title: "blue",
            vendor: "Deepsea Life Sciences",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14723983442227,
            admin_graphql_api_id: "gid://shopify/LineItem/14723983442227",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Deepsea Cooling Patch Fast fever relief 6 Patches long lasting",
            price: "359.00",
            price_set: {
              shop_money: {
                amount: "359.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "359.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 6909421322438,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "6_Patches",
            taxable: false,
            title:
              "Deepsea Cooling Patch Fast fever relief 6 Patches long lasting",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 40774586990790,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Deepsea Life Sciences",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14723983474995,
            admin_graphql_api_id: "gid://shopify/LineItem/14723983474995",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 160,
            name: "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            price: "1299.00",
            price_set: {
              shop_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7060161298630,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "RH-188",
            taxable: false,
            title:
              "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41124964368582,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "hammad",
          address1:
            "syed jamil badshah, fertilizer dealer new grain market peshawar",
          phone: "3339155087",
          city: "peshawar",
          zip: "25000",
          province: null,
          country: "Pakistan",
          last_name: "alam",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "hammad alam",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4669334257971,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5756895363379,
        admin_graphql_api_id: "gid://shopify/Order/5756895363379",
        app_id: 580111,
        browser_ip: "154.192.135.40",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-0819a404a591788b73a044db9d8a62cc",
        checkout_id: 37560076796211,
        checkout_token: "970bd6b949827a973415cf8baaea4a6d",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "154.192.135.40",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "XRAK8FUFX",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-08T18:51:30+05:00",
        currency: "PKR",
        current_subtotal_price: "1599.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1798.00",
        current_total_price_set: {
          shop_money: {
            amount: "1798.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1798.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5861",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "1",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 4861,
        order_number: 5861,
        order_status_url:
          "https://nakson.pk/60025733318/orders/d7858ef2c2e84851a5a1a59e5b4d0c42/authenticate?key=e0b40a7f5a848bfba5ee66e0d9023217",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923277917586",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T18:51:29+05:00",
        reference: "0be437e5ba7bdf38cc7734e0ca5a5eb2",
        referring_site: "https://www.google.com/",
        source_identifier: "0be437e5ba7bdf38cc7734e0ca5a5eb2",
        source_name: "web",
        source_url: null,
        subtotal_price: "1599.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "d7858ef2c2e84851a5a1a59e5b4d0c42",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1599.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1599.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1798.00",
        total_price: "1798.00",
        total_price_set: {
          shop_money: {
            amount: "1798.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1798.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "199.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "199.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 600,
        updated_at: "2024-03-08T19:00:41+05:00",
        user_id: null,
        billing_address: {
          first_name: "M.ijaz",
          address1: "P-309 kamboh street Noor pur Faisalabad.",
          phone: "03277917586",
          city: "Faisalabade",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Ahmad",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "M.ijaz Ahmad",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7585529004339,
          email: null,
          created_at: "2024-01-01T16:21:24+05:00",
          updated_at: "2024-03-08T18:51:30+05:00",
          first_name: "M.ijaz",
          last_name: "Ahmed",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923277917586",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7585529004339",
          default_address: {
            id: 9833859711283,
            customer_id: 7585529004339,
            first_name: "M.ijaz",
            last_name: "Ahmad",
            company: null,
            address1: "P-309 kamboh street Noor pur Faisalabad.",
            address2: null,
            city: "Faisalabade",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03277917586",
            name: "M.ijaz Ahmad",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14720923795763,
            admin_graphql_api_id: "gid://shopify/LineItem/14720923795763",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 600,
            name: "Nakson Nursing Pad Monthly Special Offer 60 Pads Disposible",
            price: "1599.00",
            price_set: {
              shop_money: {
                amount: "1599.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "1599.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7396513448134,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Monthly_package60",
            taxable: true,
            title:
              "Nakson Nursing Pad Monthly Special Offer 60 Pads Disposible",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41984343965894,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "M.ijaz",
          address1: "P-309 kamboh street Noor pur Faisalabad.",
          phone: "03277917586",
          city: "Faisalabade",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Ahmad",
          address2: null,
          company: null,
          latitude: 31.4568694,
          longitude: 73.0958642,
          name: "M.ijaz Ahmad",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4667913371955,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 DAYS",
            discounted_price: "199.00",
            discounted_price_set: {
              shop_money: {
                amount: "199.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "199.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "199.00",
            price_set: {
              shop_money: {
                amount: "199.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "199.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 DAYS",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5756782608691,
        admin_graphql_api_id: "gid://shopify/Order/5756782608691",
        app_id: 580111,
        browser_ip: "182.181.150.145",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-cc5e283d2d22d75187c4adf8a1da2460",
        checkout_id: 37559685513523,
        checkout_token: "0d7133173baf911097f26c73460a13c3",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "182.181.150.145",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "5EDAME5QR",
        confirmed: true,
        contact_email: "zunikhilji05@gmail.com",
        created_at: "2024-03-08T16:12:13+05:00",
        currency: "PKR",
        current_subtotal_price: "439.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "614.00",
        current_total_price_set: {
          shop_money: {
            amount: "614.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "614.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "zunikhilji05@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5860",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "2",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 4860,
        order_number: 5860,
        order_status_url:
          "https://nakson.pk/60025733318/orders/29fb42f8fddc02aa164cf0a51b5c8b89/authenticate?key=a947e57740ec6070acda6dbddfc696e9",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T16:12:12+05:00",
        reference: "fc0362ea654d8a2b7c41276057fb6e2f",
        referring_site: "https://www.google.com/",
        source_identifier: "fc0362ea654d8a2b7c41276057fb6e2f",
        source_name: "web",
        source_url: null,
        subtotal_price: "439.00",
        subtotal_price_set: {
          shop_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "29fb42f8fddc02aa164cf0a51b5c8b89",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "439.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "439.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "614.00",
        total_price: "614.00",
        total_price_set: {
          shop_money: {
            amount: "614.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "614.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 70,
        updated_at: "2024-03-08T16:46:33+05:00",
        user_id: null,
        billing_address: {
          first_name: "Zunaira",
          address1: "138 A, Ghulam Hussain Park Golbagh, Shadbagh, Lahore",
          phone: "03224366877",
          city: "Lahore",
          zip: "75500",
          province: null,
          country: "Pakistan",
          last_name: "Khaliq",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Zunaira Khaliq",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7760776855859,
          email: "zunikhilji05@gmail.com",
          created_at: "2024-03-08T16:12:12+05:00",
          updated_at: "2024-03-08T16:12:14+05:00",
          first_name: "Zunaira",
          last_name: "Khaliq",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7760776855859",
          default_address: {
            id: 9833698066739,
            customer_id: 7760776855859,
            first_name: "Zunaira",
            last_name: "Khaliq",
            company: null,
            address1: "138 A, Ghulam Hussain Park Golbagh, Shadbagh, Lahore",
            address2: null,
            city: "Lahore",
            province: null,
            country: "Pakistan",
            zip: "75500",
            phone: "03224366877",
            name: "Zunaira Khaliq",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14720714309939,
            admin_graphql_api_id: "gid://shopify/LineItem/14720714309939",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Deepsea Menstrual Cup / Period Cup – Large & Small - Premium Quality, BPA Free 100% Medical Grade Silicone - Large / Pink",
            price: "439.00",
            price_set: {
              shop_money: {
                amount: "439.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "439.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7042616524998,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Deepsea_Pink_Large",
            taxable: false,
            title:
              "Deepsea Menstrual Cup / Period Cup – Large & Small - Premium Quality, BPA Free 100% Medical Grade Silicone",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41088595853510,
            variant_inventory_management: "shopify",
            variant_title: "Large / Pink",
            vendor: "Deepsea Life Sciences",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Zunaira",
          address1: "138 A, Ghulam Hussain Park Golbagh, Shadbagh, Lahore",
          phone: "03224366877",
          city: "Lahore",
          zip: "75500",
          province: null,
          country: "Pakistan",
          last_name: "Khaliq",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Zunaira Khaliq",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4667822014771,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5756703473971,
        admin_graphql_api_id: "gid://shopify/Order/5756703473971",
        app_id: 580111,
        browser_ip: "103.191.118.133",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-d596394577e8b4f16907f991e7158328",
        checkout_id: 37559460233523,
        checkout_token: "d7c1ad4bdcd5324b5d353d58aa31b13b",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "103.191.118.133",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "EFXJQZV9R",
        confirmed: true,
        contact_email: null,
        created_at: "2024-03-08T14:19:45+05:00",
        currency: "PKR",
        current_subtotal_price: "220.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "395.00",
        current_total_price_set: {
          shop_money: {
            amount: "395.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "395.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site:
          "/products/deepsea-mibabe-silicone-bath-exfoliator-brush-body-shower-brush-with-soap-shampoo-and-gel-dispenser-body-brush-body-scrubber-brush-bath-and-body-shower-brush-for-baby-men-and-women-loofah-brush",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5859",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "3",
          },
          {
            name: "hxs_robo_call",
            value: "BUSY",
          },
        ],
        number: 4859,
        order_number: 5859,
        order_status_url:
          "https://nakson.pk/60025733318/orders/e1d37cebdb053f00c83a223298a4fa08/authenticate?key=57b1b04cba64c8ec92e4cae81fc064cd",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: "+923235771600",
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T14:19:44+05:00",
        reference: "9678a168321f671aac403de389afc07b",
        referring_site: "https://www.google.com/",
        source_identifier: "9678a168321f671aac403de389afc07b",
        source_name: "web",
        source_url: null,
        subtotal_price: "220.00",
        subtotal_price_set: {
          shop_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "e1d37cebdb053f00c83a223298a4fa08",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "220.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "220.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "395.00",
        total_price: "395.00",
        total_price_set: {
          shop_money: {
            amount: "395.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "395.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 100,
        updated_at: "2024-03-08T17:11:33+05:00",
        user_id: null,
        billing_address: {
          first_name: "Kamran",
          address1: "District Gujarat city Sarai alamgir area gurrah jattan",
          phone: "03235771600",
          city: "Sarai alamgir",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Shahzad",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Kamran Shahzad",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7760593551667,
          email: null,
          created_at: "2024-03-08T14:19:44+05:00",
          updated_at: "2024-03-09T07:54:00+05:00",
          first_name: "Kamran",
          last_name: "Shahzad",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: "+923235771600",
          email_marketing_consent: null,
          sms_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
            consent_collected_from: "SHOPIFY",
          },
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: null,
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7760593551667",
          default_address: {
            id: 9833596715315,
            customer_id: 7760593551667,
            first_name: "Kamran",
            last_name: "Shahzad",
            company: null,
            address1: "District Gujarat city Sarai alamgir area gurrah jattan",
            address2: null,
            city: "Sarai alamgir",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03235771600",
            name: "Kamran Shahzad",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14720584220979,
            admin_graphql_api_id: "gid://shopify/LineItem/14720584220979",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 100,
            name: "Mibabe Silicone Bath Exfoliator Brush Body Shower Brush With Soap, Shampoo And Gel Dispenser Body Brush Body Scrubber Brush Bath Body Shower - green",
            price: "220.00",
            price_set: {
              shop_money: {
                amount: "220.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "220.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7614725980358,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "Bath_Brush_Green",
            taxable: true,
            title:
              "Mibabe Silicone Bath Exfoliator Brush Body Shower Brush With Soap, Shampoo And Gel Dispenser Body Brush Body Scrubber Brush Bath Body Shower",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 42243502604486,
            variant_inventory_management: "shopify",
            variant_title: "green",
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Kamran",
          address1: "District Gujarat city Sarai alamgir area gurrah jattan",
          phone: "03235771600",
          city: "Sarai alamgir",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Shahzad",
          address2: null,
          company: null,
          latitude: 32.8365772,
          longitude: 73.6631865,
          name: "Kamran Shahzad",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4667755495731,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5756249211187,
        admin_graphql_api_id: "gid://shopify/Order/5756249211187",
        app_id: 580111,
        browser_ip: "154.81.235.179",
        buyer_accepts_marketing: false,
        cancel_reason: null,
        cancelled_at: null,
        cart_token:
          "Z2NwLWV1cm9wZS13ZXN0MTowMUhSRERCNlAzUFFYTkpaNEtTME0xUlc5Ng",
        checkout_id: 37557996781875,
        checkout_token: "5e9b20bdc9bcde45f3097db5d0f06b32",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "154.81.235.179",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1",
        },
        closed_at: null,
        confirmation_number: "DIH5T3KKI",
        confirmed: true,
        contact_email: "tabya.58@gmail.com",
        created_at: "2024-03-08T02:34:32+05:00",
        currency: "PKR",
        current_subtotal_price: "1749.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1924.00",
        current_total_price_set: {
          shop_money: {
            amount: "1924.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1924.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "tabya.58@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/products/manual-breast-pump",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5858",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "2",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 4858,
        order_number: 5858,
        order_status_url:
          "https://nakson.pk/60025733318/orders/610e8b2c98fa2ebc9f03e29273608d9d/authenticate?key=ab1d575f0edb0f09c2b1d2d63fbe7331",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-08T02:34:29+05:00",
        reference: "0827837a7c209a400e5a5bc64fdb94e8",
        referring_site: "https://www.google.com/",
        source_identifier: "0827837a7c209a400e5a5bc64fdb94e8",
        source_name: "web",
        source_url: null,
        subtotal_price: "1749.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "610e8b2c98fa2ebc9f03e29273608d9d",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1749.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1749.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1924.00",
        total_price: "1924.00",
        total_price_set: {
          shop_money: {
            amount: "1924.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1924.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 230,
        updated_at: "2024-03-08T11:08:41+05:00",
        user_id: null,
        billing_address: {
          first_name: "Tabya",
          address1: "681-E2 Wapda Town Lahore",
          phone: "03233591659",
          city: "Lahore",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Suhail",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Tabya Suhail",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7759863644467,
          email: "tabya.58@gmail.com",
          created_at: "2024-03-08T02:34:29+05:00",
          updated_at: "2024-03-08T02:34:32+05:00",
          first_name: "Tabya",
          last_name: "Suhail",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "not_subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: null,
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: false,
          accepts_marketing_updated_at: null,
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7759863644467",
          default_address: {
            id: 9832896233779,
            customer_id: 7759863644467,
            first_name: "Tabya",
            last_name: "Suhail",
            company: null,
            address1: "681-E2 Wapda Town Lahore",
            address2: null,
            city: "Lahore",
            province: null,
            country: "Pakistan",
            zip: null,
            phone: "03233591659",
            name: "Tabya Suhail",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14719734579507,
            admin_graphql_api_id: "gid://shopify/LineItem/14719734579507",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 160,
            name: "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            price: "1299.00",
            price_set: {
              shop_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7060161298630,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "RH-188",
            taxable: false,
            title:
              "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41124964368582,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
          {
            id: 14719734612275,
            admin_graphql_api_id: "gid://shopify/LineItem/14719734612275",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 70,
            name: "Nipple Cope - Protector Ultra Thin & Soft Semi cricle Shape Deepsea Life Sciences",
            price: "450.00",
            price_set: {
              shop_money: {
                amount: "450.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "450.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7278146781382,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "SEMI-CRICLE",
            taxable: false,
            title:
              "Nipple Cope - Protector Ultra Thin & Soft Semi cricle Shape Deepsea Life Sciences",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41855891472582,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Tabya",
          address1: "681-E2 Wapda Town Lahore",
          phone: "03233591659",
          city: "Lahore",
          zip: null,
          province: null,
          country: "Pakistan",
          last_name: "Suhail",
          address2: null,
          company: null,
          latitude: 31.4311985,
          longitude: 74.26435819999999,
          name: "Tabya Suhail",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4667418673459,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
      {
        id: 5755809628467,
        admin_graphql_api_id: "gid://shopify/Order/5755809628467",
        app_id: 580111,
        browser_ip: "103.137.24.219",
        buyer_accepts_marketing: true,
        cancel_reason: null,
        cancelled_at: null,
        cart_token: "c1-a87aa0871cac7c8cbfe4dbf2156e3b76",
        checkout_id: 37556766474547,
        checkout_token: "b369abaf3b52850b0c5e5b1961f62ec3",
        client_details: {
          accept_language: "en-PK",
          browser_height: null,
          browser_ip: "103.137.24.219",
          browser_width: null,
          session_hash: null,
          user_agent:
            "Mozilla/5.0 (Linux; Android 13; RMX3760 Build/TP1A.220624.014) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.180 Mobile Safari/537.36",
        },
        closed_at: null,
        confirmation_number: "0JRZGIR8M",
        confirmed: true,
        contact_email: "nasimakhan26june@gmail.com",
        created_at: "2024-03-07T18:11:39+05:00",
        currency: "PKR",
        current_subtotal_price: "1299.00",
        current_subtotal_price_set: {
          shop_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
        },
        current_total_additional_fees_set: null,
        current_total_discounts: "0.00",
        current_total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        current_total_duties_set: null,
        current_total_price: "1474.00",
        current_total_price_set: {
          shop_money: {
            amount: "1474.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1474.00",
            currency_code: "PKR",
          },
        },
        current_total_tax: "0.00",
        current_total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        customer_locale: "en-PK",
        device_id: null,
        discount_codes: [],
        email: "nasimakhan26june@gmail.com",
        estimated_taxes: false,
        financial_status: "pending",
        fulfillment_status: null,
        landing_site: "/products/manual-breast-pump",
        landing_site_ref: null,
        location_id: null,
        merchant_of_record_app_id: null,
        name: "NAK5856",
        note: null,
        note_attributes: [
          {
            name: "hxs_robo_try",
            value: "3",
          },
          {
            name: "hxs_robo_call",
            value: "ANSWER",
          },
          {
            name: "hxs_robo_status",
            value: "Confirmed",
          },
        ],
        number: 4856,
        order_number: 5856,
        order_status_url:
          "https://nakson.pk/60025733318/orders/7ab591225939b63ad576e7e9fbbcdbe1/authenticate?key=6dabd9a061b78dcaaa540b46ae337904",
        original_total_additional_fees_set: null,
        original_total_duties_set: null,
        payment_gateway_names: ["Cash on Delivery (COD)"],
        phone: null,
        po_number: null,
        presentment_currency: "PKR",
        processed_at: "2024-03-07T18:11:36+05:00",
        reference: "bbc0ddddf4a402e652eec11579442d45",
        referring_site: "",
        source_identifier: "bbc0ddddf4a402e652eec11579442d45",
        source_name: "web",
        source_url: null,
        subtotal_price: "1299.00",
        subtotal_price_set: {
          shop_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
        },
        tags: "Call Confirmed",
        tax_exempt: false,
        tax_lines: [],
        taxes_included: true,
        test: false,
        token: "7ab591225939b63ad576e7e9fbbcdbe1",
        total_discounts: "0.00",
        total_discounts_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_line_items_price: "1299.00",
        total_line_items_price_set: {
          shop_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1299.00",
            currency_code: "PKR",
          },
        },
        total_outstanding: "1474.00",
        total_price: "1474.00",
        total_price_set: {
          shop_money: {
            amount: "1474.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "1474.00",
            currency_code: "PKR",
          },
        },
        total_shipping_price_set: {
          shop_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "175.00",
            currency_code: "PKR",
          },
        },
        total_tax: "0.00",
        total_tax_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "PKR",
          },
        },
        total_tip_received: "0.00",
        total_weight: 160,
        updated_at: "2024-03-07T19:17:16+05:00",
        user_id: null,
        billing_address: {
          first_name: "Nasima",
          address1: "Noor colony Jutyal Gilgit",
          phone: "03409861699",
          city: "Gilgit",
          zip: "15100",
          province: null,
          country: "Pakistan",
          last_name: "Gul",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Nasima Gul",
          country_code: "PK",
          province_code: null,
        },
        customer: {
          id: 7759246852403,
          email: "nasimakhan26june@gmail.com",
          created_at: "2024-03-07T18:11:37+05:00",
          updated_at: "2024-03-07T18:11:39+05:00",
          first_name: "Nasima",
          last_name: "Gul",
          state: "disabled",
          note: null,
          verified_email: true,
          multipass_identifier: null,
          tax_exempt: false,
          phone: null,
          email_marketing_consent: {
            state: "subscribed",
            opt_in_level: "single_opt_in",
            consent_updated_at: "2024-03-07T18:11:39+05:00",
          },
          sms_marketing_consent: null,
          tags: "",
          currency: "PKR",
          accepts_marketing: true,
          accepts_marketing_updated_at: "2024-03-07T18:11:39+05:00",
          marketing_opt_in_level: "single_opt_in",
          tax_exemptions: [],
          admin_graphql_api_id: "gid://shopify/Customer/7759246852403",
          default_address: {
            id: 9832306835763,
            customer_id: 7759246852403,
            first_name: "Nasima",
            last_name: "Gul",
            company: null,
            address1: "Noor colony Jutyal Gilgit",
            address2: null,
            city: "Gilgit",
            province: null,
            country: "Pakistan",
            zip: "15100",
            phone: "03409861699",
            name: "Nasima Gul",
            province_code: null,
            country_code: "PK",
            country_name: "Pakistan",
            default: true,
          },
        },
        discount_applications: [],
        fulfillments: [],
        line_items: [
          {
            id: 14718848696627,
            admin_graphql_api_id: "gid://shopify/LineItem/14718848696627",
            attributed_staffs: [],
            fulfillable_quantity: 1,
            fulfillment_service: "manual",
            fulfillment_status: null,
            gift_card: false,
            grams: 160,
            name: "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            price: "1299.00",
            price_set: {
              shop_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "1299.00",
                currency_code: "PKR",
              },
            },
            product_exists: true,
            product_id: 7060161298630,
            properties: [],
            quantity: 1,
            requires_shipping: true,
            sku: "RH-188",
            taxable: false,
            title:
              "Nakson's Ergonomic Manual Breast Pump - Safe, Portable, and Eco-Friendly",
            total_discount: "0.00",
            total_discount_set: {
              shop_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "0.00",
                currency_code: "PKR",
              },
            },
            variant_id: 41124964368582,
            variant_inventory_management: "shopify",
            variant_title: null,
            vendor: "Nakson",
            tax_lines: [],
            duties: [],
            discount_allocations: [],
          },
        ],
        payment_terms: null,
        refunds: [],
        shipping_address: {
          first_name: "Nasima",
          address1: "Noor colony Jutyal Gilgit",
          phone: "03409861699",
          city: "Gilgit",
          zip: "15100",
          province: null,
          country: "Pakistan",
          last_name: "Gul",
          address2: null,
          company: null,
          latitude: null,
          longitude: null,
          name: "Nasima Gul",
          country_code: "PK",
          province_code: null,
        },
        shipping_lines: [
          {
            id: 4667110097203,
            carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
            code: "SHIPPING 1-4 days",
            discounted_price: "175.00",
            discounted_price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            phone: null,
            price: "175.00",
            price_set: {
              shop_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
              presentment_money: {
                amount: "175.00",
                currency_code: "PKR",
              },
            },
            requested_fulfillment_service_id: null,
            source: "shopify",
            title: "SHIPPING 1-4 days",
            tax_lines: [],
            discount_allocations: [],
          },
        ],
        store_info: {
          platform: "shopify",
          domain: "nakson.myshopify.com",
          shopLogo:
            "https://nakson.pk/cdn/shop/files/nakson_12.png?v=1671209093&width=300",
          name: "Nakson",
          courierID: 28,
        },
      },
    ]
  );
  return res
    .status(200)
    .send(orders.filter((order) => order.tags.includes("Call Confirmed")));
  resOrders.forEach((order) => {
    orders.push({
      ...order,
      store_info: {
        platform: "shopify",
        domain: store.store_info.shop,
        shopLogo: store.image_url,
        name: store.name,
        courierID: store.store_info?.courier_id?.id || null,
      },
    });
  });

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
            courierID: store.store_info?.courier_id?.id || null,
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
  await createOrder();
  res.status(200).json({ message: "orders created" });
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
  // orders = [   {id: 1, cnNo: "123", courierService: "Leopards",  }, {id: 2, cnNo: "456", courierService: "Leopards" }   ]

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



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
