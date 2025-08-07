// Crear botón "Volver arriba"
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.innerText = '↑';
document.body.appendChild(backToTopButton);

Object.assign(backToTopButton.style, {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  padding: '12px 18px',
  fontSize: '28px',
  backgroundColor: '#d2691e',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  display: 'none',
  zIndex: '1000',
  transition: 'opacity 0.3s ease, transform 0.3s ease'
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
    backToTopButton.style.opacity = '1';
    backToTopButton.style.transform = 'scale(1)';
  } else {
    backToTopButton.style.opacity = '0';
    backToTopButton.style.transform = 'scale(0.5)';
    setTimeout(() => backToTopButton.style.display = 'none', 300);
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade in secciones
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  observer.observe(section);
});

// Fade in imágenes
const imagenesIds = ['imagen2', 'imagen3', 'imagen4', 'imagen5', 'frase1', 'frase2', 'frase3'];
imagenesIds.forEach(id => {
  const img = document.getElementById(id);
  if (img) {
    img.style.opacity = 0;
    img.style.transition = 'opacity 1.2s ease-in-out';
    window.addEventListener('load', () => {
      setTimeout(() => {
        img.style.opacity = 1;
      }, 500);
    });
  }
});
