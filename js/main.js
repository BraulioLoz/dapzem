document.addEventListener('DOMContentLoaded', () => {
  // Por ahora, solo animamos las secciones principales con la animación básica
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Al entrar en viewport
        entry.target.classList.remove('hidden');
        entry.target.classList.add('visible');
      }
      // NO removemos la clase visible cuando sale del viewport
      // para evitar que desaparezcan las secciones
    });
  }, { threshold: 0.1 });

  // Aplicar animación solo a las secciones
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
});