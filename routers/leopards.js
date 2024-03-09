const router = require("express").Router();
const axios = require("axios");
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const prisma = new PrismaClient();

router.post("/add-account", async (req, res) => {
  const { email, apiKey, password } = req.body;

  const couriers = await prisma.courier.findMany({});
  const courierExists = couriers.find(
    (courier) =>
      courier.data.apiKey === apiKey && courier.data.password === password
  );

  if (courierExists) {
    return res.status(409).json({ message: "Account already exists" });
  }

  //   Verify if the API Key and Password are correct by sending a request to the Leopards API
  const url = `http://new.leopardscod.com/webservice/getAllCities/format/json/?api_key=${apiKey}&api_password=${password}`;
  try {
    const leopardsRes = await axios.get(url);
    if (leopardsRes.data.status === 0) {
      res.status(401).json({ message: "Invalid API Key or Password" });
      console.log("invalid key or password");
      return 1;
    }
  } catch (e) {
    console.log("error: ", e);
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const user_id = user.id;

  const courier = await prisma.courier.create({
    data: {
      user_id: user_id,
      name: "Leopards",
      data: { apiKey, password },
      shippers: "null",
    },
  });

  res
    .status(200)
    .send({ message: "Account added successfully", courier: courier });
});

router.post("/get-accounts", async (req, res) => {
  console.log("get-accounts");
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      Courier: true,
    },
  });

  res.status(200).json({ accounts: user.Courier });
});
router.post("/book", async (req, res) => {
  // Start the timer
  const start = new Date().getTime();
  // // End the timer
  // const end = new Date().getTime();
  // const timeTaken = (end - start) / 1000;

  const { email, orders: orders } = req.body;
  if (!email || !orders) {
    return res.status(400).json({ errorMessage: "Incorrect field" });
  }

  // let api_key = "";
  // let api_password = "";

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { stores: true, Courier: true },
  });

  const userCourier = user.Courier.filter((acc) => acc.name === "Leopards");

  const userStores = user.stores;
  const shopifyStores = userStores.filter(
    (store) => store.store_info.platform === "shopify"
  );

  let booked = {
    // Store Orders and their courierID
    // store_1: {orders: [], courierID: 1, shipperInfo: {}, shopLogo: "url"   },
    // store_2: {orders: [], courierID: 2, shipperInfo :{}, shopLogo: "url"   },
  };
  for (const store of shopifyStores) {
    if (store.store_info.courier_id) {
      booked[store.name] = {
        orders: [],
        courierID: store.store_info.courier_id.id,
        shipperInfo: userCourier
          .find((courier) => courier.id === store.store_info.courier_id.id)
          .shippers.find((shipper) => shipper.shop === store.name),
        shopLogo: store.image_url,
      };
    }
  }

  let booked_orders_details = [];
  for (let i = 0; i < orders.length; i++) {
    let {
      shipment_id,
      shipment_name: shipment_name_eng,
      shipment_email,
      shipment_phone,
      shipment_address,
    } = booked[orders[i].store_info.name].shipperInfo.response;

    let shipment_instructions =
      booked[orders[i].store_info.name].shipperInfo.specialInstructions;

    const order = orders[i];
    let bookedOrder = {
      booked_packet_weight: 100,
      booked_packet_no_piece: 1,
      booked_packet_collect_amount: Number(order.total_outstanding),
      booked_packet_order_id: order.name,
      origin_city: 475, // Hyderabad
      destination_city: Number(order.correct_city.id),
      shipment_id: String(shipment_id),
      shipment_name_eng: shipment_name_eng,
      shipment_email: shipment_email,
      shipment_phone: shipment_phone,
      shipment_address: shipment_address,
      consignment_name_eng:
        order.shipping_address.first_name +
        " " +
        order.shipping_address.last_name,
      consignment_phone: String(order.shipping_address.phone)
        ? String(order.shipping_address.phone)
        : "No Phone",
      consignment_address: `${order.shipping_address.address1} ${
        order.shipping_address.address2 ? order.shipping_address.address2 : ""
      }`,
      special_instructions: shipment_instructions,
      shipment_type: order.service_type,
    };
    booked[order.store_info.name]["orders"].push(bookedOrder);
  }
  console.log("booked: ", booked);

  // Book orders for every store
  let counter = 0;
  for (const store in booked) {
    if (booked[store].orders.length === 0 || !booked[store].courierID) {
      console.log("Can't Book Orders for ", store, booked);
      continue;
    }
    const api_key = userCourier.find(
      (courier) => courier.id === booked[store].courierID
    ).data.apiKey;
    const api_password = userCourier.find(
      (courier) => courier.id === booked[store].courierID
    ).data.password;

    let data = JSON.stringify({
      api_key: api_key,
      api_password: api_password,
      packets: booked[store].orders,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      // url: "http://new.leopardscod.com/webservice/batchBookPacket/format/json",
      url: "https://merchantapi.leopardscourier.com/api/batchBookPacket/format/json/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let response = "";
    try {
      // Send the request to Leopards API
      response = await axios.request(config).then((response) => {
        return response.data;
      });

      let tracking_numbers = [];

      for (let i = 0; i < response.data.length; i++) {
        tracking_numbers.push(response.data[i].track_number);
        const currentOrder = booked[store]["orders"][i];

        // For Slip
        booked_orders_details.push({
          shop_name: store,
          shop_logo: booked[store].shopLogo,
          service_type: currentOrder.shipment_type.toUpperCase(),
          courier: "Leopards",
          consignee_info: {
            name: currentOrder.consignment_name_eng,
            address: currentOrder.consignment_address.replace(/[\r\n]/gm, ""),
            phone: currentOrder.consignment_phone,
          },
          shipper_info: {
            name: booked[store].shipperInfo.response.shipment_name,
            address: booked[store].shipperInfo.response.shipment_address,
            phone: booked[store].shipperInfo.response.shipment_phone,
          },
          destination: orders[counter].correct_city,
          shipping_instructions: "Call the consignee before delivery",
          date: new Date().toLocaleString().split(",")[0],
          pieces: currentOrder.booked_packet_no_piece,
          weight: currentOrder.booked_packet_weight,
          amount: currentOrder.booked_packet_collect_amount,
          track_number: response.data[i].track_number,
          booked_packet_order_name: response.data[i].booked_packet_order_id,
          collectType:
            currentOrder.booked_packet_collect_amount === 0
              ? "Non-COD Parcel"
              : "COD Parcel",
        });
        counter += 1;
      }
      console.log(`Booked Orders CN# for ${store}`, tracking_numbers);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  res.status(200).send({
    message: "Orders have been Booked",
    booked_orders: booked_orders_details,
  });
});

router.delete("/delete-account/:id", async (req, res) => {
  const { id } = req.params;

  const courier = await prisma.courier.delete({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json({ message: "Account deleted successfully" });
});

module.exports = router;