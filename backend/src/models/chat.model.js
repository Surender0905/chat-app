const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
        ],
        lastMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        unreadCount: {
            type: Map,
            of: Number,
            default: new Map(),
        },
        isGroupChat: {
            type: Boolean,
            default: false,
        },
        groupName: {
            type: String,
            trim: true,
            maxlength: [50, "Group name cannot exceed 50 characters"],
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
