// Theme management with smooth transitions
function initializeTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const html = document.documentElement;
  
  // Get saved theme or default to light
  let currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply initial theme
  html.classList.toggle('dark', currentTheme === 'dark');
  updateThemeIcon(themeIcon, currentTheme);
  
  // Theme toggle functionality
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      html.classList.toggle('dark', currentTheme === 'dark');
      localStorage.setItem('theme', currentTheme);
      updateThemeIcon(themeIcon, currentTheme);
      
      // Re-render charts with new theme
      if (typeof window.renderCharts === 'function') {
        setTimeout(() => window.renderCharts(), 100);
      }
    });
  }
}

function updateThemeIcon(iconElement, theme) {
  if (!iconElement) return;
  
  iconElement.className = theme === 'dark' 
    ? 'fas fa-sun' 
    : 'fas fa-moon';
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  initializeSmoothScrolling();
});

// Export functions for external use
window.initializeTheme = initializeTheme;
