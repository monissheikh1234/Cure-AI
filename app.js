const express = require('express');
const app = express();
const patientsRoutes = require('./routes/patients');

// Other existing code...

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
app.use('/patients', patientsRoutes); // Mount the patients routes

// Other existing code...