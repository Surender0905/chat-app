const express = require("express");
const router = express.Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const chatRoutes = require("./chat.routes");
const messageRoutes = require("./message.routes");

// Mount routes
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/chats", chatRoutes);
router.use("/messages", messageRoutes);

module.exports = router;
