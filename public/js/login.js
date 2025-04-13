const patientToggle = document.getElementById("patientToggle");
const doctorToggle = document.getElementById("doctorToggle");
const patientFields = document.getElementById("patientFields");
const doctorFields = document.getElementById("doctorFields");
const userTypeInput = document.getElementById("userType");
const signUpForm = document.getElementById("signUpForm");
const slider = document.querySelector('.slider');

function setRequiredFields(section, required) {
    section.querySelectorAll("input").forEach(input => {

        if (required) {
            input.setAttribute("required", "");

            // Assign only if data-name exists
            if (input.dataset.name) {
                input.name = input.dataset.name;
            } else {
                console.error(`Missing data-name for input with ID: ${input.id}`);
            }

        } else {
            input.removeAttribute("required");
            input.removeAttribute("name");
        }

    });
}


patientToggle.addEventListener("click", () => {
    patientToggle.classList.add("active");
    doctorToggle.classList.remove("active");
    patientFields.style.display = "block";
    doctorFields.style.display = "none";
    slider.style.left = '0';

    setRequiredFields(patientFields, true);
    setRequiredFields(doctorFields, false);
    userTypeInput.value = "patient";
});

doctorToggle.addEventListener("click", () => {
    doctorToggle.classList.add("active");
    patientToggle.classList.remove("active");
    doctorFields.style.display = "block";
    patientFields.style.display = "none";
    slider.style.left = '50%';
    setRequiredFields(doctorFields, true);
    setRequiredFields(patientFields, false);
    userTypeInput.value = "doctor";
});

// Debugging before form submission
signUpForm.addEventListener("submit", (event) => {
    console.log("Form is being submitted...");
    console.log("User type:", userTypeInput.value);

    if (userTypeInput.value === "doctor") {
        setRequiredFields(doctorFields, true);
        setRequiredFields(patientFields, false);
    } else {
        setRequiredFields(patientFields, true);
        setRequiredFields(doctorFields, false);
    }

});


// Set initial required fields for patient
setRequiredFields(patientFields, true);
setRequiredFields(doctorFields, false);
// __________________________
// document.addEventListener('DOMContentLoaded', function() {
//     // Toggle between patient and doctor forms
//     const patientToggle = document.getElementById('patientToggle');
//     const doctorToggle = document.getElementById('doctorToggle');
//     const slider = document.querySelector('.slider');
//     const patientFields = document.getElementById('patientFields');
//     const doctorFields = document.getElementById('doctorFields');
//     const userTypeInput = document.getElementById('userType');
//     const signUpForm = document.getElementById('signUpForm');
    
//     function setRequiredFields(section, required) {
//       section.querySelectorAll("input").forEach(input => {
//         if (required) {
//           input.setAttribute("required", "");
          
//           // Assign only if data-name exists
//           if (input.dataset.name) {
//             input.name = input.dataset.name;
//           } else {
//             console.error(`Missing data-name for input with ID: ${input.id}`);
//           }
//         } else {
//           input.removeAttribute("required");
//           input.removeAttribute("name");
//         }
//       });
//     }
    
//     patientToggle.addEventListener('click', function() {
//       // Update toggle active state
//       patientToggle.classList.add('active');
//       doctorToggle.classList.remove('active');
      
//       // Move slider
//       slider.style.left = '0';
      
//       // Show appropriate form
//       patientFields.style.display = 'block';
//       doctorFields.style.display = 'none';
      
//       // Set required fields
//       setRequiredFields(patientFields, true);
//       setRequiredFields(doctorFields, false);
//       userTypeInput.value = 'patient';
//     });
    
//     doctorToggle.addEventListener('click', function() {
//       // Update toggle active state
//       doctorToggle.classList.add('active');
//       patientToggle.classList.remove('active');
      
//       // Move slider
//       slider.style.left = '50%';
      
//       // Show appropriate form
//       doctorFields.style.display = 'block';
//       patientFields.style.display = 'none';
      
//       // Set required fields
//       setRequiredFields(doctorFields, true);
//       setRequiredFields(patientFields, false);
//       userTypeInput.value = 'doctor';
//     });
    
//     // Toggle password visibility
//     const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
//     togglePasswordButtons.forEach(button => {
//       button.addEventListener('click', function() {
//         const passwordField = this.previousElementSibling;
        
//         // Toggle password visibility
//         if (passwordField.type === 'password') {
//           passwordField.type = 'text';
//           this.classList.remove('fa-eye-slash');
//           this.classList.add('fa-eye');
//         } else {
//           passwordField.type = 'password';
//           this.classList.remove('fa-eye');
//           this.classList.add('fa-eye-slash');
//         }
//       });
//     });
    
//     // Form validation
//     const aadhaarInput = document.getElementById('patientAadhar');
//     const patientPasswordInput = document.getElementById('patientPassword');
//     const doctorEmailInput = document.getElementById('registeredDoctorEmail');
//     const doctorPasswordInput = document.getElementById('registeredDoctorPassword');
    
//     // Aadhaar validation - numbers only
//     if (aadhaarInput) {
//       aadhaarInput.addEventListener('input', function() {
//         this.value = this.value.replace(/[^0-9]/g, '');
//         validateAadhaar();
//       });
//     }
    
//     function validateAadhaar() {
//       const aadhaarError = document.getElementById('aadhaar-error');
      
//       if (aadhaarInput.value.length > 0 && aadhaarInput.value.length !== 12) {
//         aadhaarError.textContent = 'Aadhaar number must be exactly 12 digits';
//         return false;
//       } else {
//         aadhaarError.textContent = '';
//         return true;
//       }
//     }
    
//     // Email validation
//     function validateEmail() {
//       const emailError = document.getElementById('doctor-email-error');
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
//       if (doctorEmailInput.value && !emailRegex.test(doctorEmailInput.value)) {
//         emailError.textContent = 'Please enter a valid email address';
//         return false;
//       } else {
//         emailError.textContent = '';
//         return true;
//       }
//     }
    
//     if (doctorEmailInput) {
//       doctorEmailInput.addEventListener('blur', validateEmail);
//     }
    
//     // Password validation
//     function validatePassword(passwordInput, errorElement) {
//       const passwordError = document.getElementById(errorElement);
      
//       if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
//         passwordError.textContent = 'Password must be at least 8 characters';
//         return false;
//       } else {
//         passwordError.textContent = '';
//         return true;
//       }
//     }
    
//     if (patientPasswordInput) {
//       patientPasswordInput.addEventListener('blur', function() {
//         validatePassword(patientPasswordInput, 'patient-password-error');
//       });
//     }
    
//     if (doctorPasswordInput) {
//       doctorPasswordInput.addEventListener('blur', function() {
//         validatePassword(doctorPasswordInput, 'doctor-password-error');
//       });
//     }
    
//     // Form submission
//     signUpForm.addEventListener('submit', function(e) {
//       e.preventDefault();
      
//       console.log("Form is being submitted...");
//       console.log("User type:", userTypeInput.value);
      
//       if (userTypeInput.value === 'doctor') {
//         const isEmailValid = validateEmail();
//         const isPasswordValid = validatePassword(doctorPasswordInput, 'doctor-password-error');
        
//         setRequiredFields(doctorFields, true);
//         setRequiredFields(patientFields, false);
        
//         if (isEmailValid && isPasswordValid) {
//           // Form is valid, proceed with login
//           alert('Doctor login successful! (This is a demo)');
//           // In a real application, you would send the form data to the server here
//         }
//       } else {
//         const isAadhaarValid = validateAadhaar();
//         const isPasswordValid = validatePassword(patientPasswordInput, 'patient-password-error');
        
//         setRequiredFields(patientFields, true);
//         setRequiredFields(doctorFields, false);
        
//         if (isAadhaarValid && isPasswordValid) {
//           // Form is valid, proceed with login
//           alert('Patient login successful! (This is a demo)');
//           // In a real application, you would send the form data to the server here
//         }
//       }
//     });
//   });