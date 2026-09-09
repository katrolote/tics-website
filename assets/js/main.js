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

// Revelado suave al hacer scroll — curva fluida documentada en
// design-references/monopo-saigon.md (Motion Personality): transiciones
// lentas tipo "movimiento de cámara", no snaps de UI.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.card, .team-card, .media-frame, .section-head');

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 1s var(--ease-fluid), transform 1.1s var(--ease-fluid)';
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

// Fondo animado — campo de partículas flotantes en canvas.
// Síntesis de dos referencias de design-references/: la constelación de
// partículas animada de Dala, dibujada con el ritmo lento y fluido de la
// curva de easing documentada en Monopo Saigon. Se desactiva por completo
// si el usuario prefiere menos movimiento; el fondo estático de body
// (gradiente + imagen) queda como respaldo en ese caso o sin JS.
(function initAnimatedBackground() {
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('bg-canvas');
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext('2d');
  const COLORS = ['34, 211, 200', '255, 111, 97', '242, 193, 78']; // teal, coral, dorado

  let width = 0;
  let height = 0;
  let particles = [];
  let running = true;
  let rafId = null;

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.01
    };
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(40, Math.min(110, Math.round((width * height) / 9000)));
    particles = Array.from({ length: count }, createParticle);
  }

  function step(t) {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      const pulse = 0.4 + 0.6 * Math.abs(Math.sin(p.phase + t * p.speed * 0.001));
      const alpha = pulse * 0.55;
      const radius = p.r * (1 + pulse * 0.4);

      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
      ctx.shadowColor = `rgba(${p.color}, ${alpha})`;
      ctx.shadowBlur = radius * 4;
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    rafId = requestAnimationFrame(step);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running && !rafId) {
      rafId = requestAnimationFrame(step);
    } else if (!running && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  });

  resize();
  rafId = requestAnimationFrame(step);
})();
