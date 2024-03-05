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
    userName,
    password,
    accountNo,
    // Shipper Info
    name,
    email,
    phone,
    city,
    address,
    specialInstructions,
    shop,
    courierServices,
    courierAccount,
  } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const user_id = user.id;

  const costCenterCode = "0" + String(Math.floor(Math.random() * 100));

  const TCSCouriers = await prisma.courier.findMany({
    where: {
      user_id: user_id,
    },
  });

  const userCouriers = TCSCouriers.find((courier) => courier.name === "TCS");

  // You can't assign a shipper to a shop that already has a shipper
  for (const shipper of userCouriers) {
    if (shipper.shippers !== "null") {
      const alreadyAssignedShop = shipper.shippers.find(
        (ship) => ship.shop === shop
      );
      if (alreadyAssignedShop) {
        return res.status(409).json({ message: "Shop already has a shipper" });
      }
    }
  }
  const costCenterParams = {
    userName: userName,
    password: password,
    costCenterCityName: city,
    costCenterCode: costCenterCode,
    costCenterName: shop + "Cost Center",
    pickupAddress: address,
    returnAddress: address,
    isLabelPrint: "No",
    accountNo: accountNo,
    contactNumber: phone,
  };

  const tcsRes = await axios.post(
    "https://api.tcscourier.com/production/v1/cod/createCostCenterCode",
    costCenterParams
  );
  console.log("tcsRes: ", tcsRes);

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
  }
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
