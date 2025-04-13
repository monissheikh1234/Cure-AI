const express = require('express');
const router = express.Router();

// POST route to handle adding a new patient
router.post('/add-patient', (req, res) => {
    const { name, age, gender, aadhar, email, password, blood_group, allergies, emergency_name, emergency_relation, emergency_contact } = req.body;

    // Add logic to save patient data to the database
    // Example:
    // Patient.create({ name, age, gender, ... })
    //     .then(() => res.redirect('/success-page'))
    //     .catch(err => res.status(500).send('Error saving patient data'));

    res.send('Patient added successfully'); // Temporary response
});

module.exports = router;
