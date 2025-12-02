const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        sections.forEach(section => section.classList.remove('active'));

        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});
