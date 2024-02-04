const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure

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
    return res.status(500).json({ message: "Error saving token" });
  }
});

router.get("/save-token", async (req, res) => {
  res.send("save-token");
})

router.get("/", async (req, res) => {
  res.send("SHOPIFY!");
});

module.exports = router;
