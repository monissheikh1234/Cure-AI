
const patientToggle = document.getElementById("patientToggle")
const doctorToggle = document.getElementById("doctorToggle")
const patientFields = document.getElementById("patientFields")
const doctorFields = document.getElementById("doctorFields")
const signUpForm = document.getElementById("signUpForm")
const userTypeInput = document.getElementById("userType");

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

doctorToggle.addEventListener("click", () => {
    doctorToggle.classList.add("active");
    patientToggle.classList.remove("active");
    doctorFields.style.display = "block";
    patientFields.style.display = "none";

    setRequiredFields(doctorFields, true);
    setRequiredFields(patientFields, false);
    userTypeInput.value = "doctor";
})

signUpForm.addEventListener("submit", (e) => {
//   e.preventDefault()

  if (patientToggle.classList.contains("active")) {
    const name = document.getElementById("patientName").value
    const email = document.getElementById("patientEmail").value
    const password = document.getElementById("patientPassword").value
    const aadhar = document.getElementById("patientAadhar").value
    console.log("Patient Sign Up:", { name, email, password, aadhar })
    // Here you would typically send this data to your server for registration
  } else {
    const email = document.getElementById("doctorEmail").value
    const password = document.getElementById("doctorPassword").value
    const hospitalInfo = document.getElementById("hospitalInfo").value
    const registeredDoctorNo = document.getElementById("registeredDoctorNo").value
    console.log("Doctor Sign Up:", { email, password, hospitalInfo, registeredDoctorNo })
    // Here you would typically send this data to your server for registration
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const featureCards = document.querySelectorAll('.feature-card');

  // Improved Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              const navHeight = navbar.offsetHeight;
              const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = targetPosition - navHeight;

              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
              });

              // Close mobile menu if open
              if (navLinks.classList.contains('active')) {
                  hamburger.classList.remove('active');
                  navLinks.classList.remove('active');
                  document.body.style.overflow = '';
              }
          }
      });
  });

  // Hamburger Menu Toggle
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
      });
  });

//   Navbar Scroll Effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
  });



  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'all 0.5s ease-out';
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
  });

  // Add hover effect to CTA button
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
      ctaButton.addEventListener('mouseover', () => {
          ctaButton.style.transform = 'translateY(-2px)';
      });
      
      ctaButton.addEventListener('mouseout', () => {
          ctaButton.style.transform = 'translateY(0)';
      });
  }

  // Prevent scroll when mobile menu is open
  document.addEventListener('scroll', () => {
      if (navLinks.classList.contains('active')) {
          window.scrollTo(0, 0);
      }
  });
});

patientToggle.addEventListener("click", () => {
    patientToggle.classList.add("active");
    doctorToggle.classList.remove("active");

    patientFields.style.display = "grid";
    patientFields.style.gridTemplateColumns = "repeat(2, 1fr)";
    patientFields.style.gap = "1rem";

    doctorFields.style.display = "none";
    setRequiredFields(patientFields, true);
    setRequiredFields(doctorFields, false);
    userTypeInput.value = "patient";

});
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


setRequiredFields(patientFields, true);
setRequiredFields(doctorFields, false);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userType").addEventListener("change", function () {
        let userType = this.value;

        let patientFields = document.querySelectorAll(".patient-field");
        let doctorFields = document.querySelectorAll(".doctor-field");

        if (userType === "patient") {
            patientFields.forEach(field => {
                let dataName = field.getAttribute("data-name");
                field.setAttribute("name", dataName);
                console.log(`Assigned name to Patient field: ${dataName}`); // Debug log
            });

            doctorFields.forEach(field => {
                field.removeAttribute("name");
                console.log(`Removed name from Doctor field: ${field.getAttribute("data-name")}`);
            });
        } else if (userType === "doctor") {
            doctorFields.forEach(field => {
                let dataName = field.getAttribute("data-name");
                field.setAttribute("name", dataName);
                console.log(`Assigned name to Doctor field: ${dataName}`);
            });

            patientFields.forEach(field => {
                field.removeAttribute("name");
                console.log(`Removed name from Patient field: ${field.getAttribute("data-name")}`);
            });
        }
    });
});
