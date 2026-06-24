/* ============================================
   EDUARDO SETTE - PORTFÓLIO PROFISSIONAL
   Main JavaScript - Core Functionality
   ============================================ */

// ============================================
// THEME MANAGER
// ============================================

class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || this.detectSystemTheme() || 'light';
        this.init();
    }
    
    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }
    
    detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }
    
    getStoredTheme() {
        return localStorage.getItem('theme');
    }
    
    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        this.setStoredTheme(theme);
        
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    bindEvents() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
}

// ============================================
// MOBILE MENU
// ============================================

class MobileMenu {
    constructor() {
        this.menu = document.getElementById('nav-menu');
        this.toggle = document.getElementById('nav-toggle');
        this.close = document.getElementById('nav-close');
        this.links = document.querySelectorAll('.nav__link');
        
        this.init();
    }
    
    init() {
        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.open());
        }
        
        if (this.close) {
            this.close.addEventListener('click', () => this.close());
        }
        
        this.links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.menu && this.menu.classList.contains('active')) {
                if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
                    this.close();
                }
            }
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menu && this.menu.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    open() {
        if (this.menu) {
            this.menu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    close() {
        if (this.menu) {
            this.menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================

class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
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
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

class HeaderScroll {
    constructor() {
        this.header = document.getElementById('header');
        this.lastScroll = 0;
        this.scrollThreshold = 50;
        
        this.init();
    }
    
    init() {
        if (this.header) {
            window.addEventListener('scroll', () => this.handleScroll());
        }
    }
    
    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > this.scrollThreshold) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
        
        this.lastScroll = currentScroll;
    }
}

// ============================================
// FAQ ACCORDION
// ============================================

class FAQAccordion {
    constructor() {
        this.items = document.querySelectorAll('.faq__item');
        this.init();
    }
    
    init() {
        this.items.forEach(item => {
            const question = item.querySelector('.faq__question');
            
            if (question) {
                question.addEventListener('click', () => {
                    this.toggle(item);
                });
            }
        });
    }
    
    toggle(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.items.forEach(i => i.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================

class TestimonialsCarousel {
    constructor() {
        this.track = document.getElementById('testimonials-track');
        this.prevBtn = document.getElementById('testimonials-prev');
        this.nextBtn = document.getElementById('testimonials-next');
        this.dots = document.querySelectorAll('.dot');
        this.currentIndex = 0;
        this.totalSlides = 0;
        this.autoPlayInterval = null;
        
        this.init();
    }
    
    init() {
        if (!this.track) return;
        
        this.totalSlides = this.track.children.length;
        
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
        
        // Touch support
        this.addTouchSupport();
    }
    
    goTo(index) {
        this.currentIndex = index;
        this.update();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.update();
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.update();
    }
    
    update() {
        if (this.track) {
            this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        }
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.next(), 5000);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        this.handleSwipe = () => {
            const diff = touchStartX - touchEndX;
            const threshold = 50;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        };
    }
}

// ============================================
// PROJECTS FILTER
// ============================================

class ProjectsFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        
        this.init();
    }
    
    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.filter(filter);
                
                // Update active button
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
    
    filter(filter) {
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                // Trigger animation
                setTimeout(() => {
                    card.classList.add('animated');
                }, 10);
            } else {
                card.classList.add('hidden');
                card.classList.remove('animated');
            }
        });
    }
}

// ============================================
// BLOG SEARCH
// ============================================

class BlogSearch {
    constructor() {
        this.searchInput = document.getElementById('blog-search');
        this.blogCards = document.querySelectorAll('.blog-card');
        
        this.init();
    }
    
    init() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                this.search(e.target.value);
            });
        }
    }
    
    search(query) {
        const searchTerm = query.toLowerCase().trim();
        
        this.blogCards.forEach(card => {
            const title = card.querySelector('.blog-card__title');
            const excerpt = card.querySelector('.blog-card__excerpt');
            
            if (title && excerpt) {
                const titleText = title.textContent.toLowerCase();
                const excerptText = excerpt.textContent.toLowerCase();
                
                if (titleText.includes(searchTerm) || excerptText.includes(searchTerm)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.classList.add('animated');
                    }, 10);
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('animated');
                }
            }
        });
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.init();
    }
    
    init() {
        // Add animation class to elements
        const elementsToAnimate = [
            ...document.querySelectorAll('.service-card'),
            ...document.querySelectorAll('.project-card'),
            ...document.querySelectorAll('.blog-card'),
            ...document.querySelectorAll('.tech-card'),
            ...document.querySelectorAll('.process__step'),
            ...document.querySelectorAll('.about__text'),
            ...document.querySelectorAll('.about__image')
        ];
        
        elementsToAnimate.forEach(el => {
            el.classList.add('animate-on-scroll');
            this.animatedElements.push(el);
        });
        
        // Create intersection observer
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe all elements
        this.animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ============================================
// ACTIVE NAV LINK
// ============================================

class ActiveNavLink {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav__link');
        
        this.init();
    }
    
    init() {
        if (this.sections.length && this.navLinks.length) {
            window.addEventListener('scroll', () => this.update());
        }
    }
    
    update() {
        const scrollY = window.pageYOffset;
        
        this.sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================
// FORM HANDLER
// ============================================

class FormHandler {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Get selected submit method
        const submitMethod = e.submitter ? e.submitter.className : '';
        
        if (submitMethod.includes('whatsapp')) {
            this.sendViaWhatsApp(data);
        } else {
            this.sendViaEmail(data);
        }
    }
    
    sendViaWhatsApp(data) {
        const message = this.formatMessage(data);
        const phoneNumber = '5511999999999'; // Replace with actual number
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    }
    
    sendViaEmail(data) {
        const subject = encodeURIComponent('Contato via Portfólio - Eduardo Sette');
        const body = this.formatMessage(data);
        const mailtoURL = `mailto:contato@eduardosette.com.br?subject=${subject}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoURL;
    }
    
    formatMessage(data) {
        return `
Nova mensagem de contato via portfólio:

Nome: ${data.name || 'Não informado'}
Email: ${data.email || 'Não informado'}
Telefone: ${data.phone || 'Não informado'}
Empresa: ${data.company || 'Não informado'}

Mensagem:
${data.message || 'Sem mensagem'}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
        `.trim();
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

class LazyLoader {
    constructor() {
        this.init();
    }
    
    init() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            const images = document.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        } else {
            // Fallback for browsers that don't support native lazy loading
            this.setupIntersectionObserver();
        }
    }
    
    setupIntersectionObserver() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// PERFORMANCE MONITOR
// ============================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        // Log performance metrics
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Performance Metrics:', {
                            'DOM Content Loaded': `${Math.round(perfData.domContentLoadedEventEnd)}ms`,
                            'Page Load': `${Math.round(perfData.loadEventEnd)}ms`,
                            'First Paint': `${Math.round(perfData.responseStart)}ms`
                        });
                    }
                }, 0);
            });
        }
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

const Utils = {
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Animate counter
    animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    const themeManager = new ThemeManager();
    const mobileMenu = new MobileMenu();
    const smoothScroll = new SmoothScroll();
    const headerScroll = new HeaderScroll();
    
    // Interactive components
    const faqAccordion = new FAQAccordion();
    const testimonialsCarousel = new TestimonialsCarousel();
    const projectsFilter = new ProjectsFilter();
    const blogSearch = new BlogSearch();
    
    // Animations
    const scrollAnimations = new ScrollAnimations();
    
    // Navigation
    const activeNavLink = new ActiveNavLink();
    
    // Forms
    const formHandler = new FormHandler();
    
    // Performance
    const lazyLoader = new LazyLoader();
    const performanceMonitor = new PerformanceMonitor();
    
    // Log initialization
    console.log('🚀 Eduardo Sette Portfolio - Initialized');
    console.log('📧 Contact: contato@eduardosette.com.br');
    console.log('🌐 Languages: PT | EN | ES | FR | DE | IT');
    
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
});

// ============================================
// SERVICE WORKER REGISTRATION (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}

// ============================================
// EXPORT FOR MODULE USAGE
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        MobileMenu,
        SmoothScroll,
        HeaderScroll,
        FAQAccordion,
        TestimonialsCarousel,
        ProjectsFilter,
        BlogSearch,
        ScrollAnimations,
        ActiveNavLink,
        FormHandler,
        LazyLoader,
        Utils
    };
}