const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();
const axios = require("axios");

// Get all Shopify Orders

router.post("/orders", async (req, res) => {
  // Get the Email
  const { email } = req.body;

  // Find the store by email
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
    include: {
      stores: true,
    },
  });
  const userStores = user.stores;
  const orders = [];

  for (const store of userStores) {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://${store.store_info.shop}/admin/api/2023-10/orders.json`,
      headers: {
        "X-Shopify-Access-Token": store.store_info.accessToken,
      },
    };

    let order_req = await axios.request(config);
    order_req = order_req.data.orders.filter((order) =>
      order.tags.toLowerCase().includes("")
    );
    order_req.forEach((order) => {
      orders.push({
        ...order,
        shop_name: store.store_info.shop.slice(0, -14),
      });
    });
  }
  res.status(200).send(orders);
});

// ___________

// Add a Store in esync/settings

// Validate the name first
router.post("/validate-name", async (req, res) => {
  // check if the store name is already taken
  const { shopName } = req.body;
  const store = await prisma.store.findUnique({
    where: {
      name: shopName,
    },
  });

  if (store) {
    return res.status(400).json({ message: "Store name already taken" });
  }
  res.status(200).json({ message: "Store name available" });
});

// Send the Token, Add the Name and the Image URL,public ID in to the store table
router.post("/save-token", async (req, res) => {
  const { email, token, storeName, imageURL, publicID } = req.body;
  try {
    // check if the store already exists
    const storeExists = await prisma.store.findUnique({
      where: {
        name: storeName,
      },
    });
    if (storeExists) {
      // if the store already exists, update the token
      const store = await prisma.store.update({
        where: {
          name: storeName,
        },
        data: {
          token: token,
        },
      });
      return res.status(200).json({ message: "Token updated successfully" });
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const store = await prisma.store.create({
      data: {
        user_id: user.id, // Specify the userId for the associated user
        name: storeName,
        image_url: imageURL,
        image_public_id: publicID,
        store_info: { key: "value" },
        token: token,
      },
    });
    return res.status(200).json({ message: "Store Added successfully" });
  } catch (e) {
    console.log("Error is: ", e);
    return res.status(500).json({ message: "Error saving token", e: e });
  } finally {
    await prisma.$disconnect();
  }
});

// Send all the stores associated with the user
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
  res.status(200).json({ stores: user.stores });
});

// Get all the stores
router.get("/get-stores", async (req, res) => {
  const stores = await prisma.store.findMany();
  res.status(200).json({ stores: stores });
});

// This is the route Remix will call to and send the store info
router.post("/save-store-info", async (req, res) => {
  const { token, store_info } = req.body;
  // Match the token First

  const store = await prisma.store.findUnique({
    where: {
      token: token,
    },
  });

  if (!store) {
    return res.status(400).json({ message: "Invalid token" });
  }

  // Update the store info
  const updatedStore = await prisma.store.update({
    where: {
      token: token,
    },
    data: {
      store_info: store_info,
    },
  });
  res.status(200).json({ message: "Store info updated successfully" });
});

// ________________

// DELETE A STORE
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
  // Get the Public ID of the image
  const publicID = storeExists.image_public_id;
  console.log("Public ID: ", publicID);

  // Delete the image from cloudinary

  try {
    const deleteIMG = await cloudinary.uploader.destroy(publicID);
    console.log("Image deleted: ", deleteIMG);
  } catch (e) {
    console.log("Error deleting image: ", e);
  }
  // Delete the store
  const store = await prisma.store.delete({
    where: {
      name: storeName,
    },
  });

  res.status(200).json({ message: "Store deleted successfully" });
});

router.get("/", async (req, res) => {
  res.send("SHOPIFY!");
});

module.exports = router;
