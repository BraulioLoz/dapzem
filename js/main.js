document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los elementos con animación (tienen clase que empieza con "hidden")
  const items = document.querySelectorAll('[class*="hidden"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando aparece: quita hidden y añade visible
        entry.target.classList.remove(
          'hidden', 'hidden-fade', 'hidden-left', 'hidden-zoom', 'hidden-blur'
        );
        entry.target.classList.add(
          'visible', 'visible-fade', 'visible-left', 'visible-zoom', 'visible-blur'
        );
      } else {
        // Cuando desaparece: quita visible y añade de nuevo hidden
        entry.target.classList.remove(
          'visible', 'visible-fade', 'visible-left', 'visible-zoom', 'visible-blur'
        );
        entry.target.classList.add(
          'hidden', 'hidden-fade', 'hidden-left', 'hidden-zoom', 'hidden-blur'
        );
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => {
    // Inicia en estado hidden (elige el que usas, p.ej. hidden o hidden-left)
    if (!item.classList.contains('hidden') &&
        !item.classList.contains('hidden-fade') &&
        !item.classList.contains('hidden-left') &&
        !item.classList.contains('hidden-zoom') &&
        !item.classList.contains('hidden-blur')) {
      item.classList.add('hidden');
    }
    observer.observe(item);
  });
});
