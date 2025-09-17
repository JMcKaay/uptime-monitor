// Interactions Module - Handle various user interactions
export function initInteractions() {
    // CTA Button interactions
    initCTAButtons();
    
    // Form interactions
    initForms();
    
    // Tooltip interactions
    initTooltips();
    
    // Copy to clipboard
    initClipboard();
    
    // Keyboard shortcuts
    initKeyboardShortcuts();
}

function initCTAButtons() {
    // All CTA buttons
    document.querySelectorAll('.cta-button, .plan-button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('button-ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnimation 0.6s ease-out;
            `;
            
            setTimeout(() => ripple.remove(), 600);
            
            // Demo action
            if (button.textContent.includes('Free Trial')) {
                showNotification('Starting your 14-day free trial...', 'success');
            } else if (button.textContent.includes('Contact Sales')) {
                showNotification('Opening contact form...', 'info');
            }
        });
    });
}

function initForms() {
    // Email subscription forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = form.querySelector('input[type="email"]')?.value;
            if (email) {
                showNotification('Thank you for subscribing!', 'success');
                form.reset();
            }
        });
    });
}

function initTooltips() {
    // Elements with data-tooltip attribute
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        let tooltip;
        
        element.addEventListener('mouseenter', (e) => {
            const text = element.dataset.tooltip;
            tooltip = createTooltip(text, element);
        });
        
        element.addEventListener('mouseleave', () => {
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

function createTooltip(text, element) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--bg-secondary);
        color: var(--text-primary);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        border: 1px solid var(--border);
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
    
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);
    
    return tooltip;
}

function initClipboard() {
    // Copy buttons
    document.querySelectorAll('[data-copy]').forEach(button => {
        button.addEventListener('click', () => {
            const text = button.dataset.copy;
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Copied to clipboard!', 'success');
            });
        });
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K: Focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // Escape: Close modals/menus
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active, .dropdown.active').forEach(el => {
                el.classList.remove('active');
            });
        }
        
        // T: Toggle theme
        if (e.key === 't' && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
            document.getElementById('themeToggle')?.click();
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--bg-secondary);
        color: var(--text-primary);
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: var(--shadow-xl);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 2000;
        border-left: 4px solid ${type === 'success' ? 'var(--success)' : 
                                 type === 'error' ? 'var(--error)' : 
                                 type === 'warning' ? 'var(--warning)' : 'var(--info)'};
        max-width: 400px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Export for use in other modules
window.showNotification = showNotification;