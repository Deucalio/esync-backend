const router = require("express").Router();
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const prisma = new PrismaClient();

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
