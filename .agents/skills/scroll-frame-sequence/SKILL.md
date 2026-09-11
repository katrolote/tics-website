---
name: scroll-frame-sequence
description: >-
  Build a scroll-driven canvas frame-sequence animation (the "pinned hero
  that scrubs through a pre-rendered image sequence as you scroll" effect,
  like Apple's AirPods/product pages, or agency sites such as Igloo, Lusion,
  Active Theory) using only plain HTML, CSS and vanilla JS — no framework,
  no build step, no npm dependency. Use this whenever the user asks for a
  "scroll animation", "frame sequence", "sticky canvas hero", "scrub
  animation", "3D-feeling hero without WebGL", or a "premium landing page
  with scroll effects" on a static site that has no bundler/framework.
  This is an adaptation of the 3d-scroll-website skill's frame-sequence
  algorithm, stripped of its Next.js/React/Framer Motion/Lenis stack — see
  "Provenance" below before assuming any React-specific detail applies.
---

# Scroll Frame-Sequence Animation (vanilla JS)

## Provenance — read this first

This skill adapts **one specific technique** — the pinned-canvas
frame-sequence scrub — from `3d-scroll-website` (a Claude Code skill pack by
Devini/Abhishek, `github.com/devinilabs/big-bang-devini`). That original
skill documents a full Next.js 16 + React 19 + Framer Motion + Lenis +
Tailwind pipeline. It does **not** mention `prefers-reduced-motion` anywhere.

Everything below is a from-scratch rewrite for projects with **no framework
and no build step** (plain `index.html` + `.css` + `.js`, e.g. a GitHub
Pages site). Only the underlying math (scroll progress → frame index,
cover-fit draw, DPR scaling, RAF-ticking scroll handler) is carried over,
because that part was always framework-agnostic. Everything React-specific
(refs vs. state, Framer Motion, Lenis, Next.js scaffolding) is dropped, and
`prefers-reduced-motion` handling is added — it wasn't in the source.

## Mental model

The "cinematic" feel is **not** real-time 3D. It's a `<canvas>` scrubbing
through a pre-rendered image sequence (60–120 JPGs exported from Blender /
After Effects / Cinema 4D / a video) based on scroll position:

1. A **tall section** (e.g. `400vh`) creates scroll distance.
2. An inner element is **pinned** with `position: sticky; top: 0; height: 100vh`
   while the tall parent scrolls underneath it.
3. A `<canvas>` inside the pinned element draws whichever frame corresponds
   to how far the user has scrolled through that section.
4. Optional annotation/text blocks fade in and out at scroll-progress
   thresholds, driven by the same progress value.

## Should this even be used? (gate)

This is a **marketing/hero-tier** effect — rare/first-time impact, not
something a user interacts with tens of times a day. It is legitimate motion
(explanation + delight on a landing page), but it is also scroll-jacking-
adjacent and asset-heavy (dozens of images). Don't reach for it to animate a
routine section — reserve it for a single hero or showcase moment, and only
if real frames exist or can be produced. If there are no frames to scrub
through, this is the wrong tool — a plain CSS scroll-reveal (see the
`animate` skill) covers "make this section feel alive" far more cheaply.

## HTML structure

```html
<section class="scrub" style="height: 400vh;">
  <div class="scrub-pin">
    <canvas class="scrub-canvas" aria-hidden="true"></canvas>
    <div class="scrub-text">
      <p class="eyebrow">Eyebrow</p>
      <h1>Headline that fades out early in the scroll</h1>
    </div>
    <div class="scrub-card" data-show="0.10" data-hide="0.30">Card 1</div>
    <div class="scrub-card" data-show="0.35" data-hide="0.55">Card 2</div>
    <div class="scrub-card" data-show="0.60" data-hide="0.80">Card 3</div>
  </div>
</section>
```

## CSS — the pin

```css
.scrub-pin {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  will-change: transform;   /* promote to its own GPU layer */
  transform: translateZ(0);
}

.scrub-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  will-change: contents;
}

.scrub-text, .scrub-card {
  position: absolute;
  transition: opacity 400ms ease, transform 400ms var(--ease-out, ease);
  opacity: 0;
  transform: translateY(20px);
}

.scrub-card[data-visible="true"],
.scrub-text[data-visible="true"] {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive scroll distance — shorter section on smaller screens */
@media (max-width: 1024px) { .scrub { height: 350vh; } }
@media (max-width: 768px)  { .scrub { height: 300vh; } }

@media (prefers-reduced-motion: reduce) {
  /* See "Reduced motion" section below — this alone is not enough,
     the JS must also stop pinning/scrubbing. */
  .scrub { height: auto; }
  .scrub-pin { position: static; height: auto; }
}
```

## JS — preload, scroll math, draw

```js
const FRAME_COUNT = 106;
const FRAME_PATH = (i) => `assets/frames/frame_${String(i).padStart(4, '0')}.jpg`;

const section = document.querySelector('.scrub');
const canvas = document.querySelector('.scrub-canvas');
const ctx = canvas.getContext('2d');
const cards = [...document.querySelectorAll('.scrub-card, .scrub-text')];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const frames = [];
let framesLoaded = 0;

function preloadFrames(onDone) {
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    img.onload = () => {
      framesLoaded++;
      if (framesLoaded === FRAME_COUNT) onDone();
    };
    img.src = FRAME_PATH(i);
    frames.push(img);
  }
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawFrame(index) {
  const img = frames[index];
  if (!img || !img.complete) return;
  const cw = window.innerWidth, ch = window.innerHeight;
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = cw / ch;
  let drawW, drawH;
  if (canvasRatio > imgRatio) { drawW = cw; drawH = cw / imgRatio; }
  else { drawH = ch; drawW = ch * imgRatio; }
  const drawX = (cw - drawW) / 2;
  const drawY = (ch - drawH) / 2;
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, drawX, drawY, drawW, drawH);
}

let ticking = false;
const visibleIds = new Set();

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const rect = section.getBoundingClientRect();
    const scrollableHeight = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));

    const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
    drawFrame(frameIndex);

    // Threshold-based show/hide — only touch the DOM when a card's
    // visibility actually flips, not on every scroll tick.
    cards.forEach((el) => {
      const show = parseFloat(el.dataset.show ?? '0');
      const hide = parseFloat(el.dataset.hide ?? '1');
      const shouldShow = progress >= show && progress <= hide;
      const id = el;
      const wasVisible = visibleIds.has(id);
      if (shouldShow !== wasVisible) {
        if (shouldShow) visibleIds.add(id); else visibleIds.delete(id);
        el.dataset.visible = String(shouldShow);
      }
    });

    ticking = false;
  });
}

if (!prefersReducedMotion) {
  resizeCanvas();
  preloadFrames(() => {
    drawFrame(0);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });
  });
}
```

## Reduced motion — not optional, and not in the source skill

A pinned section that hijacks 400vh of scroll to scrub a canvas is exactly
the kind of motion `prefers-reduced-motion` exists for (vestibular
discomfort from large, scroll-coupled visual movement). The original
`3d-scroll-website` skill never mentions this media query. Handling it
properly means more than dropping a CSS transition — the JS must also stop
pinning:

- **CSS** (already shown above): collapse `.scrub` to `height: auto` and
  `.scrub-pin` to `position: static; height: auto` — this alone removes the
  giant scroll-jacked distance and the sticky pin.
- **JS**: skip `preloadFrames`/`onScroll` entirely under reduced motion
  (`if (!prefersReducedMotion) { ... }`, as above). Draw a single static
  frame (e.g. frame 0, or a poster image) once, and reveal the text/cards
  with a plain opacity fade instead of scroll-thresholds — a `.text-reveal`
  / scroll-reveal pattern (see the `animate` or `accessible-animation`
  skill) is enough. Never ship the scroll-jacked 400vh section to a user
  who asked for less motion; collapse it to a normal-height section with a
  static hero image.

## Performance checklist (carried over, React parts removed)

- [ ] Scroll handler uses the `ticking` RAF-throttle pattern (one callback
      queued per frame, never stacked).
- [ ] `scroll`/`resize` listeners are `{ passive: true }`.
- [ ] All frames preload before the section becomes scrollable-interactive
      (show a loading state if the sequence is large).
- [ ] Canvas is DPR-scaled (`devicePixelRatio`) for crisp retina rendering.
- [ ] `.scrub-pin` and `.scrub-canvas` get `will-change` — but only these,
      not everything on the page (each promoted layer costs GPU memory).
- [ ] Card/text visibility is written to the DOM only when it actually
      changes (compare against the previous state), not every tick.
- [ ] `prefers-reduced-motion: reduce` fully disables the pin + scrub, not
      just the CSS transition on the cards.

## Asset pipeline

Same as the source skill: export 60–120 frames from Blender / After
Effects / Cinema 4D / a screen recording, named `frame_0001.jpg` …
`frame_NNNN.jpg`, JPG quality ~80–85%, resolution matched to the target
viewport. On a no-build static site, drop them straight into
`assets/frames/` — no processing step needed, the JS above reads them by
path directly.

For deep-dive math and edge cases (mobile zoom variant, annotation-card
zone tuning, tunnel/showcase variant with a second frame sequence), see
`references/technique-notes.md` — carried over from the original skill's
`03-scroll-animation-deep-dive.md`, annotated with what changes in vanilla
JS.
