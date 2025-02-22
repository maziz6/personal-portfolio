document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");

    if (menuBtn && nav) {
        const toggleMenu = () => {
            const isActive = nav.classList.toggle("active");
            menuBtn.setAttribute("aria-expanded", isActive);
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars", !isActive);
                icon.classList.toggle("fa-times", isActive);
            }
        };

        const resetMenu = () => {
            if (window.innerWidth >= 769) {
                nav.classList.remove("active");
                menuBtn.setAttribute("aria-expanded", false);
                const icon = menuBtn.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-times");
                }
            }
        };

        // Toggle menu on button click
        menuBtn.addEventListener("click", toggleMenu);

// Close menu when a nav link is clicked
    nav.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            nav.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", false);
            const icon = menuBtn.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-times");
             }
        }
    });

    // Handle window resize with debouncing
        let resizeTimeout;
        const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resetMenu, 200);

        };

        window.addEventListener("resize", handleResize);

    resetMenu(); // Initial reset on page load
    } else {
        console.error("Menu button or navigation not found");
    }
});

    // Projects Filter
    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons and set it on the clicked button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                // Get the category of the clicked button
                const category = button.textContent;
    
                // Filter projects
                projectCards.forEach(card => {
                    const cardCategory = card.querySelector('.project-category').textContent;
                    if (category === 'All' || cardCategory === category) {
                        card.style.display = 'block'; // Show matching cards
                    } else {
                        card.style.display = 'none'; // Hide non-matching cards
                    }
                });
            });
        });
    });
