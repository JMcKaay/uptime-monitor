// Theme Module - Handle dark/light mode switching
export function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (savedTheme === 'light') {
        root.classList.add('light-mode');
        updateThemeIcon('light');
    }
    
    // Theme toggle click handler
    themeToggle?.addEventListener('click', () => {
        const isLight = root.classList.contains('light-mode');
        
        if (isLight) {
            root.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            root.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
        
        // Trigger custom event for other modules
        window.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: isLight ? 'dark' : 'light' }
        }));
    });
    
    // Update theme icon
    function updateThemeIcon(theme) {
        const icon = themeToggle?.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'light' ? '☀️' : '🌙';
        }
    }
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                root.classList.add('light-mode');
                updateThemeIcon('light');
            } else {
                root.classList.remove('light-mode');
                updateThemeIcon('dark');
            }
        }
    });
}