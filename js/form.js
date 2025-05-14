document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');
  
  if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Reset error messages
          const errorMessages = document.querySelectorAll('.error-message');
          errorMessages.forEach(msg => {
              msg.style.display = 'none';
              msg.textContent = '';
          });
          
          let isValid = true;
          
          // Validate Full Name
          const fullName = document.getElementById('fullName');
          if (!fullName.value.trim()) {
              showError(fullName, 'Full name is required');
              isValid = false;
          }
          
          // Validate Email
          const email = document.getElementById('email');
          if (!email.value.trim()) {
              showError(email, 'Email is required');
              isValid = false;
          } else if (!isValidEmail(email.value)) {
              showError(email, 'Please enter a valid email');
              isValid = false;
          }
          
          // Validate Phone
          const phone = document.getElementById('phone');
          if (!phone.value.trim()) {
              showError(phone, 'Phone number is required');
              isValid = false;
          } else if (!isValidPhone(phone.value)) {
              showError(phone, 'Please enter a valid phone number');
              isValid = false;
          }
          
          // Validate Destination
          const destination = document.getElementById('destination');
          if (!destination.value) {
              showError(destination, 'Please select a destination');
              isValid = false;
          }
          
          // Validate Date
          const tourDate = document.getElementById('tourDate');
          if (!tourDate.value) {
              showError(tourDate, 'Please select a date');
              isValid = false;
          } else {
              const selectedDate = new Date(tourDate.value);
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              
              if (selectedDate < today) {
                  showError(tourDate, 'Please select a future date');
                  isValid = false;
              }
          }
          
          // Validate Number of Travelers
          const travelers = document.getElementById('travelers');
          if (!travelers.value) {
              showError(travelers, 'Please enter number of travelers');
              isValid = false;
          } else if (travelers.value < 1 || travelers.value > 20) {
              showError(travelers, 'Number of travelers must be between 1 and 20');
              isValid = false;
          }
          
          // If form is valid, show success message
          if (isValid) {
              bookingForm.style.display = 'none';
              formSuccess.style.display = 'block';
              
              // In a real app, you would send the form data to a server here
              console.log('Form submitted:', {
                  fullName: fullName.value,
                  email: email.value,
                  phone: phone.value,
                  destination: destination.value,
                  tourDate: tourDate.value,
                  travelers: travelers.value,
                  specialRequests: document.getElementById('specialRequests').value
              });
          }
      });
  }
  
  function showError(input, message) {
      const errorElement = input.nextElementSibling;
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      input.style.borderColor = '#e74c3c';
  }
  
  function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
  
  function isValidPhone(phone) {
      const re = /^[\d\s\-()+]{10,20}$/;
      return re.test(phone);
  }
});