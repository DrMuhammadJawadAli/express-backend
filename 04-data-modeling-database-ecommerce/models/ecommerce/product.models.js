import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true,

    },
    name:{
        type: String,
        required: true,
        unique: true,
        
    },
    descrption:{
        type: String,
        required: true,
        minlength: 10,
        },
    price: {
            type: Number,
            required: true,
            min: 0,
        },
    productImage:{
        type: string
    },
    stock: {
        default: 0,
        type: Number
    },
    category:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Category",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})
export const Product= mongoose.model("Product", productSchema)