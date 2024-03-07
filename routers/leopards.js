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

  let shipment_id = "";
  let shipment_name_eng = "";
  let shipment_email = "";
  let shipment_phone = "";
  let shipment_address = "";
  let shipment_instructions = "";
  let api_key = "";
  let api_password = "";

  const user = await prisma.user.findUnique({
    where: { email: email },
    include: { stores: true, Courier: true },
  });
  const leopardsShippers = [];

  const userCourier = user.Courier.filter((acc) => acc.name === "Leopards");
  for (const shipper of userCourier) {
    leopardsShippers.push(shipper);
  }

  // [
  //   {
  //     id: 29,
  //     name: 'Leopards',
  //     data: {
  //       apiKey: '62D7FB483A67A8C054EC9B60F401E1A2',
  //       password: 'MOMDAUGHTS2023'
  //     },
  //     shippers: [ [Object] ],
  //     user_id: 5
  //   },
  //   {
  //     id: 28,
  //     name: 'Leopards',
  //     data: {
  //       apiKey: '6DFC06F1D192CEEF68AAD4774EFF7648',
  //       password: 'SUBHAN06'
  //     },
  //     shippers: [ [Object] ],
  //     user_id: 5
  //   }
  // ]

  let booked = [];
  let booked_orders_details = [];

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.store_info.name === "Momdaughts") {
      shipment_id = 1578583;
      shipment_name_eng = "MOMDAUGHTS";
      shipment_email = "";
      shipment_phone = "03320003362";
      shipment_address = "#30-B block E unit#6 Latifabad Hyderabad";
      shipment_instructions = "Parcel from Momdaughts";
      api_key = "62D7FB483A67A8C054EC9B60F401E1A2";
      api_password = "MOMDAUGHTS2023";
    }

    booked.push({
      booked_packet_weight: 100,
      booked_packet_no_piece: 1,
      booked_packet_collect_amount: Number(order.total_outstanding),
      booked_packet_order_id: order.name,
      origin_city: 475, // Hyderabad
      destination_city: Number(order.correct_city.id),
      shipment_id: shipment_id,
      shipment_name_eng: shipment_name_eng,
      shipment_email: shipment_email,
      shipment_phone: shipment_phone,
      shipment_address: shipment_address,
      consignment_name_eng:
        order.shipping_address.first_name +
        " " +
        order.shipping_address.last_name,
      // "Abey yar"
      consignment_phone: String(order.shipping_address.phone)
        ? String(order.shipping_address.phone)
        : "No Phone",
      // "101010101",
      consignment_address: `${order.shipping_address.address1} ${
        order.shipping_address.address2 ? order.shipping_address.address2 : ""
      }`,
      // "asdasdasdasdasdasdasdasdasdasdasdasdasd",
      special_instructions: shipment_instructions,
      shipment_type: "",
    });
  }
  let data = JSON.stringify({
    api_key: api_key,
    api_password: api_password,
    packets: booked,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://new.leopardscod.com/webservice/batchBookPacket/format/json",
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

      // For Slip
      booked_orders_details.push({
        shop_name: orders[i].store_info.name,
        shop_logo: orders[i].store_info.shopLogo,
        service_type: orders[i].service_type.toUpperCase(),
        courier: "Leopards",
        consignee_info: {
          name: booked[i].consignment_name_eng,
          address: booked[i].consignment_address.replace(/[\r\n]/gm, ""),
          phone: booked[i].consignment_phone,
        },
        shipper_info: {
          name: shipment_name_eng,
          address: shipment_address,
          phone: shipment_phone,
        },
        destination: orders[i].correct_city,
        shipping_instructions: "Call the consignee before delivery",
        date: new Date().toLocaleString().split(",")[0],
        pieces: booked[i].booked_packet_no_piece,
        weight: booked[i].booked_packet_weight,
        amount: booked[i].booked_packet_collect_amount,
        track_number: response.data[i].track_number,
        booked_packet_order_name: response.data[i].booked_packet_order_id,
        collectType:
          booked[i].booked_packet_collect_amount === 0
            ? "Non-COD Parcel"
            : "COD Parcel",
      });
    }
    // const status = await fulfillShopifyOrders(saved_data);
    // console.log("status: ", status);
    console.log("Booked Orders CN#", tracking_numbers);
    console.log("booked_orders_details: ", booked_orders_details, "\n");
  } catch (err) {
    console.log("Error: ", err);
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
