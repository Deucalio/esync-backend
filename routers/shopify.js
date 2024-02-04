const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure

const prisma = new PrismaClient();
router.post("/save-token", async (req, res) => {
  const { email, token } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      token: token,
    },
  });
  console.log("updatedUser", updatedUser);
  res.status(200).json({ message: "Token saved successfully" });
});

module.exports = router;
