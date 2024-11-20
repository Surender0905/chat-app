const express = require("express");
const router = express.Router();
const {
    createChat,
    getChats,
    getChatById,
    updateGroupChat,
    addToGroup,
    removeFromGroup,
    deleteChat,
} = require("../controllers/chat.controller");

// Chat routes
router.post("/", createChat); // Create a new chat
router.get("/", getChats); // Get all chats for a user
router.get("/:chatId", getChatById); // Get a specific chat
router.put("/group/:chatId", updateGroupChat); // Update group chat name
router.put("/group/add/:chatId", addToGroup); // Add user to group
router.put("/group/remove/:chatId", removeFromGroup); // Remove user from group
router.delete("/:chatId", deleteChat); // Delete a chat

module.exports = router;
