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
  const { signature, code, timeStamp, app_key, userEmail, name } = req.body;
  console.log("req.body: ", req.body);

  // Get all the stores
  const stores = await prisma.store.findMany({
    where: {
      platform: "daraz",
    },
  });

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

  const storeAlreadyExists = stores.find(
    (s) => s.store_info.account === storeData.account
  );
  if (storeAlreadyExists) {
    return res.status(200).json({ message: "Store Already Exists" });
  }

  //   Get the UserId associated with the userEmail
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  const userId = user.id;

  let newStore = "";

  try {
    newStore = await prisma.store.create({
      data: {
        user_id: userId, // Specify the userId for the associated user
        name: name,
        platform: "daraz",
        image_url: "none",
        image_public_id: "none",
        store_info: { platform: "daraz", ...storeData },
      },
    });
  } catch (e) {
    console.log("error adding store to DB: ", e);
    return res.status(200).json({ message: "Error adding store to DB" });
  }

  const redirectCode = crypto.createHmac("sha256", name);
  // Redirect to the daraz store
  res.redirect(
    301,
    `https://nakson.services/esync/settings/configuration?code=${redirectCode}`
  );
  // res.status(200).json({ message: "Store Added" });
});

// Show all connected Stores
router.post("/get-stores", async (req, res) => {
  const { email } = req.body;
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
  const darazStores = user.Stores.filter(
    (user) => user.store_info.platform === "daraz"
  );
  if (!darazStores) {
    return res.status(204);
  }
  res.status(200).json({ stores: darazStores });
});

// Delete a Store
router.delete("/delete-store/:id", async (req, res) => {
  const id = Number(req.params.id);

  // Delete the store
  const store = await prisma.store.delete({
    where: {
      id,
    },
  });

  res.status(200).json({ message: "Store deleted successfully" });
});

// Append into DB all the logs
router.post("/save-log", async (req, res) => {
  const { seller_id, data, timestamp } = req.body;

  // Search the user by email

  const stores = await prisma.store.findMany({
    where: {
      platform: "daraz",
    },
  });
  const darazStore = stores.find(
    (store) => store.store_info.account === seller_id
  );

  const userId = darazStore.user_id;

  const logData = await prisma.darazLogs.create({
    data: {
      store: seller_id,
      receivedAt: new Date(timestamp * 1000),
      data: data,
      user_id: userId,
    },
  });
  res.status(200).json({ message: "Log Added" });
});

module.exports = router;
