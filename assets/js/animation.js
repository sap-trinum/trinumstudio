/* ===========================
   TRINUMSTUDIO SCROLL ANIMATION
=========================== */

const elements = document.querySelectorAll(
".hero-text, .hero-image, .card, .project-card, .contact, .about-text, .about-image, .why-card, .stat, .blog-card, .price-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

elements.forEach((element) => {

    observer.observe(element);

});