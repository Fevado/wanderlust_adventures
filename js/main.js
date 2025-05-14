// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');
  
  mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
  });
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
      testimonials.forEach(testimonial => {
          testimonial.classList.remove('active');
      });
      testimonials[index].classList.add('active');
  }
  
  prevBtn.addEventListener('click', function() {
      currentTestimonial--;
      if (currentTestimonial < 0) {
          currentTestimonial = testimonials.length - 1;
      }
      showTestimonial(currentTestimonial);
  });
  
  nextBtn.addEventListener('click', function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
          currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
  });
  
  // Auto-rotate testimonials
  setInterval(function() {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
          currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
  }, 5000);
  
  // Destination Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const destinationCards = document.querySelectorAll('.destination-card');
  
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          this.classList.add('active');
          
          const filterValue = this.getAttribute('data-filter');
          
          destinationCards.forEach(card => {
              if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });
});
