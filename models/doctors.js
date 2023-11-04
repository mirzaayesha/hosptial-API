const mongoose = require("mongoose");

//Schema for doctor
const doctorSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    }
})

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
