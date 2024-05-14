document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your logic to handle the form submission, like sending the data to a server or displaying a success message
    // For now, let's just log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optional: Reset the form after submission
    contactForm.reset();
  });
  
});
