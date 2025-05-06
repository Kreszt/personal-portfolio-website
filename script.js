// Dark mode toggle
function setupDarkMode() {
    const darkModeToggles = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
    const html = document.documentElement;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        html.classList.add('dark');
    }

    darkModeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            
            // Save preference
            if (html.classList.contains('dark')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', null);
            }
        });
    });
}

// Portfolio tabs
function setupPortfolioTabs() {
    const tabs = document.querySelectorAll('.portfolio-tab');
    const marketingProjects = document.getElementById('marketing-projects');
    const programmingProjects = document.getElementById('programming-projects');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => {
                t.classList.remove('bg-primary', 'text-white');
                t.classList.add('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
            });

            // Add active class to clicked tab
            tab.classList.remove('bg-gray-200', 'text-gray-700', 'dark:bg-gray-700', 'dark:text-gray-300');
            tab.classList.add('bg-primary', 'text-white');

            // Show corresponding projects
            if (tab.dataset.tab === 'marketing') {
                marketingProjects.classList.remove('hidden');
                programmingProjects.classList.add('hidden');
            } else {
                marketingProjects.classList.add('hidden');
                programmingProjects.classList.remove('hidden');
            }
        });
    });
}

// Mobile menu
function setupMobileMenu() {
    const menuButton = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeButton = document.getElementById('closeMobileMenu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    // Open menu
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close menu function
    const closeMenu = () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close menu when close button is clicked
    closeButton.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (!section.classList.contains('min-h-screen')) { // Don't animate hero section
            section.classList.add('section-fade');
            observer.observe(section);
        }
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupDarkMode();
    setupPortfolioTabs();
    setupMobileMenu();
    setupScrollAnimations();
});
