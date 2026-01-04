import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,  
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }
}, {timestamps: true})
export const User = mongoose.model('User', userSchema)       