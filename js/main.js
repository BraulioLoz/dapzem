document.addEventListener('DOMContentLoaded', () => {
  console.log('Script cargado'); // Para debug
  
  const sections = document.querySelectorAll('section');
  console.log('Secciones encontradas:', sections.length); // Para debug

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log('Elemento observado:', entry.target.id, 'Visible:', entry.isIntersecting); // Para debug
      
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('visible');
        console.log('Añadida clase visible a:', entry.target.id);
      }
    });
  }, { 
    threshold: 0.05, // Umbral más bajo
    rootMargin: '50px' // Margen para activar antes
  });

  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
    console.log('Observando sección:', section.id);
  });
});