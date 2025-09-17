// Features Module - Initialize features section
export function initFeatures() {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return;
    
    // Features data
    const features = [
        {
            icon: '🚀',
            title: 'Uptime Monitoring',
            description: 'Monitor your website availability from 50+ global locations with 30-second intervals. Get instant alerts via your preferred channels.'
        },
        {
            icon: '🔒',
            title: 'SSL Certificate Monitoring',
            description: 'Track SSL certificate expiration dates and get notified before they expire. Monitor certificate changes and security issues.'
        },
        {
            icon: '⚡',
            title: 'Performance Metrics',
            description: 'Real-time performance tracking with detailed metrics. Identify bottlenecks and optimize your application\'s speed.'
        },
        {
            icon: '🔗',
            title: 'API Monitoring',
            description: 'Monitor REST APIs, GraphQL endpoints, and webhooks. Validate response times, status codes, and response bodies.'
        },
        {
            icon: '📱',
            title: 'Multi-Channel Alerts',
            description: 'Get notified via Email, SMS, Slack, Discord, Teams, PagerDuty, and webhooks with smart alert grouping.'
        },
        {
            icon: '📊',
            title: 'Status Pages',
            description: 'Beautiful, customizable public status pages to keep your users informed during incidents and maintenance.'
        }
    ];
    
    // Build features HTML
    const featuresHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        </div>
    `).join('');
    
    featuresGrid.innerHTML = featuresHTML;
}