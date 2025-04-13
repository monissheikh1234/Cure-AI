// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current FAQ item
        item.classList.toggle('active');
      });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    // CTA Button Animation
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'translateY(-5px)';
        ctaButton.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
      });
      
      ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = '';
        ctaButton.style.boxShadow = '';
      });
      
      
    }
    
    // Login and Signup button functionality
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    
   
    
    // Add animation to features on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.feature, .advantage-card, .testimonial');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll('.feature, .advantage-card, .testimonial');
    elementsToAnimate.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
  });