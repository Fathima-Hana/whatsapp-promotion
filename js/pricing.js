document.addEventListener('DOMContentLoaded', function() {
    // Toggle between monthly and yearly pricing
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            if (this.checked) {
                monthlyPrices.forEach(price => price.classList.remove('active'));
                yearlyPrices.forEach(price => price.classList.add('active'));
            } else {
                monthlyPrices.forEach(price => price.classList.add('active'));
                yearlyPrices.forEach(price => price.classList.remove('active'));
            }
        });
        
        // Initialize with monthly prices active
        monthlyPrices.forEach(price => price.classList.add('active'));
    }
    
    // Add hover effect to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            } else {
                this.style.transform = 'translateY(-10px)';
            }
        });
    });
    
    // Highlight featured plan on page load
    const featuredPlan = document.querySelector('.pricing-card.featured');
    if (featuredPlan) {
        featuredPlan.style.transform = 'translateY(-10px)';
    }
    
    // Animate pricing cards on scroll
    const animatePricingCards = function() {
        pricingCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = card.classList.contains('featured') ? 'translateY(-10px)' : 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animatePricingCards);
    window.addEventListener('scroll', animatePricingCards);
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove('active');
                    faq.querySelector('.faq-answer').style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
});