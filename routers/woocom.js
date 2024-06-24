const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();
const axios = require("axios");
const dummy = require("./dummy");
const { fulfillOrders } = require("../utils/shopifyActions");
const Bottleneck = require("bottleneck");

const limiter = new Bottleneck({
  minTime: 500, // 500 ms between requests (2 req/sec)
});

// sed
// Fulfill Orders
router.post("/get-user", async (req, res) => {
  const { email, ck, cs } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!ck) {
    return res.status(400).json({ message: "Consumer Key is required" });
  }
  if (!cs) {
    return res.status(400).json({ message: "Consumer Secret is required" });
  }

  // Search the user
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Stores: true,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  return res.status(200).json(user);
});
// ___________

module.exports = router;
