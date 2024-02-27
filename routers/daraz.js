const router = require("express").Router();
const crypto = require("crypto");
const axios = require("axios");

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
    return res.status(400).json({ message: "Store already exists" });
  }

  const parameters = {
    code,
    app_key,
    sign_method: "sha256",
    timestamp: timeStamp,
    sign: signature,
  };
  const url = `https://api.daraz.pk/rest/auth/token/create?code=${code}&app_key=${app_key}&sign_method=sha256&timestamp=${timeStamp}&sign=${signature}`;
  const response = await axios.post(url, parameters);
  const storeData = response.data;

  //   Check if the email matches the user
  if (storeData.account !== email) {
    return res.status(400).json({ message: "Invalid Email" });
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
  res.status(200).json({ message: "Store Added", store: newStore });
});

module.exports = router;
