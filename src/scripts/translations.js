// Multi-language support with Italian and English
const translations = {
  it: {
    main_title: "Holo Lux",
    main_subtitle: "Un Nuovo Paradigma per Display AR Energeticamente Efficienti",
    nav_efficiency: "Efficienza",
    nav_challenges: "Sfide",
    nav_solution: "Soluzione",
    nav_roadmap: "Roadmap",
    nav_ai_analysis: "Analisi AI",
    efficiency_title: "Analisi dell'Efficienza Energetica",
    efficiency_description: "Confronto tra tecnologie tradizionali e la nostra innovativa soluzione olografica",
    consumption_chart_title: "Consumo Energetico per Tecnologia",
    consumption_chart_caption: "Confronto del consumo energetico in mW tra diverse tecnologie di display AR",
    efficiency_chart_title: "Efficienza Luminosa",
    efficiency_chart_caption: "Efficacia luminosa misurata in lumen per watt",
    transparency_chart_title: "Livelli di Trasparenza",
    transparency_chart_caption: "Percentuale di trasparenza ottica per ciascuna tecnologia",
    performance_title: "Metriche Chiave di Performance",
    performance_description: "I nostri risultati rivoluzionari nel campo dei display AR",
    power_reduction_title: "Riduzione Consumo",
    power_reduction_desc: "del consumo energetico",
    transparency_improvement_title: "Miglioramento Trasparenza",
    transparency_improvement_desc: "di trasparenza ottica",
    efficiency_gain_title: "Guadagno Efficienza",
    efficiency_gain_desc: "di efficienza luminosa",
    challenges_title: "Sfide Tecnologiche",
    challenges_description: "Le principali limitazioni dei sistemi AR attuali che il nostro progetto affronta",
    challenge_power_title: "Consumo Energetico Elevato",
    challenge_power_desc: "I display attuali richiedono troppa energia per essere pratici in dispositivi portatili",
    challenge_transparency_title: "Trasparenza Limitata",
    challenge_transparency_desc: "La visibilità del mondo reale è compromessa dalla tecnologia display tradizionale",
    challenge_efficiency_title: "Bassa Efficienza Luminosa",
    challenge_efficiency_desc: "Conversione inefficiente dell'energia elettrica in luce visibile",
    solution_title: "La Nostra Soluzione Olografica",
    solution_description: "Un approccio innovativo che rivoluziona l'efficienza dei display AR",
    solution_step1: "Generazione ologramma con laser a basso consumo",
    solution_step2: "Modulazione ottica adattiva",
    solution_step3: "Proiezione trasparente ad alta efficienza",
    technology_comparison_title: "Confronto Tecnologico",
    technology_comparison_description: "Come la nostra tecnologia si confronta con le soluzioni esistenti",
    oled_title: "OLED Tradizionale",
    oled_description: "Display organici a emissione di luce con limitazioni di trasparenza",
    oled_rest: "Stato Inattivo",
    oled_active: "Stato Attivo",
    micro_led_title: "Micro-LED",
    micro_led_description: "LED miniaturizzati con buone prestazioni ma consumo elevato",
    micro_led_rest: "Stato Inattivo",
    micro_led_active: "Stato Attivo",
    holographic_title: "Sistema Olografico Holo Lux",
    holographic_description: "La nostra soluzione rivoluzionaria con massima efficienza",
    holographic_rest: "Stato Inattivo",
    holographic_active: "Stato Attivo",
    mirror: "Specchio",
    transparent: "Trasparente",
    roadmap_title: "Roadmap di Sviluppo",
    roadmap_description: "Il nostro percorso verso la commercializzazione della tecnologia",
    roadmap_step1_title: "Fase 1: Ricerca e Prototipazione",
    roadmap_step1_desc: "Sviluppo dei prototipi iniziali e validazione dei concetti",
    roadmap_step2_title: "Fase 2: Ottimizzazione e Test",
    roadmap_step2_desc: "Miglioramento delle prestazioni e test di durata",
    roadmap_step3_title: "Fase 3: Produzione Pilota",
    roadmap_step3_desc: "Implementazione di una linea di produzione pilota",
    roadmap_step4_title: "Fase 4: Commercializzazione",
    roadmap_step4_desc: "Lancio del prodotto e distribuzione sul mercato",
    ai_analysis_title: "Analisi AI del Mercato",
    ai_analysis_description: "Insights generati dall'intelligenza artificiale sul potenziale di mercato",
    ai_result1_title: "Previsione di Crescita",
    ai_result1_desc: "Il mercato AR è previsto crescere del 40% annuo nei prossimi 5 anni",
    ai_result2_title: "Domanda di Efficienza",
    ai_result2_desc: "L'85% dei consumatori considera l'efficienza energetica un fattore chiave",
    ai_result3_title: "Opportunità di Mercato",
    ai_result3_desc: "Potenziale mercato di $15 miliardi entro il 2030 per display AR efficienti",
    footer_text: "© 2025 Holo Lux. Innovazione nel futuro dei display AR."
  },
  en: {
    main_title: "Holo Lux",
    main_subtitle: "A New Paradigm for Energy-Efficient AR Displays",
    nav_efficiency: "Efficiency",
    nav_challenges: "Challenges", 
    nav_solution: "Solution",
    nav_roadmap: "Roadmap",
    nav_ai_analysis: "AI Analysis",
    efficiency_title: "Energy Efficiency Analysis",
    efficiency_description: "Comparison between traditional technologies and our innovative holographic solution",
    consumption_chart_title: "Energy Consumption by Technology",
    consumption_chart_caption: "Energy consumption comparison in mW across different AR display technologies",
    efficiency_chart_title: "Luminous Efficiency", 
    efficiency_chart_caption: "Luminous efficacy measured in lumens per watt",
    transparency_chart_title: "Transparency Levels",
    transparency_chart_caption: "Optical transparency percentage for each technology",
    performance_title: "Key Performance Metrics",
    performance_description: "Our breakthrough results in AR display technology",
    power_reduction_title: "Power Reduction",
    power_reduction_desc: "energy consumption reduction",
    transparency_improvement_title: "Transparency Improvement", 
    transparency_improvement_desc: "optical transparency increase",
    efficiency_gain_title: "Efficiency Gain",
    efficiency_gain_desc: "luminous efficiency improvement",
    challenges_title: "Technology Challenges",
    challenges_description: "Key limitations of current AR systems that our project addresses",
    challenge_power_title: "High Energy Consumption",
    challenge_power_desc: "Current displays require too much power to be practical for portable devices",
    challenge_transparency_title: "Limited Transparency",
    challenge_transparency_desc: "Real-world visibility is compromised by traditional display technology",
    challenge_efficiency_title: "Low Luminous Efficiency", 
    challenge_efficiency_desc: "Inefficient conversion of electrical energy to visible light",
    solution_title: "Our Holographic Solution",
    solution_description: "An innovative approach that revolutionizes AR display efficiency",
    solution_step1: "Low-power laser hologram generation",
    solution_step2: "Adaptive optical modulation", 
    solution_step3: "High-efficiency transparent projection",
    technology_comparison_title: "Technology Comparison",
    technology_comparison_description: "How our technology compares to existing solutions",
    oled_title: "Traditional OLED",
    oled_description: "Organic light-emitting displays with transparency limitations",
    oled_rest: "Rest State",
    oled_active: "Active State",
    micro_led_title: "Micro-LED",
    micro_led_description: "Miniaturized LEDs with good performance but high consumption",
    micro_led_rest: "Rest State", 
    micro_led_active: "Active State",
    holographic_title: "Holo Lux Holographic System",
    holographic_description: "Our revolutionary solution with maximum efficiency",
    holographic_rest: "Rest State",
    holographic_active: "Active State",
    mirror: "Mirror",
    transparent: "Transparent", 
    roadmap_title: "Development Roadmap",
    roadmap_description: "Our path to technology commercialization",
    roadmap_step1_title: "Phase 1: Research & Prototyping",
    roadmap_step1_desc: "Development of initial prototypes and concept validation",
    roadmap_step2_title: "Phase 2: Optimization & Testing",
    roadmap_step2_desc: "Performance improvements and durability testing",
    roadmap_step3_title: "Phase 3: Pilot Production",
    roadmap_step3_desc: "Implementation of pilot production line",
    roadmap_step4_title: "Phase 4: Commercialization",
    roadmap_step4_desc: "Product launch and market distribution",
    ai_analysis_title: "AI Market Analysis",
    ai_analysis_description: "AI-generated insights on market potential",
    ai_result1_title: "Growth Forecast",
    ai_result1_desc: "AR market is projected to grow 40% annually over the next 5 years",
    ai_result2_title: "Efficiency Demand",
    ai_result2_desc: "85% of consumers consider energy efficiency a key factor",
    ai_result3_title: "Market Opportunity", 
    ai_result3_desc: "Potential $15 billion market by 2030 for efficient AR displays",
    footer_text: "© 2025 Holo Lux. Innovation in the future of AR displays."
  }
};

let currentLanguage = 'it';

function updateTexts() {
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update language button text
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = currentLanguage === 'it' ? 'English' : 'Italiano';
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'it' ? 'en' : 'it';
  updateTexts();
  
  // Re-render charts with new language
  if (typeof window.renderCharts === 'function') {
    window.renderCharts();
  }
}

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
  updateTexts();
  
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }
});

// Export for use in other modules
window.translations = translations;
window.currentLanguage = () => currentLanguage;
window.updateTexts = updateTexts;
