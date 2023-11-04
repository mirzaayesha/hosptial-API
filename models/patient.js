const mongoose = require("mongoose");

//For schema for patients
const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    reports : [
        {
            status : {
                type : String,
                required : true,
                enum : ["Negative", "Travelled - Quarantine", "Symptoms - Quarantine", "Positive - Admit"]
            },
            date : {
                type : Date,
                required : true
            }
    }
    ],
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor",
        required : true
    }
})

const Patient = new mongoose.model("Patient", patientSchema);

module.exports = Patient;