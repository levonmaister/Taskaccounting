const mongoose1 = require('mongoose')

const uniqueValidator1 = require('mongoose-unique-validator');


const schema1 = new mongoose1.Schema({
    name: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: false,
    },
    goal: [
        {
            type: mongoose1.Schema.Types.ObjectId,
            ref: 'Goal'
        }
    ],
    time: {
        type: Number,
        required: false,
    },
    date: {
        type: Date,
        requried: true,
    }
})

schema1.plugin(uniqueValidator1);

module.exports = mongoose1.model('DoneTask', schema1);

