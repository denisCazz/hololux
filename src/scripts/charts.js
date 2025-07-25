// Chart.js configurations and rendering
function getChartColors(isDark = false) {
  return {
    primary: isDark ? '#4DA6FF' : '#0073E6',
    secondary: isDark ? '#66B3FF' : '#0059B3', 
    accent: isDark ? '#80C4FF' : '#004080',
    background: isDark ? '#1F2937' : '#FFFFFF',
    text: isDark ? '#F3F4F6' : '#374151',
    grid: isDark ? '#374151' : '#E5E7EB'
  };
}

function createConsumptionChart() {
  const canvas = document.getElementById('consumptionChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const isDark = document.documentElement.classList.contains('dark');
  const colors = getChartColors(isDark);
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'it';
  const t = window.translations ? window.translations[currentLang] : {};
  
  // Destroy existing chart if it exists
  if (window.consumptionChartInstance) {
    window.consumptionChartInstance.destroy();
  }
  
  window.consumptionChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['OLED', 'Micro-LED', 'Holo Lux'],
      datasets: [{
        label: currentLang === 'it' ? 'Consumo (mW)' : 'Consumption (mW)',
        data: [850, 650, 120],
        backgroundColor: [
          colors.accent + '80',
          colors.secondary + '80', 
          colors.primary + '80'
        ],
        borderColor: [
          colors.accent,
          colors.secondary,
          colors.primary
        ],
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.text,
            font: { family: 'Inter, sans-serif', weight: '600' }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { family: 'Inter, sans-serif' } }
        },
        x: {
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { family: 'Inter, sans-serif', weight: '600' } }
        }
      }
    }
  });
}

function createEfficiencyChart() {
  const canvas = document.getElementById('efficiencyChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const isDark = document.documentElement.classList.contains('dark');
  const colors = getChartColors(isDark);
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'it';
  
  // Destroy existing chart if it exists
  if (window.efficiencyChartInstance) {
    window.efficiencyChartInstance.destroy();
  }
  
  window.efficiencyChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['OLED', 'Micro-LED', 'Holo Lux'],
      datasets: [{
        data: [45, 65, 180],
        backgroundColor: [
          colors.accent + 'CC',
          colors.secondary + 'CC',
          colors.primary + 'CC'
        ],
        borderColor: [
          colors.accent,
          colors.secondary,
          colors.primary
        ],
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: colors.text,
            font: { family: 'Inter, sans-serif', weight: '600' },
            padding: 20
          }
        }
      }
    }
  });
}

function createTransparencyChart() {
  const canvas = document.getElementById('transparencyChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const isDark = document.documentElement.classList.contains('dark');
  const colors = getChartColors(isDark);
  const currentLang = window.currentLanguage ? window.currentLanguage() : 'it';
  
  // Destroy existing chart if it exists
  if (window.transparencyChartInstance) {
    window.transparencyChartInstance.destroy();
  }
  
  window.transparencyChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['OLED', 'Micro-LED', 'Holo Lux'],
      datasets: [{
        label: currentLang === 'it' ? 'Trasparenza (%)' : 'Transparency (%)',
        data: [25, 45, 95],
        borderColor: colors.primary,
        backgroundColor: colors.primary + '20',
        borderWidth: 4,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: colors.primary,
        pointBorderColor: colors.background,
        pointBorderWidth: 3,
        pointRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: colors.text,
            font: { family: 'Inter, sans-serif', weight: '600' }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: colors.grid },
          ticks: { 
            color: colors.text,
            font: { family: 'Inter, sans-serif' },
            callback: function(value) { return value + '%'; }
          }
        },
        x: {
          grid: { color: colors.grid },
          ticks: { color: colors.text, font: { family: 'Inter, sans-serif', weight: '600' } }
        }
      }
    }
  });
}

function renderCharts() {
  // Add small delay to ensure theme transitions are complete
  setTimeout(() => {
    createConsumptionChart();
    createEfficiencyChart();
    createTransparencyChart();
  }, 150);
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Wait for Chart.js to load
  if (typeof Chart !== 'undefined') {
    renderCharts();
  } else {
    // Poll for Chart.js availability
    const checkChart = setInterval(() => {
      if (typeof Chart !== 'undefined') {
        clearInterval(checkChart);
        renderCharts();
      }
    }, 100);
  }
});

// Export for external use
window.renderCharts = renderCharts;
