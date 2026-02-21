const mongoose = require('mongoose');

const wishSchema = new mongoose.Schema({
    message: {
        type: String,
        requird: true,
        maxLength: 100,
    },
    x: { type: Number, required: true},
    y: { type: Number, required: true},
    z: { type: Number, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Wish', wishSchema);