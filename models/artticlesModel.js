const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },


    body: {
        type: String,
        required: true,
    },
    conclusion: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    }
});

module.exports = mongoose.model("Articles", articleSchema);