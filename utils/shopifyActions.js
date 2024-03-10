const axios = require("axios");
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fulfillOrders(ordersData) {
  const fullfilledOrders = [[]];
  // [  {id, name, domain, access_token, trackingNo}  ]
  counter = 1;
  for (const order of ordersData) {
    const headers = {
      "X-Shopify-Access-Token": order.access_token,
      "Content-Type": "application/json",
    };
    try {
      // Retrieves a list of fulfillment by sending order_id
      const url = `https://${order.domain}/admin/api/2023-10/orders/${order.id}/fulfillment_orders.json`;
      const response_one = await axios.get(url, { headers: headers });
      const fulfillment_order_id = response_one.data.fulfillment_orders[0].id;
      fullfilledOrders.push([order.name, fulfillment_order_id]);

      try {
        // Send the fulfillment request
        const url = `https://${order.domain}/admin/api/2023-04/fulfillments.json`;
        const data = {
          fulfillment: {
            line_items_by_fulfillment_order: [
              {
                fulfillment_order_id: fulfillment_order_id,
              },
            ],
            tracking_info: {
              number: order.trackingNo,
              url: "https://www.leopardscourier.com/tracking",
            },
          },
        };
        const response_two = await axios.post(url, data, { headers: headers });
        fullfilledOrders[counter].push(response_two.data.fulfillment.status);
      } catch (e) {
        // console.log(
        //   "Could not fulfill the order",
        //   e.response.data.errors.join(", ")
        // );
        if (e.response.data.errors.join(", ").includes("status= closed")) {
          fullfilledOrders[counter].push(
            `Order ${fulfillment_order_id} Already Fulfilled`
          );
        }
      }

      // Sleep for a minute after every 4 requests
      if (counter % 4 === 0) {
        await sleep(60000);
      }
    } catch (e) {
      console.log("Could not fetch the Fulfillment ID", e);
    }
    counter += 1;
  }
  console.log("Fullfilled Orders: ", fullfilledOrders);

  // Get all Shopify Orders
}
module.exports = {
  fulfillOrders,
};
