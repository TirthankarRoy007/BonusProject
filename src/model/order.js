const mongoose = require('mongoose')

const objectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({

    invoiceNumber: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerFullAddress: {
        city: {
            type: String,
            required: true,
            lowercase: true
        },
        state: {
            type: String,
            required: true,
            lowercase: true
        },

        pincode: {
            type: Number,
            required: true
        },
    },
    orderLineItemsId: {
        type: objectId,
        ref: "orderLineItem"
    },
    deleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('order', orderSchema)