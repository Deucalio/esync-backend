const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require('cloudinary');
const prisma = new PrismaClient();
router.post("/save-token", async (req, res) => {
  const { email, token } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        token: token,
      },
    });
    console.log("updatedUser", updatedUser);
    return res.status(200).json({ message: "Token saved successfully" });
  } catch (e) {
    console.log("Error is: ", e);
    return res.status(500).json({ message: "Error saving token", e: e });
  }
});

router.post("/validate-name", async (req, res) => {
  // check if the store name is already taken
  const { shopName } = req.body;
  const store = await prisma.store.findUnique({
    where: {
      name: shopName,
    },
  });

  if (store) {
    return res.status(400).json({ message: "Store name already taken" });
  }
  res.status(200).json({ message: "Store name available" });
});

// DELETE A STORE
router.delete("/delete-store", async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  console.log("id", user.id);
  res.send(user);
});

router.get("/", async (req, res) => {
  res.send("SHOPIFY!");
});

module.exports = router;
