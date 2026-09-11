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
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--nav-text)' : '';
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

// Agrupa una lista de elementos por su sección/header más cercano, para
// escalonar hermanos de un mismo grupo en vez de dispararlos todos a la vez.
function groupByAncestor(elements) {
  const groups = new Map();
  elements.forEach((el) => {
    const parent = el.closest('section, header') || document.body;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });
  return groups;
}

const revealTargets = document.querySelectorAll('.card, .team-card, .media-frame');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  groupByAncestor(revealTargets).forEach((els) => {
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

// Revelado de texto (titulares y leads) — wipe limpio vía clip-path.
// Propósito: preventing a jarring change, igual que el revelado de bloques,
// pero aplicado al texto en sí (eyebrow/h1/h2 + su párrafo introductorio),
// no a su contenedor — el cuerpo de las tarjetas ya entra con su bloque, así
// que no se duplica movimiento sobre el mismo contenido. clip-path es la
// cuarta propiedad permitida junto a transform/opacity: el texto se
// "descubre" de abajo hacia arriba con una leve subida, un wipe limpio, no
// un fade genérico ni un typewriter letra por letra.
//
// El estado oculto se fija aquí, nunca en CSS estático: si este script no
// llega a correr, .text-reveal no tiene ningún estilo propio y el texto se
// ve normal desde el primer render.
const textRevealTargets = document.querySelectorAll('.text-reveal');

if ('IntersectionObserver' in window && !prefersReducedMotion && textRevealTargets.length) {
  textRevealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.clipPath = 'inset(0 0 100% 0)';
    el.style.transition = `opacity 650ms var(--ease-out), transform 650ms var(--ease-out), clip-path 650ms var(--ease-out)`;
  });

  // Importante: el observer vigila al contenedor (section/header), no a los
  // .text-reveal en sí. Un elemento con clip-path 100% no pinta nada, y
  // Chromium calcula su intersección como 0 — observarlo directamente nunca
  // dispararía el "isIntersecting" que lo revela (bucle imposible).
  const textObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const els = entry.target.querySelectorAll('.text-reveal');
        els.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.clipPath = 'inset(0 0 0% 0)';
          }, i * 80);
        });
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  groupByAncestor(textRevealTargets).forEach((els, container) => textObserver.observe(container));
}
