document.addEventListener('DOMContentLoaded', function() {
    // Animate feature rows as they come into view
    const featureRows = document.querySelectorAll('.feature-row');
    
    const animateFeatureRows = function() {
        featureRows.forEach((row, index) => {
            const rowPosition = row.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (rowPosition < windowHeight - 100) {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    featureRows.forEach((row, index) => {
        row.style.opacity = '0';
        row.style.transform = 'translateY(30px)';
        row.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateFeatureRows);
    window.addEventListener('scroll', animateFeatureRows);
    
    // Add hover effect to comparison table rows
    const tableRows = document.querySelectorAll('.comparison-table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Make comparison table header sticky on scroll
    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        const tableHeader = comparisonTable.querySelector('thead');
        
        window.addEventListener('scroll', function() {
            const tableRect = comparisonTable.getBoundingClientRect();
            
            if (tableRect.top < 80 && tableRect.bottom > 200) {
                tableHeader.classList.add('sticky');
            } else {
                tableHeader.classList.remove('sticky');
            }
        });
    }
});