// Particles Module - Create floating particle effects
export function initParticles() {
    const particlesContainer = document.getElementById('heroParticles');
    if (!particlesContainer) return;
    
    // Particle configuration
    const config = {
        particleCount: 50,
        colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'],
        maxSize: 4,
        minSize: 1,
        speed: 0.5
    };
    
    const particles = [];
    
    // Particle class
    class Particle {
        constructor(container) {
            this.container = container;
            this.element = document.createElement('div');
            this.element.classList.add('particle');
            this.reset();
            this.container.appendChild(this.element);
        }
        
        reset() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
            this.speedX = (Math.random() - 0.5) * config.speed;
            this.speedY = (Math.random() - 0.5) * config.speed;
            this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            
            this.updateStyle();
        }
        
        updateStyle() {
            this.element.style.cssText = `
                position: absolute;
                width: ${this.size}px;
                height: ${this.size}px;
                background: ${this.color};
                border-radius: 50%;
                left: ${this.x}px;
                top: ${this.y}px;
                pointer-events: none;
                opacity: 0.6;
            `;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around screen
            if (this.x > window.innerWidth) this.x = 0;
            if (this.x < 0) this.x = window.innerWidth;
            if (this.y > window.innerHeight) this.y = 0;
            if (this.y < 0) this.y = window.innerHeight;
            
            this.updateStyle();
        }
    }
    
    // Create particles
    for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle(particlesContainer));
    }
    
    // Animation loop
    function animate() {
        particles.forEach(particle => particle.update());
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Create floating particles on mouse move
    let mouseTimer;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(mouseTimer);
        mouseTimer = setTimeout(() => {
            createFloatingParticle(e.clientX, e.clientY);
        }, 100);
    });
    
    function createFloatingParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--accent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${x}px;
            top: ${y}px;
        `;
        
        document.body.appendChild(particle);
        
        const duration = 2000 + Math.random() * 1000;
        const distance = 100 + Math.random() * 100;
        const angle = Math.random() * Math.PI * 2;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 0.8
            },
            {
                transform: `translate(${endX}px, ${endY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
    
    // Ripple effect on click
    document.addEventListener('click', (e) => {
        // Skip if clicking on interactive elements
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
        
        createRipple(e.clientX, e.clientY);
    });
    
    function createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            left: ${x}px;
            top: ${y}px;
            z-index: 9998;
        `;
        
        document.body.appendChild(ripple);
        
        ripple.animate([
            {
                width: '20px',
                height: '20px',
                opacity: 1
            },
            {
                width: '200px',
                height: '200px',
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => ripple.remove();
    }
}