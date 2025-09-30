document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('.fade-in-left, .fade-in-bottom, .project-item-animated, .skill-item-animated');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-item-animated')) {
                    const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                } else {
                    entry.target.classList.add('fade-in-visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Handle mobile navigation collapse after clicking a link
    const navLinks = document.querySelectorAll('.header-nav-items .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});
