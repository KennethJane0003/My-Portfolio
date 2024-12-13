// Select all elements with the "fade-in" class
const fadeElements = document.querySelectorAll('.fade-in');

// Add scroll event listener
window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.style.animation = "fadeIn 1.5s ease-in-out forwards";
        }
    });
});