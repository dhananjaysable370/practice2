const mongoose = require('mongoose')

const postModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
})


module.exports = mongoose.model('post', postModel)