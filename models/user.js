const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practice2')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))


const userModel = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})


module.exports = mongoose.model('user', userModel)