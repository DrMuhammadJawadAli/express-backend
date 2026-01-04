import mongoose from 'mongoose'
const categorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    }, 
    descrption:{
        type: String,
        required: true,
        minlenght: 6
    }

})
export const Category = mongoose.model("Category", categorySchema)