// Animations Module - Handle element animations
export function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for staggered animations
                if (entry.target.classList.contains('stagger-animation')) {
                    animateChildren(entry.target);
                }
                
                // Special handling for monitor items
                if (entry.target.classList.contains('monitor-dashboard')) {
                    animateMonitorItems(entry.target);
                }
                
                // Special handling for chart
                if (entry.target.classList.contains('chart-container')) {
                    animateChart(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(`
        .section-title,
        .section-subtitle,
        .feature-card,
        .stat-card,
        .pricing-card,
        .monitor-dashboard,
        .chart-container,
        .scroll-animate,
        .scroll-animate-left,
        .scroll-animate-right,
        .scroll-animate-scale,
        .stagger-animation
    `);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Animate children with stagger
    function animateChildren(parent) {
        const children = parent.children;
        Array.from(children).forEach((child, index) => {
            setTimeout(() => {
                child.classList.add('animate-in');
            }, index * 100);
        });
    }
    
    // Animate monitor items
    function animateMonitorItems(dashboard) {
        const items = dashboard.querySelectorAll('.monitor-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate-in');
            }, index * 100);
        });
    }
    
    // Animate chart bars
    function animateChart(container) {
        const bars = container.querySelectorAll('.chart-bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animate-in');
            }, index * 30);
        });
    }
    
    // Add hover animations
    addHoverAnimations();
}

function addHoverAnimations() {
    // Magnetic button effect
    const buttons = document.querySelectorAll('.cta-button, .hero-button, .plan-button');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
    
    // Card tilt effect
    const cards = document.querySelectorAll('.feature-card, .pricing-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}