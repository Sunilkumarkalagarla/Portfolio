// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll reveal animations
document.addEventListener('DOMContentLoaded', function () {
    // Initialize sections as hidden
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show sections on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    });

    // Trigger scroll event once to show initial sections
    window.dispatchEvent(new Event('scroll'));
}); 