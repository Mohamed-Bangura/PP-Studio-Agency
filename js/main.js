/* ===================================
   PP STUDIO AGENCY - MAIN.JS
   Premium Dark Creative Technology Theme
   =================================== */

// ===== UTILITY: Debounce =====
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== NAVIGATION =====
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== HEADER SCROLL EFFECT =====
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ===== FADE-IN ANIMATIONS =====
function initFadeInAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        fadeElements.forEach(el => el.classList.add('visible'));
    }
}

// ===== FAQ ACCORDION =====
function initFAQ() {
    const faqCards = document.querySelectorAll('.faq-card');

    faqCards.forEach(card => {
        const question = card.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            const isActive = card.classList.contains('active');

            faqCards.forEach(c => c.classList.remove('active'));

            if (!isActive) {
                card.classList.add('active');
            }
        });

        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    let scrollBtn = document.querySelector('.scroll-to-top');

    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);
    }

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, 100));
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initFadeInAnimations();
    initFAQ();
    initScrollToTop();

    handleHeaderScroll();

    window.addEventListener('scroll', debounce(() => {
        handleHeaderScroll();
        updateActiveNavLink();
    }, 100), { passive: true });
});
