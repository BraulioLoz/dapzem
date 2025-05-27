document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('section, .about-image, .caption');
  
  // Arranca oculto
  items.forEach(item => {
    item.classList.add('hidden');
  });
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // no repetir la animación
      }
    });
  }, {
    threshold: 0.1
  });
  
  items.forEach(item => observer.observe(item));
});
