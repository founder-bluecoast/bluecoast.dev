/* ============================================
   BLUE COAST SOFTWARE - MAIN JAVASCRIPT
   Minimal JavaScript for interactions
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ===== MOBILE MENU TOGGLE =====

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class on menu
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Update ARIA attribute
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Get navbar height for offset
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;

                // Calculate scroll position
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS (Optional Enhancement) =====

    // Uncomment this section if you want fade-in animations on scroll

    /*
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards, project cards, etc.
    const observeElements = document.querySelectorAll('.service-card, .project-card, .section-header');
    observeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add fade-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    */

    // ===== NAVBAR SHADOW ON SCROLL =====

    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.7)';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });

    // ===== CONSOLE MESSAGE (Easter Egg) =====

    console.log('%c$ Blue Coast Software', 'color: #5a8fa8; font-family: monospace; font-size: 20px; font-weight: bold;');
    console.log('%cCoastal discipline meets terminal aesthetics.', 'color: #c97d6b; font-family: monospace; font-size: 14px;');
    console.log('%c~$ Interested in our work? Get in touch at hello@bluecoast.dev', 'color: #7fa883; font-family: monospace; font-size: 12px;');
    console.log('%c', 'font-size: 0; padding: 20px 100px; background: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\'%3E%3Ctext x=\'0\' y=\'15\' fill=\'%235a8fa8\' font-family=\'monospace\' font-size=\'12\'%3E────────────────────%3C/text%3E%3C/svg%3E");');

});
