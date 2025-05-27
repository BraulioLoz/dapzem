document.addEventListener('DOMContentLoaded', () => {
  console.log('Script cargado');
  
  const sections = document.querySelectorAll('section');
  console.log('Secciones encontradas:', sections.length);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      
      if (entry.isIntersecting) {
        // Solo añadir la clase visible si no la tiene ya
        if (!entry.target.classList.contains('visible')) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
          console.log('Sección visible:', sectionId);
          
          // Dejar de observar esta sección una vez que se hace visible
          // para evitar que se active múltiples veces
          observer.unobserve(entry.target);
        }
      }
    });
  }, { 
    threshold: 0.1, // Activar cuando 10% de la sección es visible
    rootMargin: '0px 0px -50px 0px' // Activar un poco antes de que llegue al bottom
  });

  // Configurar las secciones para animación
  sections.forEach((section, index) => {
    // Añadir diferentes tipos de animación según la sección
    const animationType = getAnimationType(section.id, index);
    section.classList.add('hidden', animationType);
    
    // Solo observar secciones que no sean la primera (hero)
    if (section.id !== 'hero') {
      observer.observe(section);
      console.log('Observando sección:', section.id);
    } else {
      // La sección hero se muestra inmediatamente
      section.classList.remove('hidden');
      section.classList.add('visible');
    }
  });

  function getAnimationType(sectionId, index) {
    // Asignar diferentes animaciones según la sección
    switch(sectionId) {
      case 'about':
        return 'hidden-fade';
      case 'amenities':
        return 'hidden-left';
      case 'finishes':
        return 'hidden-right';
      case 'areas':
        return 'hidden-zoom';
      case 'pricing':
        return 'hidden-blur';
      case 'proximity':
        return 'hidden-left';
      case 'contact':
        return 'hidden-zoom';
      default:
        // Alternar entre fade y slide para otras secciones
        return index % 2 === 0 ? 'hidden-fade' : 'hidden';
    }
  }
});