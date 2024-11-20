const express = require("express");
const router = express.Router();
const {
    sendMessage,
    getMessages,
    deleteMessage,
    updateMessage,
} = require("../controllers/message.controller");

// Message routes
router.post("/", sendMessage); // Send a new message
router.get("/:chatId", getMessages); // Get all messages for a chat
router.delete("/:messageId", deleteMessage); // Delete a message
router.put("/:messageId", updateMessage); // Update a message

module.exports = router;
