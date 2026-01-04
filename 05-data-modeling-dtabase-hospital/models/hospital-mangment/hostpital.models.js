import mongoose from "mongoose";
const hospitalSchema = new mongoose.Shema({
name: {
    type:String, 
    required: true
}, 
addressLine1: {
    type: String, 
    required: true
},
addressLine2: {
    type: String, 
    
},
city: {
    type: String, 
    required: true
},
pinCode: {
    type: String, 
    required: true
},
specializedIn: [
    {
    type: String, 
    }
],
},{timestamps})

export const Hospital = mongoose.model("Hospital", hospitalSchema)