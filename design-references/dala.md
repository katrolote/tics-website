# Dala — Style Reference

> "Your workplace has the answer. Just ask Dala for it."
> "constellation floating on black velvet"

**Theme:** dark
**Source UUID:** `c9c5be5a-aaa1-4338-9681-8378d2e24fbd` (`https://styles.refero.design/style/c9c5be5a-aaa1-4338-9681-8378d2e24fbd`)

Dala opera como un entorno "dark-stage" donde el vacío negro se encuentra con un único acento violeta vívido, puntuado por chispas ámbar. La tipografía es monolítica e ingrávida — PPNeueMontreal en peso 400 domina todos los titulares en escalas descomunales (78–113px) con tracking negativo agresivo, haciendo que los titulares se sientan esculturales en vez de informativos. La pieza visual central es una constelación de diminutas partículas triangulares multicolor formando una silueta de cerebro orgánico — el gesto de marca que representa "conocimiento como inteligencia distribuida" en vez de datos jerárquicos. El layout sigue un ritmo espacioso de dos columnas — titulares gigantes alineados a la izquierda junto a texto generoso, flotando sobre negro puro sin paneles, bordes ni tarjetas. Los componentes se reducen a lo esencial: un botón píldora violeta, enlaces "ghost", y bloques de texto de gran formato.

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Void | `#000000` | `--color-void` | Lienzo de página, fondos de sección, espacio negativo — negro puro es la superficie dominante, no gris oscuro |
| Bone White | `#ffffff` | `--color-bone-white` | Titulares, texto de cuerpo, íconos, estado activo de nav — el único color tipográfico |
| Ash Gray | `#9a9a9a` | `--color-ash-gray` | Texto de nav apagado, color de enlace ghost, etiquetas secundarias |
| Silver Mist | `#bdbdbd` | `--color-silver-mist` | Texto de cuerpo terciario, información a nivel caption |
| Electric Iris | `#8052ff` | `--color-electric-iris` | Botones de acción primaria, marca del logo, acentos de marca — el único violeta saturado |
| Saffron Spark | `#ffb829` | `--color-saffron-spark` | Texto de énfasis, enlaces de acento, puntuación de atención |
| Deep Verdant | `#15846e` | `--color-deep-verdant` | Tinte de superficie secundaria, stop de gradiente del logo |

## Tokens — Tipografía

**PPNeueMontreal** — único tipo en todos los contextos de UI. Tamaños display (78–113px) llevan titulares en peso 400 con tracking -0.04em — el mismo peso que el cuerpo de texto, pero la escala masiva crea la jerarquía. El peso 200 (ultra-light) se reserva para el cuerpo de 18px — elección de firma, ya que la mayoría de sitios AI/SaaS usa peso 400 para el cuerpo. El peso 600 a 14px con tracking 0.025em y mayúsculas sirve para nav y etiquetas pequeñas.

- **Sustituto:** Inter
- **Pesos:** 200, 400, 600, 700
- **Tamaños:** 12, 14, 15, 18, 24, 27, 36, 42, 48, 78, 113px
- **Line height:** 0.81, 0.90, 1.00, 1.10, 1.20, 1.25, 1.30, 1.50
- **Letter spacing:** -4.52px @113px, -3.12px @78px, -1.68px @42px, -0.48px @24px, normal @18px body; 0.025em @14px uppercase nav
- **OpenType:** `"ss01" on`

### Type Scale

| Rol | Tamaño | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| caption | 12px | 1.5 | — | `--text-caption` |
| nav-label | 14px | 1.2 | 0.35px | `--text-nav-label` |
| body | 18px | 1.5 | — | `--text-body` |
| heading-2xs | 24px | 1.25 | -0.48px | `--text-heading-2xs` |
| heading-xs | 27px | 1 | — | `--text-heading-xs` |
| subheading | 36px | 1.2 | — | `--text-subheading` |
| heading-sm | 42px | 1.2 | -1.68px | `--text-heading-sm` |
| heading | 48px | 1.1 | -1.68px | `--text-heading` |
| heading-lg | 78px | 1.1 | -3.12px | `--text-heading-lg` |
| display | 113px | 1.1 | -4.52px | `--text-display` |

## Tokens — Espaciado y formas

- **Unidad base:** 6px
- **Densidad:** comfortable

### Escala de espaciado
6, 12, 18, 24, 30, 36, 60, 96, 120 (px)

### Border radius
- nav: 24px
- tags: 9999px
- cards: 24px
- buttons: 24px

### Layout
- **Page max-width:** 1280px
- **Section gap:** 60–120px
- **Card padding:** 24–38px
- **Element gap:** 6–18px

## Componentes

- **Primary Action Button** — píldora violeta rellena, única CTA. `#8052ff` fondo, texto blanco, radio 22.5px, padding 14.4px × 15.96px. 14px peso 400/600, mayúsculas, tracking 0.025em.
- **Ghost Text Button** — enlace de texto subrayado o desnudo, `#ffffff` o `#9a9a9a`, 14px peso 400. Sin contenedor.
- **Logo Lockup** — ícono triangular `#8052ff` con degradado a `#15846e`, + wordmark "Dala" en blanco.
- **Team Member Card** — sin fondo/borde/sombra. Foto rectangular redondeada (~24px), rol en 12px mayúsculas `#8052ff`, nombre en display blanco grande.
- **Carousel Navigation Dot** — círculo ~8px, `#8052ff` violeta activo, sin contenedor.
- **Hero Constellation Visualization** — miles de glifos triangulares diminutos (contorno 1-2px) en espectro vívido completo, formando un cerebro/nube orgánica sobre negro puro. Animado, no estático.
- **Section Headline Block** — dos columnas asimétricas: titular 78–113px peso 400 a la izquierda, cuerpo 18px peso 200 con etiqueta mayúscula ámbar (`#ffb829`) arriba. Sin cajas ni bordes.
- **Navigation Bar** — fondo transparente sobre negro. Logo izquierda, enlaces centro/derecha en 14px mayúsculas. Botón "Request Access" (píldora violeta) ancla el borde derecho.
- **Ambient Particle Field** — triángulos pequeños de contorno dispersos a baja opacidad fuera de la constelación principal.

## Do's y Don'ts

### Hacer
- Usar `#8052ff` exclusivamente para botones de acción rellenos.
- Titulares siempre en peso 400, nunca bold — jerarquía por escala (78–113px) y tracking (-0.04em).
- Cuerpo de texto en PPNeueMontreal peso 200 a 18px — no sustituir por 400.
- Mantener negro `#000000` puro como fondo de cada sección — nunca gris oscuro ni paneles.
- Tracking -0.04em en todos los tamaños display ≥42px (≈-4.52px a 113px).
- Radio de 24px consistente en botones, tarjetas y nav; píldora solo en elementos muy pequeños.
- La constelación de partículas como única imagen de hero — sin fotografía, ilustración ni screenshots de producto en esa zona.

### No hacer
- No usar violeta relleno para bloques de fondo grandes — es color de botón/acento, no de superficie.
- No poner el cuerpo de texto en peso 400 — el ultra-light (200) es la firma.
- No introducir contenedores de tarjeta con bordes, sombras o rellenos — los elementos flotan solo con whitespace.
- No usar `#0000ee` (azul de link por defecto) — usar ámbar `#ffb829` o blanco.
- No agregar degradados a componentes de UI — solo en el logo y la visualización de partículas.
- No sustituir la tipografía con fuentes de sistema si importa la geometría — usar Inter como fallback, preservando la convención de pesos (200 body / 400 headline).
- No colocar múltiples botones rellenos próximos entre sí — el violeta es para una sola acción primaria por vista.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 0 | Void Canvas | `#000000` | Fondo de página completo, base del vacío |
| 1 | Deep Verdant Tint | `#15846e` | Superficie de acento sutil, profundidad del logo |
| 2 | Electric Iris | `#8052ff` | Superficie más alta — solo botones rellenos/elementos interactivos activos |

## Elevación

Sin sombras ni elevación. Toda la jerarquía se logra con escala, contraste de color y whitespace sobre un lienzo negro plano — deliberado, para preservar la sensación de "flotar en el vacío".

## Imagery

Procedural y abstracta — sin fotografía salvo retratos de equipo. Visual de firma: nube densa de miles de partículas triangulares de contorno en espectro vívido completo formando una silueta de cerebro/nube orgánica, animada. Partículas ambientales de fondo a menor densidad. Sin screenshots de producto, sin fotografía lifestyle, sin renders 3D — el sistema de partículas ES la marca visual.

## Layout

Secciones full-bleed sobre negro puro, ancho máx. de contenido ~1280px centrado. Hero en split asimétrico de dos columnas: titular gigante (113px) + cuerpo + CTA a la izquierda, visualización de partículas a la derecha a escala masiva. Secciones siguientes alternan la composición (visual-izq/texto-der, luego texto-izq/visual-der) en zigzag. Gaps de sección generosos (60–120px). Sin grids de tarjetas, sin tablas de precios, sin bloques de features multi-columna. Navegación mínima transparente, sin sidebar ni mega-menu. Densidad extremadamente espaciosa: uno o dos elementos por viewport.

## Marcas similares

Linear, Vercel, Anthropic, Runway — todas comparten "negro como material de diseño activo + un solo acento saturado + tipografía peso 400 en escalas enormes con tracking negativo".

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-void: #000000;
  --color-bone-white: #ffffff;
  --color-ash-gray: #9a9a9a;
  --color-silver-mist: #bdbdbd;
  --color-electric-iris: #8052ff;
  --color-saffron-spark: #ffb829;
  --color-deep-verdant: #15846e;

  /* Typography — Font Families */
  --font-ppneuemontreal: 'PPNeueMontreal', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-nav-label: 14px;
  --leading-nav-label: 1.2;
  --tracking-nav-label: 0.35px;
  --text-body: 18px;
  --leading-body: 1.5;
  --text-heading-2xs: 24px;
  --leading-heading-2xs: 1.25;
  --tracking-heading-2xs: -0.48px;
  --text-heading-xs: 27px;
  --leading-heading-xs: 1;
  --text-subheading: 36px;
  --leading-subheading: 1.2;
  --text-heading-sm: 42px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -1.68px;
  --text-heading: 48px;
  --leading-heading: 1.1;
  --tracking-heading: -1.68px;
  --text-heading-lg: 78px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -3.12px;
  --text-display: 113px;
  --leading-display: 1.1;
  --tracking-display: -4.52px;

  /* Typography — Weights */
  --font-weight-extralight: 200;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 6px;
  --spacing-6: 6px;
  --spacing-12: 12px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-60: 60px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 60-120px;
  --card-padding: 24-38px;
  --element-gap: 6-18px;

  /* Border Radius */
  --radius-3xl: 24px;
  --radius-full: 9999px;
  --radius-nav: 24px;
  --radius-tags: 9999px;
  --radius-cards: 24px;
  --radius-buttons: 24px;

  /* Surfaces */
  --surface-void-canvas: #000000;
  --surface-deep-verdant-tint: #15846e;
  --surface-electric-iris: #8052ff;
}
```
