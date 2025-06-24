document.addEventListener('DOMContentLoaded', function() {
    // Animate steps as they come into view
    const stepCards = document.querySelectorAll('.step-card');
    
    const animateSteps = function() {
        stepCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.classList.add('visible');
            }
        });
    };
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateSteps);
    window.addEventListener('scroll', animateSteps);
    
    // Make dashboard image interactive
    const dashboardImage = document.querySelector('.dashboard-image');
    if (dashboardImage) {
        dashboardImage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        dashboardImage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Add click effect to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            featureItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Lazy load the YouTube video iframe when it comes into view
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = document.createElement('iframe');
                    iframe.width = '560';
                    iframe.height = '315';
                    iframe.src = 'https://www.youtube.com/embed/example?autoplay=0';
                    iframe.frameBorder = '0';
                    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframe.allowFullscreen = true;
                    
                    const wrapper = document.querySelector('.video-wrapper');
                    wrapper.appendChild(iframe);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(videoContainer);
    }
});