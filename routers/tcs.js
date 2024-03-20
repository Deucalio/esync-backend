const router = require("express").Router();
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const prisma = new PrismaClient();
const TCS_CITIES = require("../public/TCS_CITIES");
const { cancelOrder } = require("../utils/tcsActions");
require("dotenv").config();

router.post("/booked-orders", async (req, res) => {
  await prisma.temporaryData.create({
    data: {
      ...req.body,
    },
  });
  console.log("Got it: ", req.body);

  res.status(200).json({ message: "Got it", ...req.body });
});

router.post("/book", async (req, res) => {
  const ordersTrackingNumbers = [];

  // Start the timer
  const start = new Date().getTime();
  // // End the timer

  const { email, orders: orders } = req.body;
  if (!email || !orders) {
    return res.status(400).json({ errorMessage: "Incorrect field" });
  }
  console.log("Orders: ", orders.length);

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { stores: true, Courier: true },
  });

  const userCourier = user.Courier.filter((acc) => acc.name === "TCS");

  const userStores = user.stores;
  const shopifyStores = userStores.filter(
    (store) => store.store_info.platform === "shopify"
  );

  let booked_orders_details = [];

  let booked = {
    // Store Orders and their courierID
    // store_1: {orders: [], courierID: 1, shipperInfo: {}, shopLogo: "url", accessToken, domain   },
    // store_2: {orders: [], courierID: 2, shipperInfo: {}, shopLogo: "url"  accessToken, domain   },
  };
  for (const store of shopifyStores) {
    const courierInfo = userCourier.find(
      (courier) =>
        courier.shippers.find((shipper) => shipper.shop === store.name) || null
    );
    if (!courierInfo) {
      console.log(
        "No courier found, so orders can't be booked for store: ",
        store.name
      );
      continue;
    }
    booked[store.name] = {
      orders: [],
      courierInfo: courierInfo,
      shipperInfo: courierInfo.shippers.find(
        (shipper) => shipper.shop === store.name
      ),
      shopLogo: store.image_url,
      accessToken: store.store_info.accessToken,
      domain: store.store_info.shop,
    };
    booked[store.name].originCityCode = TCS_CITIES.find(
      (city) =>
        city.cityName ===
        booked[store.name].shipperInfo.response.costCenterCityName
    ).cityCode;
  }

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (booked[order.store_info.name] === undefined) {
      // console.log("Can't book these orders: ", orders[i].name);
      continue;
    }
    let { userName, password } = booked[order.store_info.name].courierInfo.data;
    let { specialInstructions: remarks } =
      booked[order.store_info.name].shipperInfo;

    let {
      costCenterName,
      costCenterCode,
      costCenterCityName: originCityName,
      pickupAddress,
      contactNumber,
    } = booked[order.store_info.name].shipperInfo.response;
    let services = "";
    if (order.service_type === "Express") {
      services = "O";
    } else if (order.service_type === "Economy-Express") {
      services = "D";
    } else if (order.service_type === "Overland") {
      services = "OLE";
    }

    let productDetails = "";
    // Append the product titles to productDetails
    for (const item of order.line_items) {
      productDetails += item.title + ", ";
    }

    let consigneeName = `${order.shipping_address.first_name} ${order.shipping_address.last_name}`;
    let consigneeAddress = `${order.shipping_address.address1} ${
      order.shipping_address.address2 ? order.shipping_address.address2 : ""
    }`;
    let consigneeMobNo = `${order.shipping_address.phone}`;

    // To send to TCS API for booking orders
    let bookedOrder = {
      userName,
      password,
      costCenterCode,
      consigneeName,
      consigneeAddress,
      consigneeMobNo,
      consigneeEmail: `${order.email || "Fake@nakson.services"}`,
      originCityName,
      destinationCityName: `${order.correct_city.cityName}`,
      weight: 0.5,
      pieces: 1,
      codAmount: `${order.total_outstanding}`,
      customerReferenceNo: `${order.name}`,
      services,
      productDetails,
      fragile: "YES",
      remarks,
      insuranceValue: 1,
    };
    booked[order.store_info.name]["orders"].push(bookedOrder);

    // For Slip
    booked_orders_details.push({
      shop_name: order.store_info.name,
      shop_logo: order.store_info.shopLogo,
      service_type: order.service_type.toUpperCase(),
      origin_city: {
        name: originCityName,
        city_code: booked[order.store_info.name].originCityCode,
      },
      courier: "TCS",
      consignee_info: {
        name: consigneeName,
        address: consigneeAddress.replace(/[\r\n]/gm, ""),
        phone: consigneeMobNo,
      },
      shipper_info: {
        name: costCenterName,
        address: pickupAddress,
        phone: contactNumber,
      },
      destination: {
        name: order.correct_city.cityName,
        city_code: order.correct_city.cityCode,
      },
      shipping_instructions: remarks,
      date: new Date().toLocaleString().split(",")[0],
      pieces: 1,
      weight: 0.5,
      amount: `${Number(order.total_outstanding)}`,
      track_number: "Not Booked Yet",
      booked_packet_order_name: order.name,
      collectType:
        Number(order.total_outstanding) === 0 ? "Non-COD Parcel" : "COD Parcel",
    });
  }
  // Book the Orders using TCS API
  let counter = 0;
  for (const store in booked) {
    const storeOrders = booked[store].orders;

    for (let i = 0; i < storeOrders.length; i++) {
      const order = storeOrders[i];
      let response = "";
      try {
        // Send the request to TCS API
        response = await axios.post(
          "https://api.tcscourier.com/production/v1/cod/create-order",
          order,
          {
            headers: {
              "X-IBM-Client-Id": process.env.TCS_CLIENTID,
            },
          }
        );
        if (response.data.returnStatus.status === "FAIL") {
          console.log(
            `Could not Book Order: ${order.customerReferenceNo} `,
            response.data
          );
          continue;
        }
        let result = response.data.bookingReply.result;
        let cn = result.slice(result.indexOf(":") + 2);
        ordersTrackingNumbers.push({
          consignmentNumber: cn,
          userName: booked[store].courierInfo.data.userName,
          password: booked[store].courierInfo.data.password,
        });

        console.log(
          "CN: ",
          cn,
          "Order Name: ",
          booked_orders_details[counter].booked_packet_order_name
        );
        booked_orders_details[counter].track_number = cn;
        counter += 1;
      } catch (e) {
        console.log("Could not Book Order: ", e);
      }
    }
  }

  const end = new Date().getTime();
  const timeTaken = (end - start) / 1000;

  res.status(200).json({
    message: "Orders are being booked",
    timeTaken: timeTaken,
    booked,
    booked_orders: booked_orders_details,
    ordersTrackingNumbers: ordersTrackingNumbers,
  });
});

router.post("/cancel-booked-orders", async (req, res) => {
  const { ordersTrackingNumbers } = req.body;
  const cancelledOrdersTrackings = [];

  for (const trackingNumber of ordersTrackingNumbers) {
    try {
      let response = await cancelOrder(
        trackingNumber.consignmentNumber,
        trackingNumber.userName,
        trackingNumber.password
      );
      if (response.returnStatus.status === "FAIL") {
        if (response.returnStatus.message === "Failure: No Record Founds") {
          // This means the order has already been cancelled
          continue;
        }
      }
      cancelledOrdersTrackings.push(trackingNumber.consignmentNumber);
    } catch (e) {
      console.log("Could not Cancel Order: ", e);
    }
    // try {
    //   let response = await axios.put(
    //     "https://api.tcscourier.com/production/v1/cod/cancel-order",
    //     {
    //       userName: ordersTrackingNumbers.userName,
    //       password: ordersTrackingNumbers.password,
    //       consignmentNumber: trackingNumber.consignmentNumber,
    //     },
    //     {
    //       headers: {
    //         "X-IBM-Client-Id": process.env.TCS_CLIENTID,
    //       },
    //     }
    //   );
    //   if (response.data.returnStatus.status === "FAIL") {
    //     console.log(
    //       `Could not Cancel Order: ${trackingNumber.consignmentNumber} `,
    //       response.data
    //     );
    //     continue;
    //   }
    //   cancelledOrdersTrackings.push(trackingNumber.consignmentNumber);
    //   console.log("Response: ", response.data.cancelShipmentReply.result);
    // } catch (e) {
    //   console.log("Could not Cancel Order: ", e);
    // }
  }
  res.status(200).json({
    cancelled: cancelledOrdersTrackings,
    message: `Cancelled ${cancelledOrdersTrackings.length} Orders`,
  });
});

router.post("/add-account", async (req, res) => {
  const { email, userName, password, accountNumber } = req.body;

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
      name: "TCS",
      data: { userName, password, accountNumber },
      shippers: "null",
    },
  });

  res
    .status(200)
    .send({ message: "Account added successfully", courier: courier });
});

router.post("/get-accounts", async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Courier: true,
    },
  });
  res.status(200).json({ accounts: user.Courier });
});

router.post("/add-cost-center", async (req, res) => {
  const {
    userEmail,
    // Shipper Info
    name,
    email,
    phone,
    city,
    address,
    returnAddress,
    specialInstructions,
    shopID,
    courierServices,
    courierAccount,
  } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
      Courier: true,
      stores: true,
    },
  });
  const user_id = user.id;
  const shop = user.stores.find((shop) => shop.id === Number(shopID)).name;
  const store = user.stores.find((shop) => shop.id === Number(shopID));
  const costCenterCode = "0" + String(Math.floor(Math.random() * 100));

  const userCouriers = user.Courier.filter((courier) => courier.name === "TCS");
  console.log("userCourier", userCouriers);

  // You can't assign a shipper to a shop that already has a shipper
  for (const shipper of userCouriers) {
    if (shipper.shippers !== "null") {
      const alreadyAssignedShop = shipper.shippers.find(
        (ship) => ship.shop === shop
      );
      if (alreadyAssignedShop) {
        return res
          .status(409)
          .json({ message: "Shop already has a Cost Center" });
      }
    }
  }
  const shipper = userCouriers.find(
    (courier) => courier.id === Number(courierAccount)
  );
  console.log("shipper: ", shipper);
  const {
    userName,
    password,
    accountNumber: accountNo,
  } = userCouriers.find(
    (courier) => courier.id === Number(courierAccount)
  ).data;

  const costCenterParams = {
    userName: userName,
    password: password,
    costCenterCityName: city,
    costCenterCode: costCenterCode,
    costCenterName: shop + " Cost Center",
    pickupAddress: address,
    returnAddress: returnAddress,
    isLabelPrint: "Yes",
    accountNo: accountNo,
    contactNumber: phone,
  };

  console.log("costCenterParams: ", costCenterParams);
  let tcsRes = "";
  try {
    tcsRes = await axios.post(
      "https://api.tcscourier.com/production/v1/cod/createCostCenterCode",
      costCenterParams,
      {
        headers: {
          "X-IBM-Client-Id": process.env.TCS_CLIENTID,
        },
      }
    );
    console.log("TCS Response: ", tcsRes.data);
  } catch (e) {
    console.log("ERROR: ", e);
    return res.status(400).json({ message: "Could not send Request" });
  }
  if (tcsRes.data.returnStatus.status === "SUCCESS") {
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
              shop,
              response: costCenterParams,
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
              shop,
              response: costCenterParams,
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
          courier_id: {
            ...store.store_info.courier_id,
            TCS: Number(courierAccount),
          },
        },
      },
    });
    res.status(200).json({ message: "Cost Center added successfully" });
  } else {
    res.status(400).json({ message: "Cost Center Could not be Added" });
  }
});

async function createOrders() {
  const cn = [];
  const headers = {
    "X-IBM-Client-Id": process.env.TCS_CLIENTID,
  };
  const start = new Date();
  for (let i = 0; i < 5; i++) {
    let data = {
      userName: "nakson",
      password: "Subhan06@",
      costCenterCode: "01",
      consigneeName: `sad ${i + 1}`,
      consigneeAddress: "sad",
      consigneeMobNo: "sad",
      consigneeEmail: "sad@gmail.com",
      originCityName: "HYDERABAD",
      destinationCityName: "HYDERABAD",
      weight: 1,
      pieces: 1,
      codAmount: "133",
      // "customerReferenceNo": "13",
      services: "O", //Express
      productDetails: "sd",
      fragile: "YES",
      remarks: "sad",
      insuranceValue: 1,
    };

    // Send request to TCS API to book the order
    try {
      let res = await axios.post(
        "https://api.tcscourier.com/production/v1/cod/create-order",
        data,
        { headers: headers }
      );
      let result = res.data.bookingReply.result;
      cn.push(result.slice(result.indexOf(":") + 2));
    } catch (e) {
      console.log("Could not Book Order: ", e);
    }
  }
  const end = new Date();
  const timeTaken = (end - start) / 1000;

  console.log("Time Taken: ", timeTaken);
  console.log(cn);
}

router.post("/test", async (req, res) => {
  createOrders().then((res) => {
    console.log("DONE");
  });
  res.status(200).json({ message: "Orders are being booked" });
});

router.delete("/delete-account/:id", async (req, res) => {
  const id = req.params.id;
  const courier = await prisma.courier.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({ message: "Account deleted successfully" });
});

module.exports = router;
