const axios = require("axios");
require("dotenv").config();

async function cancelOrder(consignmentNumber, userName, password) {
  // Use Modern async/await syntax
  try {
    const response = await axios.put(
      "https://api.tcscourier.com/production/v1/cod/cancel-order",
      {
        consignmentNumber,
        userName,
        password,
      },
      {
        headers: {
          "X-IBM-Client-Id": process.env.TCS_CLIENTID,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  cancelOrder,
};
