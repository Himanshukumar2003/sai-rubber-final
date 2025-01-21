




document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
    submenu.addEventListener('click', function (e) {
        e.stopPropagation();
        if (this.querySelector('.dropdown-menu').classList.contains('show')) {
            this.querySelector('.dropdown-menu').classList.remove('show');
        } else {
            // Hide any other open submenus
            document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
                menu.classList.remove('show');
            });
            this.querySelector('.dropdown-menu').classList.add('show');
        }
    });
});

document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
        menu.classList.remove('show');
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