"use strict";
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    goal: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goal'
        }
    ],
});
module.exports = mongoose.model('User', schema);
