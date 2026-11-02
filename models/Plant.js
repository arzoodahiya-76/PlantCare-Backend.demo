const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    wateringFrequency: {
        type: String,
        required: true
    },

    sunlight: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;