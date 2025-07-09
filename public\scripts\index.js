// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Link clicked:', link.textContent);
    });
});

// Add event listener to donate button
document.querySelector('.cta button').addEventListener('click', () => {
    console.log('Donate button clicked!');
});