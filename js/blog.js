document.addEventListener('DOMContentLoaded', function() {
    // Animate blog cards as they come into view
    const blogCards = document.querySelectorAll('.blog-card');
    
    const animateBlogCards = function() {
        blogCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    blogCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateBlogCards);
    window.addEventListener('scroll', animateBlogCards);
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // In a real implementation, you would send this to your server
            // For demo purposes, we'll just show an alert
            alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our next newsletter.`);
            emailInput.value = '';
            
            // Example of what the real implementation might look like:
            /*
            fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: emailInput.value }),
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message || 'Thank you for subscribing!');
                emailInput.value = '';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error with your subscription. Please try again.');
            });
            */
        });
    }
    
    // Add hover effect to pagination
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-3px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
});