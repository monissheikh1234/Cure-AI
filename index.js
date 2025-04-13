const express = require('express');
    const path = require('path');
    const app = express();
    const mysql = require("mysql2");
    const mongoose = require('mongoose');
    const Patient = require("./models/patient.js");
    const Doctor = require("./models/doctor.js");
    const { faker } = require("@faker-js/faker");
    require("dotenv").config();
    const axios = require("axios");
    const port = 3000;
    const GEMINI_URL = "URL";

    async function main() {
        await mongoose.connect('mongodb://localhost:27017/healthcaredata');
    }
    main()
        .then(()=>{
            console.log("Mongo Connection Successful")
        })
        .catch((err)=>{
            console.log(err)
        })

    app.set("view engine","ejs");
    
    app.set("views",path.join(__dirname,"/views"))
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(express.static(path.join(__dirname,"public")));
    
    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,'public','home.html'))
    });

    // Adding User
    app.get("/signup/new",(req,res)=>{
        res.sendFile(path.join(__dirname,'public','Signup.html'))
    })
    app.post("/signup", (req, res) => {
        console.log("Raw request body:", req.body); // Log the raw request body for debugging
    
        let { user_type } = req.body;
        console.log("User type:", user_type);
    
        if (user_type === "patient") {
            // Map incoming fields to expected fields
            let user = {
                patient_name: req.body.p_full_name || req.body.patient_name,
                patient_age: req.body.p_age || req.body.patient_age || "Not specified",
                patient_gender: req.body.p_gender || req.body.patient_gender || "Not specified",
                aadhar_id: req.body.aadhar_id || req.body.aadhar,
                patient_confirm_password: req.body.p_password || req.body.patient_confirm_password,
                patient_email: req.body.p_email || req.body.patient_email,
                emergency_name: req.body.p_emergency_name || req.body.emergency_name || "Not specified",
                emergency_relation: req.body.p_emergency_relationship || req.body.emergency_relation || "Not specified",
                emergency_contact: req.body.p_emergency_phone || req.body.emergency_contact || "Not specified",
                blood_group: req.body.p_blood_group || req.body.blood_group || "Not specified",
                p_allergies: req.body.p_allergies || req.body.allergies || "None"
            };
    
            console.log("Mapped user object:", user); // Log the mapped user object for debugging
    
            // Validate required fields
            const requiredFields = [
                "patient_name",
                "patient_age",
                "patient_gender",
                "aadhar_id",
                "patient_confirm_password",
                "patient_email",
                "emergency_name",
                "emergency_relation",
                "emergency_contact",
                "blood_group",
                "p_allergies"
            ];
    
            const missingFields = requiredFields.filter(field => !user[field]);
            if (missingFields.length > 0) {
                console.error("Missing required patient fields:", missingFields);
                return res.status(400).send(`Missing required fields: ${missingFields.join(", ")}`);
            }
    
            let newPatient = new Patient({
                Patient: {
                    Name: user.patient_name,
                    Age: user.patient_age,
                    Gender: user.patient_gender,
                    aadhar_id: user.aadhar_id,
                    password: user.patient_confirm_password,
                    email: user.patient_email
                },
                Emergency_Contact: {
                    name: user.emergency_name,
                    Relationship: user.emergency_relation,
                    Phone: user.emergency_contact
                },
                Medical_Information: {
                    Blood_Group: user.blood_group,
                    Allergies: user.p_allergies
                }
            });
    
            newPatient.save()
                .then((savedPatient) => {
                    console.log("Patient saved successfully:", savedPatient);
                    res.redirect('/login');
                })
                .catch((err) => {
                    console.error("Error saving patient:", err);
                    res.status(500).send("Error saving patient.");
                });
        } else if (user_type === "doctor") {
            let { d_id, d_full_name, hospital_name, d_email, d_password } = req.body;
    
            // Validate required fields
            const requiredFields = ["d_id", "d_full_name", "hospital_name", "d_email", "d_password"];
            const missingFields = requiredFields.filter(field => !req.body[field]);
            if (missingFields.length > 0) {
                console.error("Missing required doctor fields:", missingFields);
                return res.status(400).send(`Missing required fields: ${missingFields.join(", ")}`);
            }
    
            let newDoctor = new Doctor({
                d_id: d_id,
                d_full_name: d_full_name,
                hospital_name: hospital_name,
                d_email: d_email,
                d_password: d_password
            });
    
            newDoctor.save()
                .then((savedDoctor) => {
                    console.log("Doctor saved successfully:", savedDoctor);
                    res.redirect('/login');
                })
                .catch((err) => {
                    console.error("Error saving doctor:", err);
                    res.status(500).send("Error saving doctor.");
                });
        } else {
            res.status(400).send("Invalid user type.");
        }
    })

    // Login 
    app.get("/login",(req,res)=>{
        res.sendFile(path.join(__dirname,'public','login.html'))
    })

    app.post("/login", async (req, res) => {
        console.log("Login request body:", req.body); // Log the incoming request body
    
        let { user_type } = req.body;
        console.log("User type:", user_type);
    
        if (user_type === 'patient') {
            try {
                let { aadhar_id, p_password } = req.body;
    
                // Log the credentials being used for login
                console.log("Patient login credentials:", { aadhar_id, p_password });
    
                const patientData = await Patient.findOne({ "Patient.aadhar_id": aadhar_id });
    
                if (!patientData) {
                    console.log("No MongoDB data found for this patient");
                    return res.sendFile(path.join(__dirname, 'public', 'Error.html'));
                }
    
                // Log the retrieved patient data
                console.log("Retrieved patient data:", patientData);
    
                if (patientData.Patient.password !== p_password) {
                    console.log("Incorrect password");
                    return res.sendFile(path.join(__dirname, 'public', 'Error.html'));
                }
    
                // Prepare data for rendering the dashboard
                const templateData = {
                    patient: {
                        name: patientData?.Patient?.Name || "Not specified",
                        age: patientData?.Patient?.Age || "Not specified",
                        gender: patientData?.Patient?.Gender || "Not specified",
                        aadhar_id: patientData?.Patient?.aadhar_id,
                        blood_group: patientData?.Medical_Information?.Blood_Group || "Not specified",
                        allergies: patientData?.Medical_Information?.Allergies
                            ? [patientData.Medical_Information.Allergies]
                            : [],
                        emergency_contact: {
                            name: patientData?.Emergency_Contact?.name || "Not specified",
                            relationship: patientData?.Emergency_Contact?.Relationship || "Not specified",
                            phone: patientData?.Emergency_Contact?.Phone || "Not specified"
                        }
                    },
                    currentMedications: patientData?.Current_Medication && patientData.Current_Medication.length > 0
                        ? patientData.Current_Medication.map(med => ({
                            name: med.Name || "Not specified",
                            dosage: med.Instruction || "As prescribed",
                            frequency: med.Frequency || "Not specified",
                            period: med.Period || "Not specified"
                        }))
                        : [],
                    pastMedications: patientData?.Past_Medication && patientData.Past_Medication.length > 0
                        ? patientData.Past_Medication.map(med => ({
                            name: med.Name || "Not specified",
                            period: med.Period || "Not specified",
                        }))
                        : [],
                    labResults: patientData?.Lab_Results && patientData.Lab_Results.length > 0
                        ? patientData.Lab_Results.map(result => ({
                            testName: result.Type || "Not specified",
                            date: result.Date || "Not specified",
                            value: result.Result || "Not specified",
                            unit: "",
                            status: "Completed"
                        }))
                        : [],
                    diagnoses: patientData?.Diagnosis && patientData.Diagnosis.length > 0
                        ? patientData.Diagnosis.map(condition => ({
                            condition: condition.condition || "Not specified",
                            date: condition.date || "Date not specified",
                            doctor: condition.doctor || "Doctor information not available",
                            notes: condition.notes || "Additional notes not available"
                        }))
                        : [],
                };
    
                console.log("Rendering newpatientDashboard.ejs with data:", templateData);
    
                // Render the dashboard
                return res.render("newpatientDashboard.ejs", templateData);
    
            } catch (err) {
                console.error("Error during patient login:", err);
                return res.status(500).send("Internal server error");
            }
        } else if (user_type === 'doctor') {
            try {
                let { d_email, d_password } = req.body;
    
                // Log the credentials being used for login
                console.log("Doctor login credentials:", { d_email, d_password });
    
                const doctorData = await Doctor.findOne({ "d_email": d_email });
    
                if (!doctorData) {
                    console.log("No MongoDB data found for this doctor");
                    return res.sendFile(path.join(__dirname, 'public', 'Error.html'));
                }
    
                // Log the retrieved doctor data
                console.log("Retrieved doctor data:", doctorData);
    
                if (doctorData.d_password !== d_password) {
                    console.log("Incorrect password");
                    return res.sendFile(path.join(__dirname, 'public', 'Error.html'));
                }
    
                console.log("Rendering doctorDashboard.ejs with data:", { doctorData });
    
                // Render the doctor dashboard
                return res.render("doctorDashboard", { doctorData, patients: [], selectedPatient: null });
    
            } catch (err) {
                console.error("Error during doctor login:", err);
                return res.status(500).send("Internal server error");
            }
        } else {
            console.log("Invalid user type");
            return res.status(400).send("Invalid user type");
        }
    });
    app.get("/dashboard",(req,res)=>{
        res.send("Working")
    })
    // Handle Search 
    app.get('/search-patients', async (req, res) => {
        const { q } = req.query;
    
        if (!q) {
            return res.json({ success: false, message: "Aadhar ID is required." });
        }
    
        try {
            const patient = await Patient.findOne({ "Patient.aadhar_id": q });
    
            if (patient) {
                return res.json({ success: true, patient: patient.Patient });
            } else {
                return res.json({ success: false, message: "Patient not found." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Server error." });
        }
    });
    app.get('/get-patient-details', async (req, res) => {
        const { aadhar } = req.query;
    
        if (!aadhar) {
            return res.json({ success: false, message: "Aadhar ID is required." });
        }
    
        try {
            const patient = await Patient.findOne({ "Patient.aadhar_id": aadhar });
    
            if (patient) {
                return res.json({ success: true, patient });
            } else {
                return res.json({ success: false, message: "Patient details not found." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Server error." });
        }
    });
    
    //add medication 
    app.post('/medicationform', (req, res) => {
        const aadharId = req.body.aadharId; // Get Aadhar ID from hidden input
        res.render('addMedicine.ejs',{aadharId});
    });

    app.post("/addmedication", async (req, res) => {
        if (!req.body.aadharId) {
            return res.status(400).json({ message: "Aadhar ID is missing!" });
        }
        try {
            const { aadharId, medicineName, frequency, duration, specialInstructions } = req.body;
            const patient = await Patient.updateOne(
                { "Patient.aadhar_id": aadharId },
                {
                    $push: {
                        "Current_Medication": {
                            Name: medicineName,
                            Frequency: frequency,
                            Period: duration,
                            Instruction: specialInstructions || "",
                        }
                    }
                }
            );
    
            if (patient.modifiedCount === 0) {
                return res.status(404).json({ message: "Patient not found!" });
            }
    
            res.status(200).json({ message: "Medication added successfully!" });
    
        } catch (err) {
            console.error("Error updating medication:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    });
    
    app.get("/get-ai-suggestion", async (req, res) => {
        const { aadharId } = req.query;
    
        if (!aadharId) {
            return res.status(400).json({ error: "Aadhar ID is required." });
        }
    
        try {
            const patient = await Patient.findOne({ "Patient.aadhar_id": aadharId });
    
            if (!patient) {
                return res.status(404).json({ error: "Patient not found." });
            }
    
            // Prepare AI prompt using patient data
            const patientInfo = `
                Name: ${patient.Patient.Name},
                Age: ${patient.Patient.Age},
                Gender: ${patient.Patient.Gender},
                Blood Group: ${patient.Medical_Information.Blood_Group},
                Allergies: ${patient.Medical_Information.Allergies || "None"},
                Current Medications: ${patient.Current_Medication.map(med => med.Name).join(", ") || "None"},
                Diagnoses: ${patient.Diagnosis.map(d => d.condition).join(", ") || "None"}
            `;
    
            const aiSuggestion = await getGeminiResponse(patientInfo);
    
            if (!aiSuggestion) {
                return res.status(500).json({ error: "No AI suggestion available." });
            }
    
            res.json({ suggestion: aiSuggestion });
    
        } catch (error) {
            console.error("Error fetching AI response:", error);
            res.status(500).json({ error: "Failed to fetch AI suggestions." });
        }
    });
    
    async function getGeminiResponse(patientData) {
        const prompt = `Based on this medical information, provide a personalized health recommendation under 100 words,also suggest some exercises:\n${patientData}`;
    
        try {
            const response = await axios.post(
                GEMINI_URL,
                { contents: [{ parts: [{ text: prompt }] }] },
                { headers: { "Content-Type": "application/json" } }
            );
    
            return response.data.candidates[0]?.content.parts[0]?.text || "No response from AI.";
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            return "AI service unavailable.";
        }
    }
    app.get("/aboutus",(req,res)=>{
        res.sendFile(path.join(__dirname,'public','About.html'));
    })

    app.get("/add-patient", (req, res) => {
        console.log("Rendering Add Patient form");
        res.render("addPatientForm.ejs"); // Ensure this EJS file exists in the /views directory
    });

    app.listen(port,()=>{
        console.log(`Server is Running at http://localhost:3000/`);
    })