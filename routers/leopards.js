const router = require("express").Router();
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const prisma = new PrismaClient();

router.post("/add-account", async (req, res) => {
  const { email, apiKey, password } = req.body;

  const couriers = await prisma.courier.findMany({});
  const courierExists = couriers.find(
    (courier) =>
      courier.data.apiKey === apiKey && courier.data.password === password
  );

  if (courierExists) {
    return res.status(409).json({ message: "Account already exists" });
  }

  //   Verify if the API Key and Password are correct by sending a request to the Leopards API
  const url = `http://new.leopardscod.com/webservice/getAllCities/format/json/?api_key=${apiKey}&api_password=${password}`;
  try {
    const leopardsRes = await axios.get(url);
    if (leopardsRes.data.status === 0) {
      res.status(401).json({ message: "Invalid API Key or Password" });
      console.log("invalid key or password");
      return 1;
    }
  } catch (e) {
    console.log("error: ", e);
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const user_id = user.id;

  const courier = await prisma.courier.create({
    data: {
      user_id: user_id,
      name: "Leopards",
      data: { apiKey, password },
      shippers: "null",
    },
  });

  res
    .status(200)
    .send({ message: "Account added successfully", courier: courier });
});

router.post("/get-accounts", async (req, res) => {
  console.log("get-accounts");
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

router.delete("/delete-account/:id", async (req, res) => {
  const { id } = req.params;

  const courier = await prisma.courier.delete({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json({ message: "Store deleted successfully" });
});

module.exports = router;
