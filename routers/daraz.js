const router = require("express").Router();
const crypto = require("crypto");
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();

function sign(secret, api, parameters) {
  const sortKeys = Object.keys(parameters).sort();
  let parametersStr = api;

  sortKeys.forEach((key) => {
    parametersStr += key + parameters[key];
  });

  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(parametersStr);

  return hmac.digest("hex").toUpperCase();
}
router.post("/sign", async (req, res) => {
  const { secret, api, parameters } = req.body;
  res.status(200).send(sign(secret, api, parameters));
});

router.post("/access-token", async (req, res) => {
  const { signature, code, timeStamp, app_key, name, email, userEmail } =
    req.body;

  // Get all the stores
  const stores = await prisma.store.findMany({});

  // Check if the store exists by the email
  const store = stores.find((store) => store.store_info.account === email);
  if (store) {
    return res.status(200).json({ message: "Store already exists" });
  }
  let url = "";
  let response = "";
  let storeData = "";
  try {
    url = `https://api.daraz.pk/rest/auth/token/create?code=${code}&app_key=${app_key}&sign_method=sha256&timestamp=${timeStamp}&sign=${signature}`;
    response = await axios.post(url);
    storeData = response.data;

    if (storeData.code === "InvalidCode") {
      return res.status(200).json({ message: storeData.code });
    }
  } catch (e) {
    console.log("error: ", e);
    return res.status(200).json({ message: "Invalid Code" });
  }

  //   Check if the email matches the user

  if (storeData.account !== email) {
    return res.status(200).json({ message: "Invalid Email" });
  }

  //   Get the UserId associated with the userEmail
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;

  //   Add the store

  const newStore = await prisma.store.create({
    data: {
      user_id: userId, // Specify the userId for the associated user
      name: name,
      image_url: "none",
      image_public_id: "none",
      store_info: { platform: "daraz", ...storeData },
    },
  });
  res.status(200).json({ message: "Store Added" });
});

// Show all connected Stores
router.post("/get-stores", async (req, res) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      stores: true,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  const darazStores = user.stores.filter(
    (user) => user.store_info.platform === "daraz"
  );
  if (!darazStores) {
    return res.status(204);
  }
  res.status(200).json({ stores: darazStores });
});

// Delete a Store
router.delete("/delete-store/:id", async (req, res) => {
  const storeName = req.params.id;
  const storeExists = await prisma.store.findUnique({
    where: {
      name: storeName,
    },
  });
  if (!storeExists) {
    return res.status(400).json({ message: "Store does not exist" });
  }
  // Delete the store
  const store = await prisma.store.delete({
    where: {
      name: storeName,
    },
  });

  res.status(200).json({ message: "Store deleted successfully" });
});

module.exports = router;
