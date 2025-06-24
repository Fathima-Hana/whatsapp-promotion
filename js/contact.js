document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const department = document.getElementById('department').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this to your server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent to our ${department} department. We'll contact you at ${email} soon.`);
            contactForm.reset();
            
            // Example of what the real implementation might look like:
            /*
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    department: department,
                    message: message
                }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message || 'Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
            */
        });
    }
    
    // Live chat button functionality
    const liveChatBtn = document.querySelector('.btn-secondary');
    if (liveChatBtn && liveChatBtn.textContent.includes('Live Chat')) {
        liveChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would open your live chat widget
            // For demo purposes, we'll just show an alert
            alert('Live chat would open here in the full implementation. You can integrate services like Tawk.to, LiveChat, or Intercom.');
            
            // Example of what the real implementation might look like:
            /*
            if (typeof Tawk_API !== 'undefined') {
                Tawk_API.toggle();
            } else {
                window.open('https://wa.me/15559876543', '_blank');
            }
            */
        });
    }
    
    // Animate info boxes on scroll
    const infoBoxes = document.querySelectorAll('.info-box');
    
    const animateInfoBoxes = function() {
        infoBoxes.forEach((box, index) => {
            const boxPosition = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (boxPosition < windowHeight - 100) {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    infoBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateInfoBoxes);
    window.addEventListener('scroll', animateInfoBoxes);
    
    // Add interactive effect to form inputs
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('label')?.classList.add('active');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.querySelector('label')?.classList.remove('active');
            }
        });
    });
});