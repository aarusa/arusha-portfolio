// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy email to clipboard functionality
document.querySelector('.copy-button').addEventListener('click', async () => {
    const email = 'shahiarusha@gmail.com';
    const tooltip = document.querySelector('.copy-tooltip');
    
    try {
        await navigator.clipboard.writeText(email);
        
        // Show tooltip
        tooltip.classList.add('show');
        
        // Hide tooltip after 2 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});
