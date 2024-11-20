const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

// User routes
router.get("/", getUsers); // Get all users
router.get("/:userId", getUserById); // Get user by ID
router.put("/:userId", updateUser); // Update user
router.delete("/:userId", deleteUser); // Delete user

module.exports = router;
