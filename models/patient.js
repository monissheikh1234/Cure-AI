const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    "Patient" : {
        "Name" : {
            type : String
        },
        "Age" : {
            type : Number
        },
        "Gender" : {
            type : String
        },
        "aadhar_id" : {
            type : Number
        },
        "email" : {
            type : String
        },
        "password" : {
            type : String
        }
    },
    "Emergency_Contact" : {
        "name" : {
            type : String
        },
        "Relationship" : {
            type : String
        },
        "Phone" : {
            type : String
        }
    },
    "Medical_Information" : {
        "Blood_Group" : {
            type : String
        },
        "Allergies" : {
            type : String
        }
    },
    "Current_Medication" : [
        {
            "Name" : {
                type : String
            },
            "Frequency" : {
                type : String
            },
            "Period" : {
                type : String
            },
            "Instruction" : {
                type : String
            }
        }
    ],
    "Past_Medication" :[
        {
            "Name" : {
                type : String
            },
            "Period" : {
                type : String
            }
        }
    ],
    "Lab_Results" : [
        {
            "Type" : {
                type : String
            },
            "Date" : {
                type : String
            },
            "Result" : {
                type : String
            }
        }
    ],
    "Diagnosis" : [
        {
            "condition" : {
                type : String
            },
            "date" : {
                type : String
            },
            "doctor" : {
                type : String
            },
            "notes" : {
                type : String
            },
        }
    ]
})
const Patient = new mongoose.model("Patient",patientSchema)
module.exports = Patient