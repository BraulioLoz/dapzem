document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo: animar fade-in al hacer scroll
  const items = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
  });
});
