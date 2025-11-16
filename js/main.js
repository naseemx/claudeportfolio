// ===================================
// INITIALIZATION & SETUP
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initLenis();
    initGSAP();
    initHeader();
    initMobileMenu();
    initHeroAnimations();
    initSplitTextAnimations();
    initProjectCards();
    initDesignGallery();
    initHallOfFame();
    initAboutSection();
    initSkillsSection();
    initProcessSection();
    initTestimonials();
    initContactSection();
    initParallax();
    initScrollIndicator();
});

// ===================================
// LENIS SMOOTH SCROLL
// ===================================

let lenis;

function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Handle anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5,
                });
                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ===================================
// GSAP SETUP
// ===================================

function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Set default easing
    gsap.defaults({
        ease: 'power3.out',
        duration: 1
    });
}

// ===================================
// HEADER SCROLL BEHAVIOR
// ===================================

function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        onUpdate: (self) => {
            const currentScroll = self.scroll();

            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }
    });
}

// ===================================
// MOBILE MENU
// ===================================

function initMobileMenu() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            lenis.stop();
        } else {
            lenis.start();
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
}

function closeMobileMenu() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobileMenu');

    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    lenis.start();
}

// ===================================
// HERO SECTION ANIMATIONS
// ===================================

function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Animate hero content on load
    tl.from('.hero-label', {
        opacity: 0,
        y: 30,
        duration: 0.8
    })
    .from('.hero-line', {
        opacity: 0,
        y: 100,
        stagger: 0.15,
        duration: 1
    }, '-=0.4')
    .from('.subtitle-line', {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8
    }, '-=0.6')
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, '-=0.4')
    .from('.hero-cta .btn', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8
    }, '-=0.4');

    // Animate visual layers
    gsap.from('.visual-layer', {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
    });

    // Mouse parallax on hero visual
    const heroVisual = document.querySelector('.hero-visual');
    const layers = document.querySelectorAll('.visual-layer');

    if (window.innerWidth > 768) {
        heroVisual.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { width, height } = heroVisual.getBoundingClientRect();
            const x = (clientX / width - 0.5) * 2;
            const y = (clientY / height - 0.5) * 2;

            layers.forEach((layer, index) => {
                const depth = (index + 1) * 10;
                gsap.to(layer, {
                    x: x * depth,
                    y: y * depth,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });

        heroVisual.addEventListener('mouseleave', () => {
            layers.forEach(layer => {
                gsap.to(layer, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// ===================================
// SPLIT TEXT ANIMATIONS
// ===================================

function initSplitTextAnimations() {
    const splitTitles = document.querySelectorAll('.split-text');

    splitTitles.forEach(title => {
        const lines = title.querySelectorAll('.title-line');

        gsap.from(lines, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1,
            ease: 'power4.out'
        });
    });
}

// ===================================
// PROJECT CARDS ANIMATIONS
// ===================================

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, index) => {
        const image = card.querySelector('.project-image');
        const content = card.querySelector('.project-content');

        // Card entrance animation
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out'
        });

        // Image clip-path reveal
        gsap.from(image, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.2
        });

        // Content stagger
        const contentElements = content.children;
        gsap.from(contentElements, {
            scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.4
        });
    });
}

// ===================================
// DESIGN GALLERY ANIMATIONS
// ===================================

function initDesignGallery() {
    const designItems = document.querySelectorAll('.design-item');

    designItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.9,
            y: 40,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });

        // Add extra filter animation on scroll
        ScrollTrigger.create({
            trigger: item,
            start: 'top 70%',
            end: 'bottom 30%',
            onEnter: () => {
                gsap.to(item, {
                    filter: 'grayscale(0.3) blur(0.3px)',
                    duration: 0.6
                });
            },
            onLeave: () => {
                gsap.to(item, {
                    filter: 'grayscale(0.5) blur(0.5px)',
                    duration: 0.6
                });
            },
            onEnterBack: () => {
                gsap.to(item, {
                    filter: 'grayscale(0.3) blur(0.3px)',
                    duration: 0.6
                });
            },
            onLeaveBack: () => {
                gsap.to(item, {
                    filter: 'grayscale(0.5) blur(0.5px)',
                    duration: 0.6
                });
            }
        });
    });
}

// ===================================
// HALL OF FAME ANIMATIONS
// ===================================

function initHallOfFame() {
    const fameCards = document.querySelectorAll('.fame-card');

    fameCards.forEach((card, index) => {
        const image = card.querySelector('.fame-image');

        // Card entrance
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 60,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out'
        });

        // Image clip-path reveal
        gsap.from(image, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.3
        });
    });
}

// ===================================
// ABOUT SECTION ANIMATIONS
// ===================================

function initAboutSection() {
    const storyBlocks = document.querySelectorAll('.story-block');

    storyBlocks.forEach((block, index) => {
        gsap.from(block, {
            scrollTrigger: {
                trigger: block,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Parallax on about visual
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage && window.innerWidth > 768) {
        gsap.to(aboutImage, {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -100,
            ease: 'none'
        });
    }
}

// ===================================
// SKILLS SECTION ANIMATIONS
// ===================================

function initSkillsSection() {
    const skillCategories = document.querySelectorAll('.skill-category');

    skillCategories.forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
}

// ===================================
// PROCESS SECTION - STICKY SCROLL
// ===================================

function initProcessSection() {
    const processSteps = document.querySelectorAll('.process-step');

    // Entrance animations
    processSteps.forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: '.process-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Sequential activation on scroll
    processSteps.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: step,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => {
                step.classList.add('active');
            },
            onLeave: () => {
                step.classList.remove('active');
            },
            onEnterBack: () => {
                step.classList.add('active');
            },
            onLeaveBack: () => {
                step.classList.remove('active');
            }
        });
    });
}

// ===================================
// TESTIMONIALS ANIMATIONS
// ===================================

function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
    });
}

// ===================================
// CONTACT SECTION ANIMATIONS
// ===================================

function initContactSection() {
    // Animate contact header
    const contactLines = document.querySelectorAll('.contact-section .title-line');
    gsap.from(contactLines, {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 80,
        stagger: 0.15,
        duration: 1,
        ease: 'power4.out'
    });

    // Animate form groups
    const formGroups = document.querySelectorAll('.form-group');
    gsap.from(formGroups, {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Animate submit button
    gsap.from('.btn-submit', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4
    });

    // Animate social links
    const socialLinks = document.querySelectorAll('.social-link');
    gsap.from(socialLinks, {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;

        // Animate button
        gsap.to(submitBtn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });

        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            submitBtn.innerHTML = 'Message Sent! ✓';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// ===================================
// PARALLAX EFFECTS
// ===================================

function initParallax() {
    // Only apply parallax on desktop
    if (window.innerWidth < 768) return;

    // Hero visual layers parallax on scroll
    gsap.to('.layer-1', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 150,
        ease: 'none'
    });

    gsap.to('.layer-2', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        ease: 'none'
    });

    gsap.to('.layer-3', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 50,
        ease: 'none'
    });

    // Section titles parallax
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        gsap.to(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -50,
            ease: 'none'
        });
    });
}

// ===================================
// SCROLL INDICATOR
// ===================================

function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            onUpdate: (self) => {
                if (self.scroll() > 200) {
                    gsap.to(scrollIndicator, {
                        opacity: 0,
                        duration: 0.3
                    });
                } else {
                    gsap.to(scrollIndicator, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            }
        });
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Smooth reveal utility
function revealOnScroll(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const defaults = {
        start: 'top 85%',
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1
    };
    const settings = { ...defaults, ...options };

    elements.forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: settings.start,
                toggleActions: 'play none none reverse'
            },
            opacity: settings.opacity,
            y: settings.y,
            duration: settings.duration
        });
    });
}

// Clip-path reveal utility
function clipReveal(selector, options = {}) {
    const elements = document.querySelectorAll(selector);
    const defaults = {
        start: 'top 80%',
        duration: 1.2,
        stagger: 0.2
    };
    const settings = { ...defaults, ...options };

    elements.forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: settings.start,
                toggleActions: 'play none none reverse'
            },
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            duration: settings.duration
        });
    });
}

// ===================================
// RESIZE HANDLER
// ===================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(10);
    lenis.destroy();
}

// Lazy load images (if you add real images)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// DEBUG INFO (Remove in production)
// ===================================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%c🎨 Portfolio Loaded Successfully!', 'color: #c0ff00; font-size: 16px; font-weight: bold;');
    console.log('%cLenis Smooth Scroll: Active', 'color: #00ff88;');
    console.log('%cGSAP Animations: Active', 'color: #00ff88;');
    console.log('%cScrollTrigger: Active', 'color: #00ff88;');
}
