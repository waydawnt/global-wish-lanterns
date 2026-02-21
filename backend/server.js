require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const Wish = require('./models/Wish');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// The Real-Time Bridge
io.on('connection', async (socket) => {
    console.log(`🔌 A user connected: ${socket.id}`);

    try {
        const allWishes = await Wish.find();
        socket.emit('initial_wishes', allWishes);
    } catch (err) {
        console.error('Error fetching wishes from DB:', err);
    }

    socket.on('send_wish', async (wishData) => {
        try {
            // Create a new Wish based on our Schema
            const newWish = new Wish({
                message: wishData.message,
                x: wishData.x,
                y: wishData.y,
                z: wishData.z
            });
            
            // Save it permanently to MongoDB Atlas
            const savedWish = await newWish.save();

            // Broadcast it to EVERYONE currently on the website
            io.emit('new_wish', savedWish);
            
            console.log(`🏮 New wish saved and broadcasted: "${savedWish.message}"`);
        } catch (err) {
            console.error('Error saving new wish:', err);
        }
    });

    socket.on('disconnect', () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

app.get('/', (req, res) => {
    res.send('Global Wish Lanterns Server is running! 🏮');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});