const mongoose = require('mongoose');
const Doctor = require('./models/doctor');
async function main() {
        await mongoose.connect('mongodb://localhost:27017/healthcaredata');
    }
    main()
        .then(()=>{
            console.log("Mongo Connection Successful")
            let inserted = Doctor.insertMany(doctor);
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
let doctor = [
    {
      "d_id": 10001,
      "d_name": "Dr. Aditi Sharma",
      "hospital_name": "Apollo Hospital",
      "d_email": "aditi.sharma@apollo.com",
      "d_password": "Adt@12345"
    },
    {
      "d_id": 10002,
      "d_name": "Dr. Rajesh Verma",
      "hospital_name": "Fortis Hospital",
      "d_email": "rajesh.verma@fortis.com",
      "d_password": "Rjv@56789"
    },
    {
      "d_id": 10003,
      "d_name": "Dr. Priya Iyer",
      "hospital_name": "Max Healthcare",
      "d_email": "priya.iyer@maxhealth.com",
      "d_password": "Priya@4321"
    },
    {
      "d_id": 10004,
      "d_name": "Dr. Sanjay Malhotra",
      "hospital_name": "Medanta Hospital",
      "d_email": "sanjay.malhotra@medanta.com",
      "d_password": "San@8765"
    },
    {
      "d_id": 10005,
      "d_name": "Dr. Kavita Nair",
      "hospital_name": "AIIMS Delhi",
      "d_email": "kavita.nair@aiims.com",
      "d_password": "Kavi@9087"
    },
    {
      "d_id": 10006,
      "d_name": "Dr. Anil Kapoor",
      "hospital_name": "Kokilaben Hospital",
      "d_email": "anil.kapoor@kokilaben.com",
      "d_password": "Anil@5566"
    },
    {
      "d_id": 10007,
      "d_name": "Dr. Neha Gupta",
      "hospital_name": "Hinduja Hospital",
      "d_email": "neha.gupta@hinduja.com",
      "d_password": "Neha@7788"
    },
    {
      "d_id": 10008,
      "d_name": "Dr. Mohan Deshmukh",
      "hospital_name": "Jaslok Hospital",
      "d_email": "mohan.deshmukh@jaslok.com",
      "d_password": "Mohan@3344"
    },
    {
      "d_id": 10009,
      "d_name": "Dr. Ramesh Agarwal",
      "hospital_name": "Narayana Health",
      "d_email": "ramesh.agarwal@narayana.com",
      "d_password": "Ram@2233"
    },
    {
      "d_id": 10010,
      "d_name": "Dr. Sneha Joshi",
      "hospital_name": "CMC Vellore",
      "d_email": "sneha.joshi@cmcvellore.com",
      "d_password": "Sneha@1122"
    },
    {
      "d_id": 10011,
      "d_name": "Dr. Vikram Singh",
      "hospital_name": "Manipal Hospital",
      "d_email": "vikram.singh@manipal.com",
      "d_password": "Vikram@9911"
    },
    {
      "d_id": 10012,
      "d_name": "Dr. Meera Kapoor",
      "hospital_name": "Sahyadri Hospital",
      "d_email": "meera.kapoor@sahyadri.com",
      "d_password": "Meera@1123"
    },
    {
      "d_id": 10013,
      "d_name": "Dr. Arjun Das",
      "hospital_name": "Lilavati Hospital",
      "d_email": "arjun.das@lilavati.com",
      "d_password": "Arjun@4455"
    },
    {
      "d_id": 10014,
      "d_name": "Dr. Suresh Nair",
      "hospital_name": "Rainbow Hospitals",
      "d_email": "suresh.nair@rainbow.com",
      "d_password": "Suresh@8899"
    },
    {
      "d_id": 10015,
      "d_name": "Dr. Sunita Reddy",
      "hospital_name": "Columbia Asia Hospital",
      "d_email": "sunita.reddy@columbia.com",
      "d_password": "Sunita@5566"
    },
    {
      "d_id": 10016,
      "d_name": "Dr. Pankaj Chaturvedi",
      "hospital_name": "Tata Memorial Hospital",
      "d_email": "pankaj.chaturvedi@tmh.com",
      "d_password": "Pankaj@6677"
    }
  ]
  