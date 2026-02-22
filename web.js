// ========================
// SMOOTH SCROLLING & ACTIVE NAV LINK
// ========================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('.header');
const isHomePage = document.body.classList.contains('home-page');
let lastScrollY = window.scrollY;

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    if (header && isHomePage) {
        const currentY = window.scrollY;
        const isScrollingDown = currentY > lastScrollY;

        if (currentY > 20) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }

        if (currentY > 120 && isScrollingDown) {
            header.classList.add('is-hidden');
        } else {
            header.classList.remove('is-hidden');
        }

        lastScrollY = Math.max(currentY, 0);
    }
});

// ========================
// MOBILE MENU TOGGLE
// ========================

const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navLinksContainer.classList.contains('active') 
        ? 'rotate(45deg) translate(10px, 10px)' 
        : '';
    spans[1].style.opacity = navLinksContainer.classList.contains('active') 
        ? '0' 
        : '1';
    spans[2].style.transform = navLinksContainer.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -7px)' 
        : '';
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        navToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = '';
            span.style.opacity = '1';
        });
    });
});

// ========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and project cards
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ========================
// BUTTON INTERACTIONS
// ========================

const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Remove any existing ripple
        const existingRipple = this.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        this.appendChild(ripple);
    });
});

// Add ripple animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================
// STORY PANELS REVEAL ON SCROLL
// ========================

const storyPanels = document.querySelectorAll('.story-panel');

if (storyPanels.length) {
    const panelObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.35, rootMargin: '0px 0px -10% 0px' });

    storyPanels.forEach((panel, index) => {
        panel.style.transitionDelay = `${index * 0.08}s`;
        panelObserver.observe(panel);
    });
}

// ========================
// PRODUCT CARDS REVEAL ON SCROLL
// ========================

const productCards = document.querySelectorAll('.product-card');

if (productCards.length) {
    const productObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -12% 0px' });

    productCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.06}s`;
        productObserver.observe(card);
    });
}

const productScrollGrids = document.querySelectorAll('.product-grid--scroll');

const toggleScrollHint = (grid) => {
    const hasOverflow = grid.scrollWidth > grid.clientWidth + 4;
    const previous = grid.previousElementSibling;
    const existingHint = previous && previous.classList.contains('scroll-hint') ? previous : null;

    if (hasOverflow && !existingHint) {
        const hint = document.createElement('div');
        hint.className = 'scroll-hint';
        hint.textContent = 'Desliza hacia la derecha para ver más';
        grid.parentNode.insertBefore(hint, grid);
    }

    if (!hasOverflow && existingHint) {
        existingHint.remove();
    }
};

productScrollGrids.forEach(toggleScrollHint);
window.addEventListener('resize', () => productScrollGrids.forEach(toggleScrollHint));

// ========================
// SCROLL PROGRESS BAR
// ========================

const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #e63946 0%, #d62828 100%);
        width: 0%;
        z-index: 999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercent = (scrolled / windowHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createProgressBar();

// ========================
// COUNTER ANIMATION FOR STATS
// ========================

const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (element.textContent.includes('+') ? '+' : element.textContent.includes('%') ? '%' : '');
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            const statNumbers = document.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ========================
// SMOOTH LINK NAVIGATION
// ========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================
// KEYBOARD NAVIGATION
// ========================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
    }
});

// ========================
// WINDOW RESIZE HANDLER
// ========================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            navLinksContainer.classList.remove('active');
            navToggle.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        }
    }, 250);
});

console.log('A.P ASOCIADOS C.A Website Loaded Successfully');

// ========================
// HERO BACKGROUND SLIDESHOW
// ========================

const initHeroSlideshow = () => {
    const images = document.querySelectorAll('.hero-bg-image');
    if (!images.length) return;

    let currentIndex = 0;
    const interval = 7000;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, interval);
};

initHeroSlideshow();
