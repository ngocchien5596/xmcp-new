/* ========================================================
   VIETTEL SOFTWARE - GLOBAL INTERACTIONS
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initScrollAnimations();
    initCounters();
    initTabs();
    initWheel();
});

/**
 * Handle Sticky Header visibility and style changes
 */
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Reveal elements as they enter the viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Count up animation for statistics
 */
function initCounters() {
    const countElements = document.querySelectorAll('.counter');
    if (countElements.length === 0) return;

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseInt(target.getAttribute('data-target'));
                if (!target.classList.contains('counted')) {
                    if (window.countUp) {
                        const countUpAnim = new countUp.CountUp(target, endVal, { duration: 2.5 });
                        if (!countUpAnim.error) {
                            countUpAnim.start();
                            target.classList.add('counted');
                        }
                    } else {
                        // Fallback if library not loaded
                        target.innerText = endVal;
                        target.classList.add('counted');
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    countElements.forEach(el => countObserver.observe(el));
}

/**
 * Interactive Wheel logic for Why Choose Us
 */
function initWheel() {
    const wrapper = document.querySelector('.wheel-wrapper');
    const circle = document.querySelector('.wheel-circle');
    const items = document.querySelectorAll('.wheel-item');
    if (!wrapper || !circle || items.length === 0) return;

    const radius = wrapper.offsetWidth / 2;
    const totalItems = items.length;
    let autoRotation = 0;
    let isAutoPlaying = true;
    let autoPlayTimer;

    // Place each item on the orbit (runs once)
    items.forEach((item, index) => {
        const angle = (index / totalItems) * 360 - 90;
        item.dataset.angle = angle;
        const finalRadius = radius * 1.05;
        item.style.transform = `rotate(${angle}deg) translate(${finalRadius}px)`;

        item.addEventListener('click', () => {
            // Freeze wheel in place — no rotation change
            isAutoPlaying = false;
            clearTimeout(autoPlayTimer);

            // Highlight clicked item
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Show corresponding content
            const targetId = item.dataset.target;
            updateWheelContent(targetId);

            // Resume auto-rotation after 8 seconds
            autoPlayTimer = setTimeout(() => {
                isAutoPlaying = true;
            }, 2000);
        });
    });

    // Animation loop — rotates .wheel-circle only (not .wheel-wrapper)
    function animate() {
        if (isAutoPlaying) {
            autoRotation -= 0.05;
        }

        // Rotate the circle (orbit ring + items rotate together)
        circle.style.transform = `rotate(${autoRotation}deg)`;

        // Counter-rotate each card to keep it upright
        items.forEach(item => {
            const itemAngle = parseFloat(item.dataset.angle);
            const card = item.querySelector('.wheel-item-card');
            if (card) {
                card.style.transform = `translate(-50%, -50%) rotate(${-itemAngle - autoRotation}deg)`;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();



    function updateWheelContent(id) {
        const contents = document.querySelectorAll('.wheel-content-item');
        contents.forEach(content => {
            content.classList.remove('active');
            if (content.id === id) {
                content.classList.add('active');
            }
        });
    }

    // Initialize first item's content without stopping auto-rotation
    if (items[0]) {
        items[0].classList.add('active');
        const firstTarget = items[0].dataset.target;
        if (firstTarget) updateWheelContent(firstTarget);
    }
}

/**
 * Tab system for News & Blog
 */
function initTabs() {
    const firstTab = document.querySelector('.tab-btn.active');
    const indicator = document.getElementById('tab-indicator');
    
    if (firstTab && indicator) {
        indicator.style.width = firstTab.offsetWidth + 'px';
        indicator.style.left = firstTab.offsetLeft + 'px';
    }
}

/**
 * Switch tabs and filter content
 * @param {HTMLElement} btn - The tab button clicked
 * @param {string} category - The category to filter
 */
window.switchTab = function(btn, category) {
    // Update active class
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Move indicator
    const indicator = document.getElementById('tab-indicator');
    if (indicator) {
        indicator.style.width = btn.offsetWidth + 'px';
        indicator.style.left = btn.offsetLeft + 'px';
    }

    // Filter logic
    const items = document.querySelectorAll('.filter-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = '';
                void item.offsetWidth; // Trigger reflow
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.transition = 'all 0.4s ease';
            } else {
                item.style.display = 'none';
            }
        }, 300);
    });
};

/**
 * Stories Carousel navigation
 * @param {string} direction - 'left' or 'right'
 */
window.slideStories = function(direction) {
    const container = document.getElementById('stories-container');
    if (!container) return;
    const scrollAmount = 400;
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};
