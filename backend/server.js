require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const filter = require('leo-profanity');
const https = require('https');

const Wish = require('./models/Wish');

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json()); // Required to read JSON from the Admin Dashboard

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// --- ANTI-SPAM MEMORY STORE ---
// This keeps track of when an IP address last sent a wish
const lastWishTimes = new Map();

// --- THE REAL-TIME BRIDGE ---
io.on('connection', async (socket) => {
    console.log(`🔌 A user connected: ${socket.id}`);

    // Get user IP (Works locally and on Render)
    const clientIp = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;

    try {
        // 1. Get the TRUE total number of wishes in the database
        const totalWishesCount = await Wish.countDocuments();

        // 2. Send that true total to the frontend counter
        socket.emit('total_count', totalWishesCount);

        // Generates a random number between 200 and 500
        const randomAmount = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
        const randomWishes = await Wish.aggregate([
            { $sample: { size: randomAmount } }
        ]);

        socket.emit('initial_wishes', randomWishes);
    } catch (err) {
        console.error('Error fetching wishes from DB:', err);
    }

    socket.on('send_wish', async (wishData) => {
        try {
            let finalMessage = wishData.message || "";

            // --- SPAM SHIELD 1: Minimum Length ---
            if (finalMessage.trim().length < 5) {
                socket.emit('wish_rejected', "Your wish is too short! Please write at least 5 meaningful characters.");
                return; // Stop the code here
            }

            // --- SPAM SHIELD 2: Rate Limiting ---
            const now = Date.now();
            const lastTime = lastWishTimes.get(clientIp) || 0;
            const cooldownPeriod = 30 * 1000; // 30 seconds cooldown

            if (now - lastTime < cooldownPeriod) {
                socket.emit('wish_rejected', "Take a deep breath! Please wait 30 seconds before sending another wish.");
                return; // Stop the code here
            }
            
            // If they pass the check, record their new time
            lastWishTimes.set(clientIp, now);

            // --- SPAM SHIELD 3: Profanity Filter ---
            if (filter.check(finalMessage)) {
                finalMessage = "I wish for peace, love, and happiness for everyone. 🌸";
                socket.emit('wish_rejected', "Let's keep the sky peaceful! We changed your words to a positive wish.");
            }

            // Create a new Wish based on our Schema
            const newWish = new Wish({
                message: finalMessage,
                author: wishData.author || "Anonymous",
                x: 0, y: 0, z: 0
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

// --- ADMIN DASHBOARD REST ROUTES ---

// 1. Fetch all wishes for the admin table
app.get('/api/wishes', async (req, res) => {
    try {
        const wishes = await Wish.find().sort({ createdAt: -1 }).limit(1000); // Limit to 1000 so browser doesn't crash
        res.json(wishes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data." });
    }
});

// 2. Bulk Delete Route
app.delete('/api/wishes/bulk', async (req, res) => {
    const { ids, adminPassword } = req.body;

    // Security Check: Change this to something you will remember!
    if (adminPassword !== "mySuperSecretPassword123") {
        return res.status(403).json({ error: "Unauthorized. Wrong Password." });
    }

    if (!ids || ids.length === 0) {
        return res.status(400).json({ error: "No messages selected." });
    }

    try {
        // Find and delete every wish ID that matches the array sent from React
        const result = await Wish.deleteMany({ _id: { $in: ids } });
        res.json({ message: `Success! Cleaned up ${result.deletedCount} spam messages.` });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete messages." });
    }
});

app.get('/', (req, res) => {
    res.send('Global Wish Lanterns Server is running! 🏮');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});

// Keeps the Render server awake
setInterval(() => {
    const backendUrl = 'https://global-wish-lanterns-api.onrender.com';

    https.get(backendUrl, (resp) => {
        if (resp.statusCode === 200) {
            console.log('✅ Self-ping successful: Server kept alive');
        }
    }).on('error', (err) => {
        console.error('❌ Self-ping failed:', err.message);
    });
}, 14 * 60 * 1000);