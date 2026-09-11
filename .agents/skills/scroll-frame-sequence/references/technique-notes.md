# Technique notes — adapted from 3d-scroll-website's scroll-animation deep dive

Source: `references/03-scroll-animation-deep-dive.md` in the original
`3d-scroll-website` pack (`github.com/devinilabs/big-bang-devini`). That
file documents two React components (`Hero.tsx`, `ProjectsShowcase.tsx`).
What follows keeps the numbers and formulas — they're plain math, not
React — and drops every JSX/refs/state detail.

## Progress formula

```js
const rect = section.getBoundingClientRect();
const scrollableHeight = section.offsetHeight - window.innerHeight;
const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
```

- `rect.top` is negative once the section has scrolled past the top of the
  viewport — that's why it's negated.
- `scrollableHeight` is the section's total height minus one viewport
  height (the pinned part never "scrolls away" on its own).
- Result is normalized 0→1 regardless of section height, so the same code
  works whether the section is `300vh`, `400vh`, or `500vh`.

## Frame selection

```js
const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
```

progress `0.0` → frame 0, `0.5` → roughly the middle frame, `1.0` → last
frame. Clamped so floating-point rounding at `progress === 1` never indexes
past the array.

## Two variants from the source (hero vs. tunnel/showcase)

The original documents a second, denser variant for a "tunnel" showcase
section — same math, different tuning:

| Aspect | Hero-style | Showcase/tunnel-style |
|---|---|---|
| Section height | ~400vh | ~500vh (more scroll room for more content) |
| Frame count | ~100-110 | ~90-100 |
| Card zones | 3, spaced out (e.g. 0.10-0.30, 0.35-0.55, 0.60-0.80) | 5, tighter (e.g. 0.04-0.17 through 0.67-0.78) |
| Intro/text fade-out window | first ~8% of scroll | first ~6% of scroll (faster, since there's more content after) |
| End-of-scroll overlay | none | a final CTA can appear past ~0.82 progress |

Pick the spacing based on how much you're showing per section — more cards
packed into the same scroll distance means tighter show/hide windows, not a
different algorithm.

## Text fade formula

```js
const opacity = Math.max(0, 1 - progress / FADE_WINDOW);
```

`FADE_WINDOW` of `0.08` means the text is fully gone by 8% scroll progress
into the section; `0.06` finishes faster. Pick this based on how much of
the frame sequence you want unobstructed by text.

## Mobile handling

The source scales the drawn frame by an extra `1.3×` on narrow viewports
(after the normal cover-fit math), reasoning that mobile frame sequences
are usually shot/rendered for a wider aspect ratio than a phone screen, so
a plain cover-fit crops too aggressively without the extra zoom. Treat
`1.3` as a starting point, not a law — check it against your actual frames;
some sequences won't need it at all.

## What's genuinely dropped from the source (not just renamed)

- **Framer Motion** for card transitions → plain CSS `transition` (the
  source itself recommends CSS transitions over Framer Motion here for
  performance — see its "CSS Transitions Over Framer Motion for Scroll"
  section, so this isn't a downgrade, it's the same conclusion the original
  authors reached).
- **Lenis smooth scroll** → not replicated. Lenis is a separate physics-based
  smooth-scroll library; the frame-sequence math above works against the
  browser's native scroll position and doesn't require it. If a project
  wants Lenis-style smooth scrolling on top of this, that's a distinct,
  separate decision — don't add it by default.
- **React refs vs. state distinction** → doesn't apply; vanilla JS always
  writes directly to the DOM, which is what the "use refs, not state, for
  per-tick values" advice was steering toward in the first place.
- **Next.js asset pipeline / `public/` convention** → any static path works;
  the example above uses `assets/frames/` to match a plain static-site
  layout, not Next.js's `public/` convention.
