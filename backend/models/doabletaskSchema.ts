const mongoose3 = require('mongoose')

const uniqueValidator3 = require('mongoose-unique-validator');


const schema3 = new mongoose3.Schema({
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
            type: mongoose3.Schema.Types.ObjectId,
            ref: 'Goal'
        }
    ]
})

schema3.plugin(uniqueValidator3);

module.exports = mongoose3.model('DoableTask', schema3);

