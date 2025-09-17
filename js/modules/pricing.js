// Pricing Module - Handle pricing section and toggle
export function initPricing() {
    const pricingGrid = document.getElementById('pricingGrid');
    const pricingToggle = document.getElementById('pricingToggle');
    if (!pricingGrid) return;
    
    // Pricing plans data
    const plans = [
        {
            name: 'Starter',
            monthlyPrice: 19,
            yearlyPrice: 15,
            features: [
                '10 Monitors',
                '1-minute intervals',
                '5 Alert contacts',
                '30-day data retention',
                'Email & SMS alerts',
                'Basic status page',
                'API access'
            ],
            featured: false
        },
        {
            name: 'Professional',
            monthlyPrice: 49,
            yearlyPrice: 39,
            features: [
                '50 Monitors',
                '30-second intervals',
                'Unlimited contacts',
                '1-year data retention',
                'All integrations',
                'Custom status pages',
                'Advanced API access',
                'Priority support'
            ],
            featured: true
        },
        {
            name: 'Enterprise',
            monthlyPrice: 199,
            yearlyPrice: 159,
            features: [
                'Unlimited Monitors',
                '10-second intervals',
                'Unlimited everything',
                'Unlimited retention',
                'White-label options',
                'Custom integrations',
                'SLA guarantees',
                'Dedicated support'
            ],
            featured: false
        }
    ];
    
    // Initial render with monthly pricing
    renderPricing(false);
    
    // Toggle handler
    pricingToggle?.addEventListener('change', (e) => {
        renderPricing(e.target.checked);
    });
    
    function renderPricing(isYearly) {
        const pricingHTML = plans.map(plan => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? '/year' : '/month';
            const featuredClass = plan.featured ? 'featured' : '';
            
            return `
                <div class="pricing-card ${featuredClass}">
                    <h3 class="plan-name">${plan.name}</h3>
                    <div class="plan-price">$${price}<span>${period}</span></div>
                    <ul class="plan-features">
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="plan-button">
                        ${plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                    </button>
                </div>
            `;
        }).join('');
        
        pricingGrid.innerHTML = pricingHTML;
        
        // Re-trigger animations for new elements
        setTimeout(() => {
            pricingGrid.querySelectorAll('.pricing-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 100);
            });
        }, 100);
    }
}