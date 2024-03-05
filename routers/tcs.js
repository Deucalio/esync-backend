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
