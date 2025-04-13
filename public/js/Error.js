// https://dribbble.com/shots/4359853-404-Page
document.getElementById('backToLogin').addEventListener('click', () => {
    const button = document.getElementById('backToLogin');
    
    // Smooth scale animation
    button.style.transform = 'scale(0.98)';
    button.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.15)';
    
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
  
    // Elegant fade out
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      window.location.href = '/login.html';
    }, 400);
  });
  
  // Enhanced hover effect for list items
  const listItems = document.querySelectorAll('.error-details li');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(4px)';
      item.style.color = '#1e40af';
      item.style.transition = 'all 0.2s ease';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
      item.style.color = '#475569';
    });
  });
  
  // Smooth scroll to top on load
  window.addEventListener('load', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Add subtle parallax effect to the error icon
  const errorIcon = document.querySelector('.error-icon');
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;
    
    errorIcon.style.transform = `translate(${x}px, ${y}px)`;
    errorIcon.style.transition = 'transform 0.2s ease-out';
  });