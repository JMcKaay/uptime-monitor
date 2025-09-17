// Loader Module - Handle page loading animation
export function initLoader() {
    const loader = document.getElementById('loading');
    if (!loader) return;
    
    // Hide loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hide');
            
            // Remove from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 500);
    });
    
    // Show progress during loading
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        
        updateLoadingText(progress);
    }, 100);
    
    function updateLoadingText(progress) {
        const loadingText = loader.querySelector('.loading-text');
        if (loadingText) {
            if (progress < 30) {
                loadingText.textContent = 'Initializing UptimeGuard...';
            } else if (progress < 60) {
                loadingText.textContent = 'Loading monitoring systems...';
            } else if (progress < 90) {
                loadingText.textContent = 'Preparing dashboard...';
            } else {
                loadingText.textContent = 'Almost ready...';
            }
        }
    }
}