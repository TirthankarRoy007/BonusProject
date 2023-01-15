const mongoose = require('mongoose')
const orderLineItemSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    sellPrice: {
        type: String,
        required: true
    }
},

    { timestamd: true }

)

module.exports = mongoose.Model('orderLIneItem', orderLineItemSchema)