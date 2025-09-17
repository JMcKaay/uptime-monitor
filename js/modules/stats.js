// Stats Module - Handle statistics counter animations
export function initStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    // Stats data
    const stats = [
        { value: 15000000, label: 'Checks Per Day', prefix: '', suffix: '' },
        { value: 99.99, label: '% Uptime SLA', prefix: '', suffix: '%', decimal: true },
        { value: 50000, label: 'Active Monitors', prefix: '', suffix: '+' },
        { value: 30, label: 'Second Response', prefix: '', suffix: 's' }
    ];
    
    // Build stats HTML
    const statsHTML = stats.map(stat => `
        <div class="stat-card">
            <span class="stat-number" data-target="${stat.value}" data-decimal="${stat.decimal || false}">
                ${stat.prefix}0${stat.suffix}
            </span>
            <span class="stat-label">${stat.label}</span>
        </div>
    `).join('');
    
    statsGrid.innerHTML = statsHTML;
    
    // Animate numbers when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                animateValue(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all stat numbers
    statsGrid.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
}

function animateValue(element) {
    element.animated = true;
    
    const target = parseFloat(element.dataset.target);
    const isDecimal = element.dataset.decimal === 'true';
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    // Extract prefix and suffix
    const text = element.textContent;
    const match = text.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
    const prefix = match ? match[1] : '';
    const suffix = match ? match[3] : '';
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        let displayValue;
        if (isDecimal) {
            displayValue = current.toFixed(2);
        } else {
            displayValue = Math.floor(current).toLocaleString();
        }
        
        element.textContent = `${prefix}${displayValue}${suffix}`;
    }, 16);
}