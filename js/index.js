document.querySelectorAll('.dropdown-submenu a').forEach(function (submenu) {
    submenu.addEventListener('click', function (event) {
        var nextEl = submenu.nextElementSibling;
        if (nextEl && nextEl.classList.contains('dropdown-menu')) {
            event.preventDefault();
            nextEl.classList.toggle('show');
        }
    });
});




const counterAnimation = () => {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 200; // Controls animation speed
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                if (current > target) current = target;
                stat.textContent = Math.round(current) + (stat.getAttribute('data-target') === '95' ? '%' : '+');
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
};

// Intersection Observer for triggering counter animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterAnimation();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the stats container
observer.observe(document.querySelector('.stats-container'));