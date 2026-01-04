import mongoose from 'mongoose'
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})


const orderSchema = new mongoose.Schema({

    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,// here we geting the value form the another file with export
        ref: "User"
    },
    orderItems: {
        type:[orderItemSchema]// if we add the another schmea in the same file then we just gave the refrence like that
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String, 
        enum:["PENDING", "CANCELLED", "DELIVERED"],
        // eunm gave us choices you must need to choose one of them other wise you can go next
        default:PENDING
    }
    
},{timestamps: true})
export const Order = mongoose.model("Order", orderSchema)