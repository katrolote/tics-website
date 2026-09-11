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

// Resalta el link de nav según la sección visible, y desliza el
// indicador de píldora (.nav-indicator) hasta ese link — solo con
// translateX, recalculado cada vez que cambia la sección activa, nunca
// en cada pixel de scroll.
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navLinksList = document.querySelector('.nav-links');
const navIndicator = document.querySelector('.nav-indicator');

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        let activeLink = null;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.style.color = isActive ? 'var(--nav-text)' : '';
          if (isActive) activeLink = link;
        });
        if (navIndicator && navLinksList) {
          if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const containerRect = navLinksList.getBoundingClientRect();
            const center = linkRect.left - containerRect.left + linkRect.width / 2;
            navIndicator.style.transform = `translateX(${center - 8}px)`;
            navIndicator.style.opacity = '1';
          } else {
            navIndicator.style.opacity = '0';
          }
        }
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

// .team-card ya no entra individualmente aquí: ahora vive dentro del
// carrusel (.team-carousel), que entra como un solo bloque — los
// integrantes ya no "flotan en cascada" sueltos, entra el componente.
const revealTargets = document.querySelectorAll('.card, .team-carousel, .media-frame');

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

// Carrusel 3D del equipo (coverflow) — JS solo cambia data-offset en cada
// .team-slide; el timing/curva del movimiento vive en style.css (CSS
// transition), no acá. Sin auto-rotate: el usuario decide cuándo avanzar
// (prev/next, dots, swipe, flechas de teclado), nunca gira solo.
const teamCarousel = document.querySelector('[data-team-carousel]');

if (teamCarousel) {
  const slides = [...teamCarousel.querySelectorAll('[data-slide]')];
  const dots = [...teamCarousel.querySelectorAll('[data-team-dot]')];
  const prevBtn = teamCarousel.querySelector('[data-team-prev]');
  const nextBtn = teamCarousel.querySelector('[data-team-next]');
  const stage = teamCarousel.querySelector('.team-stage');
  const count = slides.length;
  let active = 0;

  function render() {
    slides.forEach((slide, i) => {
      let offset = i - active;
      if (offset > count / 2) offset -= count;
      if (offset < -count / 2) offset += count;
      if (offset === 0) slide.dataset.offset = '0';
      else if (offset === -1) slide.dataset.offset = '-1';
      else if (offset === 1) slide.dataset.offset = '1';
      else slide.dataset.offset = 'hidden';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === active);
      dot.setAttribute('aria-selected', String(i === active));
    });
  }

  function goTo(index) {
    active = ((index % count) + count) % count;
    render();
  }

  if (count > 1) {
    prevBtn?.addEventListener('click', () => goTo(active - 1));
    nextBtn?.addEventListener('click', () => goTo(active + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    teamCarousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') goTo(active - 1);
      if (e.key === 'ArrowRight') goTo(active + 1);
    });

    // Swipe/drag horizontal sobre el stage.
    let dragStartX = null;
    stage.style.touchAction = 'pan-y';
    stage.addEventListener('pointerdown', (e) => { dragStartX = e.clientX; });
    stage.addEventListener('pointerup', (e) => {
      if (dragStartX === null) return;
      const delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 40) goTo(active + (delta < 0 ? 1 : -1));
      dragStartX = null;
    });
  } else {
    prevBtn?.setAttribute('hidden', '');
    nextBtn?.setAttribute('hidden', '');
    teamCarousel.querySelector('.team-controls')?.setAttribute('hidden', '');
  }

  render();
}

// Draw-on de los íconos "i" informativos (.field-note) al entrar en
// vista — mismo principio de seguridad que .text-reveal: el estado
// oculto (stroke-dasharray/dashoffset) se fija aquí, nunca en CSS
// estático, así que si el script no llega a correr el ícono se ve
// normal (trazo completo) desde el primer render. pathLength="1"
// normaliza cualquier forma a longitud 1, así no hace falta medir cada
// path con getTotalLength().
const iconDrawTargets = document.querySelectorAll('.field-note svg');

if ('IntersectionObserver' in window && !prefersReducedMotion && iconDrawTargets.length) {
  iconDrawTargets.forEach((svg) => {
    svg.querySelectorAll('circle, path').forEach((shape, i) => {
      shape.setAttribute('pathLength', '1');
      shape.style.strokeDasharray = '1';
      shape.style.strokeDashoffset = '1';
      shape.style.transition = `stroke-dashoffset 700ms var(--ease-out) ${i * 150}ms`;
    });
  });

  const iconObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('circle, path').forEach((shape) => {
          shape.style.strokeDashoffset = '0';
        });
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );
  iconDrawTargets.forEach((svg) => iconObserver.observe(svg));
}
