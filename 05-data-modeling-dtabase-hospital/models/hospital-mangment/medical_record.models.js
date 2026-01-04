import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema({
    years: [
        { type: String, required: true }
    ],
    records: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        }
    ]
},{timestamps})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)