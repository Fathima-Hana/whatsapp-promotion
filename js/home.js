document.addEventListener('DOMContentLoaded', function() {
    // Video play functionality
    const playButton = document.querySelector('.play-button');
    const videoThumbnail = document.querySelector('.video-thumbnail');
    
    if (playButton && videoThumbnail) {
        playButton.addEventListener('click', function() {
            // In a real implementation, this would launch a modal with the video
            // For demo purposes, we'll just show an alert
            alert('Video player would launch here in the full implementation.');
            
            // Example of what the real implementation might look like:
            /*
            const videoModal = document.createElement('div');
            videoModal.className = 'video-modal';
            videoModal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            document.body.appendChild(videoModal);
            
            const closeModal = videoModal.querySelector('.close-modal');
            closeModal.addEventListener('click', function() {
                document.body.removeChild(videoModal);
            });
            */
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial-item, .demo-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    const demoContent = document.querySelector('.demo-content');
    if (demoContent) {
        demoContent.style.opacity = '0';
        demoContent.style.transform = 'translateY(30px)';
        demoContent.style.transition = 'all 0.5s ease 0.3s';
    }
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});