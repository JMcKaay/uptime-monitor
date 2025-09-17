// Main JavaScript Entry Point
import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initAnimations } from './modules/animations.js';
import { initScrollEffects } from './modules/scroll.js';
import { initParticles } from './modules/particles.js';
import { initDashboard } from './modules/dashboard.js';
import { initStats } from './modules/stats.js';
import { initPricing } from './modules/pricing.js';
import { initFeatures } from './modules/features.js';
import { initLoader } from './modules/loader.js';
import { initInteractions } from './modules/interactions.js';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLoader();
    initTheme();
    initNavigation();
    initAnimations();
    initScrollEffects();
    initParticles();
    initDashboard();
    initStats();
    initPricing();
    initFeatures();
    initInteractions();
    
    // Log initialization
    console.log('UptimeGuard initialized successfully');
});

// Service Worker Registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app will still work
        });
    });
}