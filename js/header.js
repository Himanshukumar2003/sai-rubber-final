// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector("#navbar");
//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// });



window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY; // Get the scroll position
    const speed = 0.5; // Adjust this value for slower effect (smaller = slower)

    // Apply background position with a slower scroll speed
    heroSection.style.backgroundPosition = `center ${scrollPosition * speed}px`;
});




