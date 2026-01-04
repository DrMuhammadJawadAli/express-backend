import mongoose from "mongoose";
const doctorShema = new mongoose.Shema({
name: {
    type: String, 
    required: true, 
    },
    salary: {
        type: String, 
        required: true
    }, 
    salary: {
        type: String, 
        required: true
    }, 
    experienceInYears: {
        type: Number, 
        default: 0
    }, 
    worksInHospitals: [
        { type: mongoose.Schema.Types.ObjectId, 
            ref: "Hospital"
        },
    ]
},{timestamps})

export const Doctor = mongoose.model("Doctor", doctorShema)