document.addEventListener('DOMContentLoaded', () => {
  // Configuración de animaciones específicas para cada elemento
  const animationConfig = [
    { selector: '#hero', animation: 'fade' },
    { selector: '#about', animation: 'default' },
    { selector: '#about .about-image', animation: 'zoom' },
    { selector: '#about .caption', animation: 'fade' },
    { selector: '#amenities', animation: 'left' },
    { selector: '#amenities .about-image', animation: 'zoom' },
    { selector: '#amenities .caption', animation: 'fade' },
    { selector: '#finishes', animation: 'default' },
    { selector: '#finishes .about-image', animation: 'zoom' },
    { selector: '#finishes .caption', animation: 'fade' },
    { selector: '#areas', animation: 'blur' },
    { selector: '#pricing', animation: 'zoom' },
    { selector: '#proximity', animation: 'left' },
    { selector: '#contact', animation: 'default' }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const element = entry.target;
      const animationType = element.dataset.animation;
      
      if (entry.isIntersecting) {
        // Al entrar en viewport: remueve clase oculta y añade visible
        element.classList.remove(`hidden-${animationType}`);
        element.classList.add(`visible-${animationType}`);
      } else {
        // Al salir del viewport: remueve visible y añade oculta
        element.classList.remove(`visible-${animationType}`);
        element.classList.add(`hidden-${animationType}`);
      }
    });
  }, { threshold: 0.1 });

  // Aplicar animaciones específicas a cada elemento
  animationConfig.forEach(config => {
    const elements = document.querySelectorAll(config.selector);
    const animationType = config.animation === 'default' ? '' : config.animation;
    
    elements.forEach(element => {
      // Asignar tipo de animación como data attribute
      element.dataset.animation = animationType;
      
      // Aplicar clase inicial oculta
      if (animationType) {
        element.classList.add(`hidden-${animationType}`);
      } else {
        element.classList.add('hidden');
      }
      
      // Observar el elemento
      observer.observe(element);
    });
  });
});