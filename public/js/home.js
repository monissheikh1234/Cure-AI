// FAQ Accordion and Animations
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // Smooth scroll for nav and footer links
  const navLinks = document.querySelectorAll('nav a[href^="#"], .footer-links a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for header
          behavior: 'smooth'
        });
      }
    });
  });

  // CTA hover animation
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

  // Scroll animation for sections
  const animatedElements = document.querySelectorAll('.feature, .advantage-card, .testimonial');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  const animateOnScroll = () => {
    animatedElements.forEach(el => {
      const elementPosition = el.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run on load
});
