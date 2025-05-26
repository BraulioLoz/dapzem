document.addEventListener('DOMContentLoaded', () => {
  // Selecciona las secciones, imágenes y captions a animar
  const items = document.querySelectorAll('section, .about-image, .caption');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Al entrar en viewport: remueve clases de oculto y añade visibles
        entry.target.classList.remove(
          'hidden', 'hidden-fade', 'hidden-left', 'hidden-zoom', 'hidden-blur'
        );
        entry.target.classList.add(
          'visible', 'visible-fade', 'visible-left', 'visible-zoom', 'visible-blur'
        );
      } else {
        // Al salir del viewport: remueve visibles y añade ocultos
        entry.target.classList.remove(
          'visible', 'visible-fade', 'visible-left', 'visible-zoom', 'visible-blur'
        );
        entry.target.classList.add(
          'hidden', 'hidden-fade', 'hidden-left', 'hidden-zoom', 'hidden-blur'
        );
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    // Arranca en estado oculto
    item.classList.add('hidden');
    observer.observe(item);
  });
});
