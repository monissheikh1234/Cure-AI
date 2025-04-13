const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
        "d_id" : {
            type : Number
        },
        "d_name" : {
            type : String
        },
        "hospital_name" : {
            type : String
        },
        "d_email" : {
            type : String
        },
        "d_password" : {
            type : String
        }
})
const Doctor = new mongoose.model("Doctor",doctorSchema)
module.exports = Doctor