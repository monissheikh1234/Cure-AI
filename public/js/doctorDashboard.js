// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    displayPatientsList();
});

// Display patients list
function displayPatientsList() {
    const patientsListElement = document.getElementById('patientsList');
    patientsListElement.innerHTML = '';

    patients.forEach(patient => {
        const patientElement = document.createElement('div');
        patientElement.className = 'patient-item';
        patientElement.innerHTML = `
            <h3>${patient.name}</h3>
            <p>ID: ${patient.id}</p>
            <p>Current Diagnosis: ${patient.diagnosis}</p>
        `;
        patientElement.onclick = () => displayMedicalHistory(patient);
        patientsListElement.appendChild(patientElement);
    });
}

// Display medical history for selected patient
function displayMedicalHistory(patient) {
    // Update diagnosis history
    document.getElementById('diagnosisHistory').innerHTML = `
        <p><strong>Current Diagnosis:</strong> ${patient.diagnosis}</p>
        <p><strong>History:</strong></p>
        <ul>${patient.history.map(h => `<li>${h}</li>`).join('')}</ul>
    `;

    // Update medications
    document.getElementById('medications').innerHTML = `
        <p><strong>Current Medications:</strong></p>
        <ul>${patient.medications.map(med => `<li>${med}</li>`).join('')}</ul>
    `;

    document.getElementById('Pmedications').innerHTML = `
    <p><strong>Current Medications:</strong></p>
    <ul>${patient.medications.map(med => `<li>${med}</li>`).join('')}</ul>
`;

    // Update lab results
    document.getElementById('labResults').innerHTML = `
        <p><strong>Recent Results:</strong></p>
        <ul>${patient.labResults.map(result => `<li>${result}</li>`).join('')}</ul>
    `;

    // Update allergies
    document.getElementById('allergies').innerHTML = `
        <p><strong>Known Allergies:</strong></p>
        <ul>${patient.allergies.map(allergy => `<li>${allergy}</li>`).join('')}</ul>
    `;
}
async function searchPatients() {
  const searchQuery = document.getElementById("patientSearch").value.trim();

  if (!searchQuery) {
      alert("Please enter a valid Aadhar ID.");
      return;
  }

  try {
      const response = await fetch(`/search-patients?q=${searchQuery}`);
      const data = await response.json();

      if (data.success && data.patient) {
          document.getElementById("patientsList").innerHTML = '';
          addPatientToList(data.patient); // Add patient to the recent list
      } else {
          alert("No patient found with this Aadhar ID.");
      }
  } catch (error) {
      console.error("Error fetching patient data:", error);
  }
}

// Function to add a patient to the "Recent Patients" list dynamically
function addPatientToList(patient) {
  const patientsListElement = document.getElementById("patientsList");

  // Clear the list if "No patients found" text exists
  if (patientsListElement.innerHTML.trim() === "<p>No patients found.</p>") {
    patientsListElement.innerHTML = "";
  }

  // Validate patient object
  if (!patient || !patient.Name || !patient.aadhar_id) {
    console.error("Invalid patient data:", patient);
    return;
  }

  const patientElement = document.createElement("div");
  patientElement.className = "patient-card";
  patientElement.innerHTML = `
      <h3>${patient.Name}</h3>
      <p>Age: ${patient.Age || "N/A"}</p>
      <p>Gender: ${patient.Gender || "N/A"}</p>
      <p>Aadhar ID: ${patient.aadhar_id}</p>
      <button onclick="fetchPatientDetails('${patient.aadhar_id}')">View Details</button>
  `;

  patientsListElement.appendChild(patientElement);
}

// Function to fetch patient details by Aadhar ID
async function fetchPatientDetails(aadharId) {
  try {
    const response = await fetch(`/get-patient-details?aadhar=${aadharId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.patient) {
      displayMedicalHistory(data.patient, aadharId);
    } else {
      alert("Patient details not found.");
    }
  } catch (error) {
    console.error("Error fetching patient details:", error);
    alert("An error occurred while fetching patient details. Please try again.");
  }
}

// Function to display patient details in medical history
function displayMedicalHistory(patient,aadharId) {
    console.log(aadharId)
  document.getElementById("medicalHistory").innerHTML = `
      <h2>Patient Medical History</h2>
      <div class="history-content">
          <div class="history-section">
              <h3>Diagnosis History</h3>
              <ul>
                  ${patient.Diagnosis.map(d => 
                      `<li><strong>${d.condition}</strong> (Date: ${d.date}, Doctor: ${d.doctor}) - ${d.notes}</li>`
                  ).join("")}
              </ul>
          </div>
          <div class="history-section">
              <h3>Current Medications</h3>
              <ul>
                  ${patient.Current_Medication.map(med => 
                      `<li><strong>${med.Name}</strong> - ${med.Frequency}, ${med.Period} (${med.Instruction})</li>`
                  ).join("")}
              </ul>
          </div>
          <div class="history-section">
              <h3>Past Medications</h3>
              <ul>
                  ${patient.Past_Medication.map(med => 
                      `<li><strong>${med.Name}</strong> - ${med.Period}</li>`
                  ).join("")}
              </ul>
          </div>
          <div class="history-section">
              <h3>Lab Results</h3>
              <ul>
                  ${patient.Lab_Results.map(lab => 
                      `<li><strong>${lab.Type}</strong> (Date: ${lab.Date}) - Result: ${lab.Result}</li>`
                  ).join("")}
              </ul>
          </div>
          <div class="history-section">
              <h3>Allergies & Conditions</h3>
              <p>${patient.Medical_Information.Allergies || "No known allergies"}</p>
          </div>
      </div>
  `;

  if (!document.querySelector(".add-medication-form")) {
    
    const formElement = document.createElement("form");
    formElement.className = "add-medication-form";
    formElement.method = "POST"; 
    formElement.action = "/medicationform";
    
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "aadharId";
    hiddenInput.value = aadharId; 
    
    const addMedicationButton = document.createElement("button");
    addMedicationButton.className = "add-medication-btn";
    addMedicationButton.textContent = "Add New Medication";
    
    formElement.appendChild(hiddenInput);
    formElement.appendChild(addMedicationButton);
    document.getElementById("medicalHistory").appendChild(formElement);
}
}

// Show add patient form
function showAddPatientForm() {
    const container = document.querySelector(".container");

    // Check if the form already exists
    if (document.querySelector(".add-patient-form")) {
        alert("Add Patient form is already open.");
        return;
    }

    // Create the form dynamically
    const formElement = document.createElement("form");
    formElement.className = "add-patient-form";
    formElement.innerHTML = `
        <h2 class="form-title">Add New Patient</h2>
        <div class="form-group">
            <label for="patientName">Name:</label>
            <input type="text" id="patientName" name="name" placeholder="Enter patient's name" required />
        </div>
        <div class="form-group">
            <label for="patientAge">Age:</label>
            <input type="number" id="patientAge" name="age" placeholder="Enter patient's age" required />
        </div>
        <div class="form-group">
            <label for="patientGender">Gender:</label>
            <select id="patientGender" name="gender" required>
                <option value="" disabled selected>Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div class="form-group">
            <label for="patientAadhar">Aadhar ID:</label>
            <input type="text" id="patientAadhar" name="aadhar" placeholder="Enter Aadhar ID" required />
        </div>
        <div class="form-actions">
            <button type="button" class="btn-submit" onclick="submitNewPatient()">Submit</button>
            <button type="button" class="btn-cancel" onclick="cancelAddPatientForm()">Cancel</button>
        </div>
    `;

    container.appendChild(formElement);
}

// Submit new patient details
async function submitNewPatient() {
    const name = document.getElementById("patientName").value.trim();
    const age = document.getElementById("patientAge").value.trim();
    const gender = document.getElementById("patientGender").value;
    const aadhar = document.getElementById("patientAadhar").value.trim();

    if (!name || !age || !gender || !aadhar) {
        alert("Please fill in all fields.");
        return;
    }

    try {
        const response = await fetch("/add-patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, age, gender, aadhar }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Patient added successfully!");
            document.querySelector(".add-patient-form").remove();
            addPatientToList(data.patient); // Add the new patient to the list
        } else {
            console.error("Error response from server:", data);
            alert(data.message || "Failed to add patient. Please try again.");
        }
    } catch (error) {
        console.error("Error adding patient:", error);
        alert("An error occurred while adding the patient. Please try again.");
    }
}

// Cancel the add patient form
function cancelAddPatientForm() {
    const formElement = document.querySelector(".add-patient-form");
    if (formElement) {
        formElement.remove();
    }
}