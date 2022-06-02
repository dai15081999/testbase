const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Menu = mongoose.model('Product', menuSchema)

module.exports = Menu