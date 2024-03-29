const axios = require("axios");

// Function to generate Daraz URL
function getTimeStamp() {
  const localDate = new Date();
  // Get the Unix timestamp in seconds
  const timestampSeconds = localDate.getTime() / 1000;

  // Convert to milliseconds
  return timestampSeconds * 1000;
}

function objectToQueryString(obj) {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

function urlEncodeArray(arr) {
  // Convert array to a string representation
  const str = JSON.stringify(arr);

  // Encode the string
  const encodedStr = encodeURIComponent(str);

  return encodedStr;
}

const generateDarazURL = async (apiPath, AppKey, accessToken, params) => {
  // Generate the Sign First
  const timestamp = getTimeStamp();
  const config = {
    method: "post",
    url: "https://esync-backend.vercel.app/daraz/sign",
    data: {
      secret: process.env.DARAZ_SECRET,
      api: apiPath,
      parameters: {
        app_key: AppKey,
        access_token: accessToken,
        // timestamp: timestamp,
        timestamp: timestamp,
        sign_method: "sha256",
        ...params,
      },
    },
  };
  const signRes = await axios.request(config);
  const sign = signRes.data;

  // Generate the URL
  const queryString = objectToQueryString(params);

  const url = `https://api.daraz.pk/rest${apiPath}?${queryString}&app_key=${AppKey}&sign_method=sha256&access_token=${accessToken}&timestamp=${timestamp}&sign=${sign}`;

  return url;
};

module.exports = {
  generateDarazURL,
};
