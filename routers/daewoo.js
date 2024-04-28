const router = require("express").Router();
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const prisma = new PrismaClient();
require("dotenv").config();

router.post("/validate-api-credentials", async (req, res) => {
  const { apiKey, apiUser, apiPassword, city } = req.body;

  // If account doesn't exists, add the account
  // Books a order and then cancels it

  const url = `https://codapi.daewoo.net.pk/api/booking/quickBook?apiKey=${apiKey}&apiUser=${apiUser}&apiPassword=${apiPassword}`;

  const body = {
    order_no: "101",
    source_terminal_id: `${city}`, //only hyderabad.
    destination_terminal_id: "29051", // Attock
    receiver_name: "Arif",
    receiver_cnic: "0000000000",
    receiver_mobile: "03153036972",
    receiver_address: "Multan,Pakistan",
    receiver_city: "Multan",
    receiver_email: "muhammad.arif@d.pk",
    remarks: "",
    qty: "1",
    weight: "1.2",
    barcode: "0",
    cod_amount: "2000",
    source_location_point: "0.0",
    destination_location_point: "0.0",
    source_location_address: "Source address",
    destination_location_address: "destination address",
    item_description: "Item Description",
  };
  let resp;
  try {
    resp = await axios.post(url, body);
  } catch (e) {
    console.log("error: ", e);
  }

  const result = await resp.data;
  console.log("result: ", result);
  if (result.Success === false) {
    return res.status(400).json({ success: false, message: result.Response });
  }
  const cn = result.TrackNo;
  // Cancel the Packet

  const cancelUrl = `https://codapi.daewoo.net.pk/api/booking/quickCancel?apiKey=${apiKey}&apiUser=${apiUser}&apiPassword=${apiPassword}&trackingNo=${cn}`;

  const cancelResp = await axios.post(cancelUrl);
  const cancelResults = await cancelResp.data;

  console.log("cn", cn);
  console.log("cancelResults: ", cancelResults);

  if (cancelResults.Success === false) {
    return res.status(400).json({
      success: false,
      message: `Couldn't add account, please Cancel the Order ${cn}`,
    });
  }

  // Check if account already exists
  let couriers = await prisma.courier.findMany({
    where: {
      name: "Daewoo",
    },
  });

  return res.status(200).json({ success: true, message: "Account Added" });
});

// Add account
router.post("/add-account", async (req, res) => {
  const { apiKey, apiUser, apiPassword, city, email } = req.body;

  let couriers = await prisma.courier.findMany({
    where: {
      name: "Daewoo",
    },
  });
  couriers = couriers.filter((courier) => {
    return (
      courier.data.apiKey === apiKey ||
      courier.data.apiUser === apiUser ||
      courier.data.apiPassword === apiPassword
    );
  });

  if (couriers.length > 0) {
    return res.status(400).json({ message: "Account already exists" });
  }

  //   Add account to the database
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const user_id = user.id;
  const courier = await prisma.courier.create({
    data: {
      user_id: user_id,
      name: "Daewoo",
      data: { apiKey, apiUser, apiPassword, city },
      shippers: "null",
    },
  });
  return res.status(200).json({ message: "Account Added" });
});

module.exports = router;