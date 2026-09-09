// Menú móvil
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Resalta el link de nav según la sección visible
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
        });
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );
  sections.forEach((section) => observer.observe(section));
}

// Revelado al hacer scroll.
// Propósito: evitar que el contenido "teletransporte" de golpe al entrar en
// viewport (preventing a jarring change), no decoración. Entrada -> ease-out,
// duración corta (marketing, no un control de UI de uso frecuente), con un
// stagger de 70ms entre hermanos de una misma sección para que grupos como
// las tarjetas de equipo entren en cascada y no todas a la vez.
// El fondo animado en sí es puro CSS (#bg-aurora en style.css) — no compite
// por el hilo principal, así que no hay nada que orquestar aquí para él.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.card, .team-card, .media-frame, .section-head');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const groups = new Map();
  revealTargets.forEach((el) => {
    const parent = el.closest('section, header') || document.body;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });

  groups.forEach((els) => {
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = `opacity 550ms var(--ease-out) ${i * 70}ms, transform 550ms var(--ease-out) ${i * 70}ms`;
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}
