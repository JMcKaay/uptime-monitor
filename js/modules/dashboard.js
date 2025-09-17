// Dashboard Module - Initialize monitoring dashboard
export function initDashboard() {
    const dashboard = document.getElementById('monitorDashboard');
    if (!dashboard) return;
    
    // Dashboard data
    const monitors = [
        { url: 'api.production.com', status: 'up', responseTime: 45, uptime: 99.99 },
        { url: 'app.production.com', status: 'up', responseTime: 123, uptime: 99.98 },
        { url: 'cdn.global.com', status: 'warning', responseTime: 892, uptime: 99.95 },
        { url: 'database.primary.com', status: 'up', responseTime: 12, uptime: 100 },
        { url: 'backup.server.com', status: 'down', responseTime: null, uptime: 98.50 },
        { url: 'analytics.service.com', status: 'up', responseTime: 67, uptime: 99.97 }
    ];
    
    // Build dashboard HTML
    const dashboardHTML = `
        <div class="monitor-header">
            <div class="monitor-title">Active Monitors</div>
            <div class="monitor-status-summary">
                ${getStatusSummary(monitors)}
            </div>
        </div>
        <div class="monitor-grid">
            ${monitors.map(monitor => createMonitorItem(monitor)).join('')}
        </div>
        <div class="chart-container">
            <h4 style="margin-bottom: 1rem; color: var(--text-secondary);">Response Time (Last 24 Hours)</h4>
            <div class="chart">
                ${createChart()}
            </div>
        </div>
    `;
    
    dashboard.innerHTML = dashboardHTML;
    
    // Update response times periodically
    setInterval(updateResponseTimes, 3000);
    
    function getStatusSummary(monitors) {
        const statusCounts = {
            up: monitors.filter(m => m.status === 'up').length,
            warning: monitors.filter(m => m.status === 'warning').length,
            down: monitors.filter(m => m.status === 'down').length
        };
        
        return `
            <div class="status-badge">
                <span class="status-indicator status-up"></span>
                <span>${statusCounts.up} Online</span>
            </div>
            <div class="status-badge">
                <span class="status-indicator status-warning"></span>
                <span>${statusCounts.warning} Warning</span>
            </div>
            <div class="status-badge">
                <span class="status-indicator status-down"></span>
                <span>${statusCounts.down} Down</span>
            </div>
        `;
    }
    
    function createMonitorItem(monitor) {
        const statusClass = `status-${monitor.status}`;
        const statusText = monitor.status === 'up' ? 'Operational' : 
                          monitor.status === 'warning' ? 'Slow Response' : 'Unreachable';
        const responseTime = monitor.responseTime ? `${monitor.responseTime}ms` : 'Timeout';
        
        return `
            <div class="monitor-item">
                <span class="monitor-url">${monitor.url}</span>
                <div class="monitor-metrics">
                    <div class="monitor-status">
                        <span class="status-indicator ${statusClass}"></span>
                        <span>${statusText}</span>
                    </div>
                    <span class="response-time">${responseTime}</span>
                    <span class="uptime-percentage">${monitor.uptime}%</span>
                </div>
            </div>
        `;
    }
    
    function createChart() {
        const bars = [];
        for (let i = 0; i < 24; i++) {
            const height = 40 + Math.random() * 60;
            bars.push(`<div class="chart-bar" style="height: ${height}%"></div>`);
        }
        return bars.join('');
    }
    
    function updateResponseTimes() {
        const responseTimes = dashboard.querySelectorAll('.monitor-item .response-time');
        responseTimes.forEach((el) => {
            if (el.textContent !== 'Timeout') {
                const baseTime = parseInt(el.textContent);
                const variation = Math.floor(Math.random() * 20) - 10;
                const newTime = Math.max(10, baseTime + variation);
                el.textContent = `${newTime}ms`;
            }
        });
    }
}