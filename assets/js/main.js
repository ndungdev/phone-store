document.addEventListener("DOMContentLoaded", function() {
    // simple nav highlight - could be extended
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});