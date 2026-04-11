const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        minLength: [5, 'Your wish is too short! Please write at least 5 characters.'], // Spam Shield
        maxLength: [300, 'Your wish is too long! Keep it under 300 characters.'], // Keeps the database light
        trim: true // Spam Shield: Removes invisible spaces (e.g., "     ") before saving
    },
    author: { 
        type: String, 
        default: 'Anonymous',
        trim: true 
    },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Wish', wishSchema);