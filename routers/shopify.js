const router = require("express").Router();
const { PrismaClient } = require("../generated/client"); // Adjust the path based on your project structure
const cloudinary = require("cloudinary");
const prisma = new PrismaClient();

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
router.delete("/delete-store", async (req, res) => {
  const { storeName } = req.body;

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

  // Delete the image from cloudinary
  cloudinary.uploader.destroy(publicID, (error, result) => {
    if (error) {
      console.error("Error deleting image:", error);
    } else {
      console.log("Image deleted:", result);
    }
  });
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
