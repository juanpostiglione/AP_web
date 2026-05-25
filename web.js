// ========================
// SMOOTH SCROLLING & ACTIVE NAV LINK
// ========================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('.header');
const isHomePage = document.body.classList.contains('home-page');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
const cpuCores = navigator.hardwareConcurrency || 8;
const saveData = navigator.connection && navigator.connection.saveData;
const isLowPowerDevice = cpuCores <= 4 || Boolean(saveData);
let lastScrollY = window.scrollY;

// ── Scroll-system shared state ───────────────────────────────────
let _scrollRAFId    = null;
let _headerScrolled = false;
let _headerHidden   = false;
let _progressBar    = null;   // assigned by createProgressBar()

// Cache section top positions once so the scroll handler never reads
// offsetTop/getBoundingClientRect on every tick (prevents layout thrash)
let _cachedSectionTops = [];
const _cacheSections = () => {
    _cachedSectionTops = Array.from(sections).map(s => ({
        id:  s.getAttribute('id'),
        top: s.getBoundingClientRect().top + window.scrollY
    }));
};
_cacheSections();

const applyBrandClass = () => {
    const body = document.body;
    const repHero = document.querySelector('.rep-hero');
    if (!repHero) return 'default';

    if (repHero.classList.contains('rep-hero--chesterton')) {
        body.classList.add('brand-chesterton');
        return 'chesterton';
    }
    if (repHero.classList.contains('rep-hero--orange')) {
        body.classList.add('brand-orange');
        return 'orange';
    }
    if (repHero.classList.contains('rep-hero--worldfluid')) {
        body.classList.add('brand-worldfluid');
        return 'worldfluid';
    }

    return 'default';
};

const activeBrand = applyBrandClass();

// ── Unified passive RAF-throttled scroll handler ─────────────────
// ONE rAF tick handles nav, header, progress bar, and back-to-top.
// Zero layout-thrashing: only cached values are read inside the frame.
const _onScroll = () => {
    _scrollRAFId = null;
    const currentY = window.scrollY;

    // Active nav link — uses cached positions, no layout reads
    let current = '';
    for (const s of _cachedSectionTops) {
        if (currentY + 200 >= s.top) current = s.id;
    }
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const id   = href.includes('#') ? href.split('#').pop() : '';
        const active = id !== '' && id === current;
        if (link.classList.contains('active') !== active) {
            link.classList.toggle('active', active);
        }
    });

    // Header — hide on scroll-down, reveal on scroll-up (all pages)
    if (header) {
        const isScrollingDown = currentY > lastScrollY;
        const shouldScroll    = currentY > 20;
        const shouldHide      = currentY > 120 && isScrollingDown;
        if (_headerScrolled !== shouldScroll) { header.classList.toggle('is-scrolled', shouldScroll); _headerScrolled = shouldScroll; }
        if (_headerHidden   !== shouldHide)   { header.classList.toggle('is-hidden',   shouldHide);   _headerHidden   = shouldHide;   }
        lastScrollY = Math.max(currentY, 0);
    }

    // Progress bar
    if (_progressBar) {
        const maxH = document.documentElement.scrollHeight - window.innerHeight;
        if (maxH > 0) _progressBar.style.width = ((currentY / maxH) * 100) + '%';
    }

    // Back-to-top button — guarded, only writes when state changes
    if (backToTopBtn) {
        const show = currentY > 400;
        if (backToTopBtn.classList.contains('is-visible') !== show) {
            backToTopBtn.classList.toggle('is-visible', show);
        }
    }
};

window.addEventListener('scroll', () => {
    if (!_scrollRAFId) _scrollRAFId = requestAnimationFrame(_onScroll);
}, { passive: true });

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
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

// Observe service cards and project cards
if (!window.gsap) {
    document.querySelectorAll('.service-card, .project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
} else {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Observe rep-product-cards — only when GSAP is absent.
// When GSAP is present, revealBatches in initGsapMotion() handles them.
// Running both simultaneously causes a snap-to-visible glitch.
if (!window.gsap) {
    document.querySelectorAll('.rep-product-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(card);
    });
}

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

// Only use IO for story panels when GSAP is absent.
// When GSAP is present, initNosotrosStoryPanels() handles them — running
// both simultaneously causes opacity/transform conflicts.
if (storyPanels.length && !window.gsap) {
    const panelObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                panelObserver.unobserve(entry.target); // stop watching once triggered
            }
        });
    }, { threshold: 0.25, rootMargin: '0px 0px -5% 0px' });

    storyPanels.forEach((panel, index) => {
        panel.style.transitionDelay = `${index * 0.08}s`;
        panelObserver.observe(panel);
    });
}

// ========================
// PRODUCT CARDS REVEAL ON SCROLL
// ========================

const productCards = document.querySelectorAll('.product-card');

// Only use IO for product cards when GSAP is absent.
// When GSAP is loaded, revealBatches inside initGsapMotion() handles .product-card.
if (productCards.length && !window.gsap) {
    const productObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                productObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

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
// (scroll-hint resize is handled inside the debounced resize handler below)

// ========================
// SCROLL PROGRESS BAR
// ========================

const createProgressBar = () => {
    _progressBar = document.createElement('div');
    _progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #e83a4a 0%, #c42030 100%);
        width: 0%;
        z-index: 9999;
        pointer-events: none;
        will-change: width;
    `;
    document.body.appendChild(_progressBar);
    // Width is updated inside the unified _onScroll RAF handler — no extra listener needed
};

createProgressBar();

// ========================
// COUNTER ANIMATION FOR STATS
// ========================

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const animateStatNumber = (element, target, suffix, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const updateNum = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateNum);
        } else {
            element.textContent = target + suffix;
        }
    };
    updateNum();
};

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            const statNumbers = document.querySelectorAll('.stat__number');
            statNumbers.forEach(el => {
                const text = el.textContent.trim();
                const number = parseInt(text);
                const suffix = text.replace(/[0-9]/g, '');
                if (!isNaN(number)) {
                    animateStatNumber(el, number, suffix);
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
        _cacheSections(); // refresh cached section offsets after layout shift
        productScrollGrids.forEach(toggleScrollHint);
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
// BACK TO TOP BUTTON
// ========================

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    // Visibility is toggled inside the unified _onScroll handler — no extra listener
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================
// SECTION REVEAL ON SCROLL
// ========================

const sectionRevealElements = document.querySelectorAll('.section-reveal, .stagger-children');
if (sectionRevealElements.length) {
    const sectionRevealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    sectionRevealElements.forEach(el => sectionRevealObserver.observe(el));
}

// ========================
// HERO BACKGROUND SLIDESHOW & REVEAL
// ========================

const initHeroSlideshow = () => {
    const images = document.querySelectorAll('.hero-bg-image');
    const slogan = document.querySelector('.hero-slogan-center');
    if (!images.length) return;

    let currentIndex = 0;
    const interval = 7000;

    // Delayed dramatic reveal — image first, then text fades in
    setTimeout(() => {
        if (slogan) slogan.classList.add('is-revealed');
    }, 700);

    setInterval(() => {
        const prev = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        const next = images[currentIndex];

        prev.classList.remove('active');
        // Clean up will-change on the outgoing image after its fade ends
        prev.addEventListener('transitionend', () => {
            prev.style.willChange = '';
        }, { once: true });

        next.classList.add('active');
    }, interval);
};

initHeroSlideshow();

// ========================
// GSAP PREMIUM MOTION SYSTEM
// ========================

const initGsapMotion = () => {
    if (!window.gsap || prefersReducedMotion) return;

    if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }

    const brandMotion = {
        default: { ease: 'power2.out', y: 26, stagger: 0.1, duration: 0.82 },
        chesterton: { ease: 'power3.out', y: 28, stagger: 0.11, duration: 0.86 },
        orange: { ease: 'expo.out', y: 22, stagger: 0.1, duration: 0.8 },
        worldfluid: { ease: 'sine.out', y: 20, stagger: 0.09, duration: 0.84 }
    };

    const motionPreset = brandMotion[activeBrand] || brandMotion.default;
    const durationScale = isLowPowerDevice ? 0.72 : 1;
    const staggerScale = isLowPowerDevice ? 0.8 : 1;

    const heroLines = document.querySelectorAll('.gsap-hero-line');
    if (heroLines.length) {
        gsap.fromTo(
            heroLines,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.14,
                ease: 'power3.out',
                delay: 0.75
            }
        );
    }

    if (window.ScrollTrigger) {
        gsap.to('.hero-bg', {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        const serviceCards = document.querySelectorAll('.gsap-service-card');
        if (serviceCards.length) {
            gsap.set(serviceCards, { opacity: 0, y: 42 });
            gsap.to(serviceCards, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#services',
                    start: 'top 72%',
                    once: true
                }
            });
        }

        const statsCards = document.querySelectorAll('.gsap-stat-card');
        if (statsCards.length) {
            gsap.set(statsCards, { opacity: 0, y: 35, scale: 0.98 });
            gsap.to(statsCards, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.stats',
                    start: 'top 74%',
                    once: true
                }
            });
        }

        const footerCols = document.querySelectorAll('.gsap-footer-col');
        if (footerCols.length) {
            gsap.set(footerCols, { opacity: 0, y: 24 });
            gsap.to(footerCols, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 82%',
                    once: true
                }
            });
        }

        const innerHeroSelectors = [
            '.rep-hero__content',
            '.nosotros-hero__content',
            '.contact-hero__inner'
        ];

        innerHeroSelectors.forEach(selector => {
            const block = document.querySelector(selector);
            if (block) {
                gsap.fromTo(
                    block,
                    { y: motionPreset.y, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.95 * durationScale,
                        ease: motionPreset.ease,
                        delay: isMobileViewport ? 0.05 : 0.15
                    }
                );
            }
        });

        if (!isMobileViewport && !isLowPowerDevice) {
            const floatImageTargets = document.querySelectorAll('.nosotros-hero__img');
            floatImageTargets.forEach(img => {
                gsap.to(img, {
                    yPercent: 9,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: img.closest('.nosotros-hero'),
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            });
        }

        // .contact-card + .contact-services__item are handled by initContactAnimations()
        // — omitting them here prevents the double-gsap.set() conflict
        // story-panel-content is intentionally omitted here.
        // initNosotrosStoryPanels() owns all story panel animations; animating
        // the content separately caused compound opacity glitches.
        const revealBatches = [
            { selector: '.rep-product-card',    trigger: '.rep-products', y: 30, stagger: 0.1  },
            { selector: '.product-card',        trigger: '.product-grid', y: 34, stagger: 0.1  },
            { selector: '.contact-form',        trigger: '.contact-form', y: 24, stagger: 0    }
        ];

        revealBatches.forEach(batch => {
            const targets = document.querySelectorAll(batch.selector);
            const triggerEl = document.querySelector(batch.trigger);
            if (!targets.length || !triggerEl) return;

            gsap.set(targets, { opacity: 0, y: Math.round(batch.y * (isLowPowerDevice ? 0.72 : 1)) });
            gsap.to(targets, {
                opacity: 1,
                y: 0,
                duration: motionPreset.duration * durationScale,
                stagger: batch.stagger * staggerScale,
                ease: motionPreset.ease,
                scrollTrigger: {
                    trigger: triggerEl,
                    start: 'top 78%',
                    once: true
                }
            });
        });

        const sharedFooterCols = document.querySelectorAll('.footer-section:not(.gsap-footer-col)');
        if (sharedFooterCols.length) {
            gsap.set(sharedFooterCols, { opacity: 0, y: 20 });
            gsap.to(sharedFooterCols, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.footer',
                    start: 'top 84%',
                    once: true
                }
            });
        }

        const hoverTargets = document.querySelectorAll('.service-card, .rep-product-card, .contact-card, .product-card');
        hoverTargets.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (isMobileViewport || isLowPowerDevice) return;
                gsap.to(card, { y: -4, duration: 0.25, ease: 'power2.out' });
            });
            card.addEventListener('mouseleave', () => {
                if (isMobileViewport || isLowPowerDevice) return;
                gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out' });
            });
        });

        const navItems = document.querySelectorAll('.nav-link');
        navItems.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, { y: -1, duration: 0.2, ease: 'power1.out' });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(link, { y: 0, duration: 0.2, ease: 'power1.out' });
            });
        });

        ScrollTrigger.refresh();
    }
};

initGsapMotion();

// ========================
// INDUSTRIAL PREMIUM INTERACTIONS
// Metallic 3D tilt · Magnetic CTA · Word-reveal headings
// Animated stat bars · GSAP-driven header lines
// ========================

const initIndustrialEffects = () => {
    if (prefersReducedMotion) return;

    // ── 1. Service Card 3D Perspective Tilt (desktop) ─────────────────
    // getBoundingClientRect() is cached on mouseenter so mousemove never
    // forces a layout read on every pixel of movement.
    if (!isMobileViewport && window.gsap) {
        document.querySelectorAll('.service-card').forEach(card => {
            let _tiltRect = null;
            card.addEventListener('mouseenter', () => {
                _tiltRect = card.getBoundingClientRect(); // cache once per hover
            });
            card.addEventListener('mousemove', (e) => {
                if (!_tiltRect) _tiltRect = card.getBoundingClientRect();
                const cx  = _tiltRect.left + _tiltRect.width  / 2;
                const cy  = _tiltRect.top  + _tiltRect.height / 2;
                const rotY =  ((e.clientX - cx) / (_tiltRect.width  / 2)) * 7;
                const rotX = -((e.clientY - cy) / (_tiltRect.height / 2)) * 5;
                gsap.to(card, {
                    rotationY: rotY,
                    rotationX: rotX,
                    transformPerspective: 900,
                    ease: 'power2.out',
                    duration: 0.35,
                    overwrite: 'auto'
                });
            });
            card.addEventListener('mouseleave', () => {
                _tiltRect = null; // invalidate cache
                gsap.to(card, {
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.65,
                    ease: 'power3.out',
                    overwrite: 'auto'
                });
            });
        });
    }

    // ── 2. Magnetic Hero CTA Button (desktop) ─────────────────────────
    const heroCTA = document.querySelector('.hero-cta-link');
    if (heroCTA && !isMobileViewport && window.gsap) {
        heroCTA.addEventListener('mousemove', (e) => {
            const r  = heroCTA.getBoundingClientRect();
            const mx = (e.clientX - r.left - r.width  / 2) * 0.4;
            const my = (e.clientY - r.top  - r.height / 2) * 0.4;
            gsap.to(heroCTA, { x: mx, y: my, duration: 0.4, ease: 'power2.out' });
        });
        heroCTA.addEventListener('mouseleave', () => {
            gsap.to(heroCTA, { x: 0, y: 0, duration: 0.75, ease: 'elastic.out(1, 0.38)' });
        });
    }

    if (!window.gsap || !window.ScrollTrigger) return;

    // ── 3. GSAP Word-by-Word Reveal for Section Headings ──────────────
    document.querySelectorAll('.section-header').forEach(header => {
        const h2     = header.querySelector('h2');
        const kicker = header.querySelector('.section-kicker');
        const line   = header.querySelector('.header-line');

        // Hand GSAP full control: override CSS-based section-reveal on these elements
        if (header.classList.contains('section-reveal')) {
            gsap.set(header, { opacity: 1, y: 0 });
        }

        // Split h2 text into per-word clip spans (guard against double-split)
        if (h2 && !h2.dataset.gsapSplit) {
            h2.dataset.gsapSplit = '1';
            const words = h2.textContent.trim().split(/\s+/);
            h2.innerHTML = words
                .map(w => `<span class="gsap-word-outer"><span class="gsap-word-inner">${w}</span></span>`)
                .join('\u00a0'); // non-breaking space keeps word spacing after DOM split
        }

        const tl = gsap.timeline({
            scrollTrigger: { trigger: header, start: 'top 84%', once: true }
        });

        if (kicker) {
            gsap.set(kicker, { opacity: 0, y: 10 });
            tl.to(kicker, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        }

        if (h2) {
            const spans = h2.querySelectorAll('.gsap-word-inner');
            gsap.set(spans, { y: '108%' });
            tl.to(spans, {
                y: '0%',
                duration: 0.72,
                stagger: 0.09,
                ease: 'power3.out'
            }, kicker ? '+=0.04' : 0);
        }

        if (line) {
            gsap.set(line, { scaleX: 0, transformOrigin: 'left' });
            tl.to(line, { scaleX: 1, duration: 0.8, ease: 'power3.out' }, '-=0.35');
        }
    });

    // ── 4. Stats Section Header Word Reveal (separate element structure) ─
    const statsHeader = document.querySelector('.stats__header');
    if (statsHeader && !statsHeader.dataset.gsapDone) {
        statsHeader.dataset.gsapDone = '1';
        const kicker = statsHeader.querySelector('.stats__kicker');
        const title  = statsHeader.querySelector('.stats__title');

        if (statsHeader.classList.contains('section-reveal')) {
            gsap.set(statsHeader, { opacity: 1, y: 0 });
        }

        const tl2 = gsap.timeline({
            scrollTrigger: { trigger: statsHeader, start: 'top 84%', once: true }
        });

        if (kicker) {
            gsap.set(kicker, { opacity: 0, y: 10 });
            tl2.to(kicker, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        }
        if (title && !title.dataset.gsapSplit) {
            title.dataset.gsapSplit = '1';
            const words = title.textContent.trim().split(/\s+/);
            title.innerHTML = words
                .map(w => `<span class="gsap-word-outer"><span class="gsap-word-inner">${w}</span></span>`)
                .join('\u00a0');
            const spans = title.querySelectorAll('.gsap-word-inner');
            gsap.set(spans, { y: '108%' });
            tl2.to(spans, { y: '0%', duration: 0.72, stagger: 0.09, ease: 'power3.out' }, kicker ? '+=0.04' : 0);
        }
    }

    // ── 5. Animated Stat Bars via GSAP ScrollTrigger ──────────────────
    document.querySelectorAll('.stat__bar').forEach(bar => {
        gsap.fromTo(bar,
            { width: 0 },
            {
                width: 64,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: { trigger: bar, start: 'top 82%', once: true }
            }
        );
    });

    // ── 6. Standalone Header-Line Reveals (outside .section-header) ───
    document.querySelectorAll('.header-line').forEach(line => {
        if (line.closest('.section-header') || line.closest('.stats__header')) return;
        gsap.fromTo(line,
            { scaleX: 0, transformOrigin: 'left' },
            {
                scaleX: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: line, start: 'top 86%', once: true }
            }
        );
    });

    // ── 7. Rep-product card stagger reveal (if ScrollTrigger reloads) ─
    const repGrid = document.querySelector('.rep-products__grid');
    if (repGrid) {
        ScrollTrigger.refresh();
    }
};

initIndustrialEffects();

// ========================
// PAGE EXIT TRANSITION
// Fade + lift out on internal navigation for a seamless feel
// ========================
const initPageTransitions = () => {
    if (prefersReducedMotion || !window.gsap) return;

    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href') || '';
        // Skip: anchors, external URLs, mailto/tel, empty
        if (!href
            || href.startsWith('#')
            || href.startsWith('mailto:')
            || href.startsWith('tel:')
            || href.startsWith('http')
            || href.startsWith('//')
        ) return;

        link.addEventListener('click', e => {
            // Allow browser native behaviour for modified clicks (new tab, etc.)
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            e.preventDefault();
            const dest = href;
            gsap.to(document.body, {
                opacity: 0,
                y: -10,
                duration: 0.28,
                ease: 'power2.in',
                onComplete: () => { window.location.href = dest; }
            });
        });
    });
};

initPageTransitions();

// ========================
// PAGE-ENTER ANIMATION & BFCACHE RECOVERY
// When the page is restored from the browser's back/forward cache
// (e.persisted === true) GSAP may have left body at opacity:0.
// The pageshow handler clears that immediately.
// On first load, a smooth fade-in replaces the hard snap.
// ========================
if (window.gsap && !prefersReducedMotion) {
    // Fade body in from zero on initial page load
    gsap.fromTo(document.body,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out', delay: 0.02, clearProps: 'all' }
    );
}

window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    // Restore from bfcache — clear any inline styles left by the exit transition
    document.body.style.opacity = '';
    document.body.style.transform = '';
    if (window.gsap) gsap.set(document.body, { clearProps: 'opacity,y,transform' });
});

// ========================
// BREADCRUMB REVEAL
// Animate breadcrumb in after page load
// ========================
const breadcrumb = document.querySelector('.breadcrumb');
if (breadcrumb) {
    // Use CSS transition triggered by class (already defined in the CSS)
    requestAnimationFrame(() => {
        setTimeout(() => breadcrumb.classList.add('is-loaded'), 120);
    });
}

// ========================
// BRAND-AWARE PROGRESS BAR
// Update the dynamically created progress bar to match brand color
// ========================
// _progressBar is set synchronously by createProgressBar() above — no polling needed
const syncProgressBarToBrand = () => {
    if (!_progressBar) return;
    const computed   = getComputedStyle(document.documentElement);
    const primaryRed = computed.getPropertyValue('--primary-red').trim() || '#e83a4a';
    const accentRed  = computed.getPropertyValue('--accent-red').trim()  || '#c42030';
    _progressBar.style.background = `linear-gradient(90deg, ${primaryRed} 0%, ${accentRed} 100%)`;
};

syncProgressBarToBrand();

// ========================
// REP HERO LOGO ENTRANCE
// GSAP pop-in on brand hero logo
// ========================
if (window.gsap) {
    const repLogo = document.querySelector('.rep-hero__logo');
    if (repLogo) {
        gsap.fromTo(repLogo,
            { opacity: 0, scale: 0.88, y: 14 },
            { opacity: 1, scale: 1, y: 0, duration: 0.72, ease: 'back.out(1.8)', delay: 0.2 }
        );
    }

    // Rep hero subtitle fade in after title
    const repSubtitle = document.querySelector('.rep-hero__subtitle');
    if (repSubtitle) {
        gsap.fromTo(repSubtitle,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.65, ease: 'power2.out', delay: 0.55 }
        );
    }
}

// ========================
// NOSOTROS: GSAP STORY PANEL STAGGER
// Each panel in .story--page gets a staggered GSAP reveal
// (overrides / supplements the CSS IntersectionObserver approach)
// ========================
const initNosotrosStoryPanels = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const storyPage = document.querySelector('.story--page');
    if (!storyPage) return;

    const panels = storyPage.querySelectorAll('.story-panel');

    // Reduced-motion fallback: skip animations, just make panels visible
    if (prefersReducedMotion) {
        panels.forEach(p => p.classList.add('is-visible'));
        return;
    }

    // Override CSS opacity:0 on .story-panel-content so it doesn't need its
    // own separate animation. The panel container fade-in handles visibility;
    // individual child elements (h3, kicker, list) do their own GSAP entrances.
    panels.forEach(p => {
        const content = p.querySelector('.story-panel-content');
        if (content) gsap.set(content, { opacity: 1, y: 0 });
    });

    panels.forEach((panel, i) => {
        // ── Panel container reveal ──────────────────────────────────────
        // The IO approach is disabled when GSAP loads, so we animate the
        // container directly. Without this the panel stays at opacity: 0.
        gsap.fromTo(panel,
            { opacity: 0, y: 46 },
            {
                opacity: 1, y: 0,
                duration: 0.82,
                ease: 'power2.out',
                scrollTrigger: { trigger: panel, start: 'top 86%', once: true }
            }
        );

        // ── Image clip-path reveal ──────────────────────────────────────
        // CSS uses clip-path: inset(0 0 100% 0) + .is-visible to reveal.
        // Since .is-visible is never added when GSAP loads, override via GSAP.
        const img = panel.querySelector('.story-panel-media img');
        if (img) {
            gsap.fromTo(img,
                { clipPath: 'inset(0 0 100% 0)' },
                {
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: { trigger: panel, start: 'top 86%', once: true }
                }
            );

            // Parallax scroll (different property — no conflict with clip-path above)
            if (!isMobileViewport) {
                gsap.to(img, {
                    yPercent: 8,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: panel,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                });
            }
        }

        // ── Step-kicker entrance ────────────────────────────────────────
        const kicker = panel.querySelector('.step-kicker');
        if (kicker) {
            gsap.fromTo(kicker,
                { opacity: 0, x: -14 },
                {
                    opacity: 1, x: 0,
                    duration: 0.55,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: panel, start: 'top 78%', once: true }
                }
            );
        }

        // ── h3 clip-reveal upward ───────────────────────────────────────
        const h3 = panel.querySelector('.story-panel-content h3');
        if (h3) {
            gsap.fromTo(h3,
                { opacity: 0, y: 22 },
                {
                    opacity: 1, y: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    delay: 0.12,
                    scrollTrigger: { trigger: panel, start: 'top 78%', once: true }
                }
            );
        }

        // ── List items stagger ──────────────────────────────────────────
        const listItems = panel.querySelectorAll('.story-list li, .story-area-list li');
        if (listItems.length) {
            gsap.fromTo(listItems,
                { opacity: 0, x: -10 },
                {
                    opacity: 1, x: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'power2.out',
                    delay: 0.25,
                    scrollTrigger: { trigger: panel, start: 'top 74%', once: true }
                }
            );
        }
    });

    ScrollTrigger.refresh();
};

initNosotrosStoryPanels();

// ========================
// CONTACT PAGE: GSAP card stagger + form reveal
// ========================
const initContactAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) return;

    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length) {
        gsap.fromTo(contactCards,
            { opacity: 0, y: 32, scale: 0.97 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.65,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.contact-grid', start: 'top 78%', once: true }
            }
        );
    }

    const serviceItems = document.querySelectorAll('.contact-services__item');
    if (serviceItems.length) {
        gsap.fromTo(serviceItems,
            { opacity: 0, x: -16 },
            {
                opacity: 1, x: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: { trigger: '.contact-services', start: 'top 80%', once: true }
            }
        );
    }
};

initContactAnimations();

requestAnimationFrame(() => {
    document.body.classList.add('is-ready');
});
