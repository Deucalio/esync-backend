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
  const { signature, code, timeStamp, app_key } = req.body;
  const parameters = {
    code,
    app_key,
    sign_method: "sha256",
    timestamp: timeStamp,
    sign: signature,
  };
  const url = `https://api.daraz.pk/rest/auth/token/create?code=${code}&app_key=${app_key}&sign_method=sha256&timestamp=${timeStamp}&sign=${signature}`;
  const response = await axios.post(url, parameters);

  res.status(200).json({ data: response.data });
});

module.exports = router;
