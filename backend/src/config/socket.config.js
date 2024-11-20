const socketIO = require("socket.io");

const configureSocket = (server) => {
    const io = socketIO(server, {
        cors: {
            origin: process.env.CLIENT_URL || "http://localhost:3000",
            methods: ["GET", "POST"],
            credentials: true,
        },
        pingTimeout: 60000,
    });

    io.on("connection", (socket) => {
        console.log("New client connected");

        // Setup socket room for user
        socket.on("setup", (userData) => {
            socket.join(userData._id);
            socket.emit("connected");
        });

        // Join chat room
        socket.on("join chat", (room) => {
            socket.join(room);
            console.log("User joined room: " + room);
        });

        // Handle new message
        socket.on("new message", (newMessageReceived) => {
            let chat = newMessageReceived.chat;

            if (!chat.users) return console.log("Chat users not defined");

            chat.users.forEach((user) => {
                if (user._id === newMessageReceived.sender._id) return;
                socket
                    .in(user._id)
                    .emit("message received", newMessageReceived);
            });
        });

        // Handle typing status
        socket.on("typing", (room) => socket.in(room).emit("typing"));
        socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

        // Handle disconnection
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });

    return io;
};

module.exports = configureSocket;
