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
  console.log(req.body);
  return res.status(200).json({ message: "Test" });

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
  //   Add the store
  const newStore = await prisma.store.create({
    data: {
      name,
      store_info: storeData,
    },
  });

  res.status(200).json({ message: "Store Added" });
});

module.exports = router;
