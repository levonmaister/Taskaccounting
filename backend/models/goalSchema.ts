const mongoose2 = require('mongoose')

const uniqueValidator2 = require('mongoose-unique-validator');


const schema2 = new mongoose2.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: false,
    },
    tags: {
        type: [String],
        required: false,
    },
    tasks: [
        {
            type: mongoose2.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]

})


schema2.plugin(uniqueValidator2);

module.exports = mongoose2.model('Goal', schema2);