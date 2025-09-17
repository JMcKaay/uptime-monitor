// Scroll Effects Module - Handle parallax and scroll-based animations
export function initScrollEffects() {
    let ticking = false;
    
    // Parallax effect for hero background
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    
    // Throttle scroll events for performance
    function requestTick(callback) {
        if (!ticking) {
            requestAnimationFrame(callback);
            ticking = true;
            setTimeout(() => { ticking = false; }, 100);
        }
    }
    
    // Main scroll handler
    window.addEventListener('scroll', () => {
        requestTick(updateScrollEffects);
    });
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Parallax for hero background
        if (heroBg) {
            const rate = scrolled * -0.5;
            heroBg.style.transform = `translateY(${rate}px)`;
        }
        
        // Fade and scale hero content on scroll
        if (heroContent) {
            const opacity = Math.max(0, 1 - scrolled / 600);
            const scale = Math.max(0.8, 1 - scrolled / 2000);
            heroContent.style.opacity = opacity;
            heroContent.style.transform = `scale(${scale})`;
        }
        
        // Parallax for other elements
        document.querySelectorAll('.parallax').forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.dataset.speed || 0.5;
            const yPos = -(rect.top * speed);
            
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Progress indicator (if exists)
        updateProgressIndicator(scrolled);
        
        // Reveal animations based on scroll position
        revealOnScroll(scrolled, windowHeight);
    }
    
    // Update progress indicator
    function updateProgressIndicator(scrolled) {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / docHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }
    
    // Reveal elements on scroll
    function revealOnScroll(scrolled, windowHeight) {
        document.querySelectorAll('.reveal-on-scroll').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll to top button (if exists)
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}