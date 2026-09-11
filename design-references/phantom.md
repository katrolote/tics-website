# Phantom — Style Reference

> "lavender candy shop at dusk. A monochromatic violet world where everything is a soft pill on a near-white plane, interrupted by a mischievous ghost and pastel highlights."

**Theme:** mixed (secciones claras y una sección oscura aubergine conviven como igualmente nativas del sistema)
**Source:** compartido directamente por el usuario (extracción con metadata `com.refero.extraction`, sitio `https://phantom.com`, extraído 2026-06-03). No se indicó a cuál UUID de la lista original de styles.refero.design corresponde — probablemente ninguno, ya que este parece provenir de una extracción distinta (incluye tokens en formato W3C Design Tokens además de CSS/Tailwind).

**Nota de honestidad:** a diferencia de Monopo Saigon (que sí documenta una sección "Motion Personality" explícita), esta referencia **no describe ninguna animación**. Es un sistema puramente visual: paleta, tipografía, geometría de píldora y un personaje mascota. Lo que sigue es fiel solo a eso — no se inventa motion que la fuente no especifica.

Phantom es un mundo de wallet cripto suave y monocromático, bañado en aubergine y lavanda. La interfaz vive en un lienzo casi blanco pero sangra hacia secciones violeta profundo, creando un tono que oscila entre aireado e íntimo. La tipografía es de peso susurro (350) con tracking negativo agresivo, dejando que líneas de hero de 80-96px floten con gracia. El sello distintivo es la geometría de píldora generosa — navegación, botones y tarjetas se disuelven en formas de cápsula con radios de 24-100px. Una mascota fantasma reemplaza vocales en los titulares, rompiendo la grilla con subversión juguetona. La paleta es deliberadamente angosta: un violeta primario hace todo el trabajo estructural, mientras tintes pastel de botón (lavanda, mantequilla, blush) crean un ritmo de tienda de dulces contra el fondo contenido.

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Aubergine | `#3c315b` | `--color-aubergine` | Marca primaria — bordes de nav, texto de nav, texto de heading, superficies de tarjeta en secciones oscuras, trazos de ícono. La columna estructural de todo el sistema |
| Ghost Lavender | `#e2dffe` | `--color-ghost-lavender` | Acción primaria — fondo de botón CTA relleno, glow violeta en botones. El botón claro-sobre-claro que solo revela su presencia mediante un halo suave de 4px |
| Periwinkle | `#ab9ff2` | `--color-periwinkle` | Acción secundaria — lavanda más brillante para CTAs secundarios, rellenos decorativos, acentos de ícono. Es también el color de la mascota fantasma |
| Cornflower Pop | `#4a87f2` | `--color-cornflower-pop` | Botón de acento — azul vívido ocasional para énfasis o diferenciación. Usar con moderación como interrupción de alta energía |
| Buttercream | `#ffffc4` | `--color-buttercream` | Botón de acento — amarillo pálido, puntuación pastel en la paleta de dulces |
| Blush Mist | `#ffdadc` | `--color-blush-mist` | Botón de acento — rosa casi-gris, el más suave del set pastel |
| Mint Signal | `#2ec08b` | `--color-mint-signal` | Badge de éxito — verde vívido para indicadores de estado, confirmaciones positivas |
| Paper White | `#fdfcfe` | `--color-paper-white` | Lienzo — fondo de página, superficies de tarjeta, bordes de botón, texto sobre fondos oscuros |
| Obsidian | `#1c1c1c` | `--color-obsidian` | Texto de cuerpo, texto de heading sobre fondos claros, bordes de botón/tarjeta |
| Fog | `#86848d` | `--color-fog` | Texto apagado, trazos de ícono, bordes de nav secundarios |
| Ash | `#e9e8ea` | `--color-ash` | Fondo de botón, relleno de superficie sutil |
| Bone | `#f4f2f4` | `--color-bone` | Fondo de superficie — paneles de sección claros, rellenos de botón |

## Tokens — Tipografía

**Phantom** (custom) — único tipo usado para todo. Peso 350 es el default para cuerpo y display — una ligereza poco convencional crea una personalidad aireada, anti-bold. Peso 400 reservado para copy que necesita algo más de presencia. Tracking de -0.025em en **todos** los tamaños (no solo en los grandes) — es "no negociable" según la propia guía. Line-height colapsa a 1.0-1.1 en tamaños display.

- **Sustituto:** Inter, Söhne o DM Sans en peso 300/400 con tracking -0.025em
- **Pesos:** 350, 400
- **Tamaños:** 13, 15, 16, 20, 24, 30, 64, 80, 96px
- **Line height:** 1.00, 1.10, 1.20, 1.21, 1.25, 1.35, 1.40
- **Letter spacing:** -0.025em uniforme (≈ -2.4px @96px, -1.6px @64px, -0.4px @16px, -0.325px @13px)

### Type Scale

| Rol | Tamaño | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| caption | 13px | 1.35 | — | `--text-caption` |
| body-sm | 15px | 1.4 | -0.375px | `--text-body-sm` |
| subheading | 20px | 1.35 | -0.5px | `--text-subheading` |
| heading-sm | 24px | 1.25 | -0.6px | `--text-heading-sm` |
| heading | 30px | 1.21 | -0.75px | `--text-heading` |
| heading-lg | 64px | 1.1 | -1.6px | `--text-heading-lg` |
| display | 96px | 1 | -2.4px | `--text-display` |

## Tokens — Espaciado y formas

- **Unidad base:** 4px
- **Densidad:** comfortable

### Escala de espaciado
4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128 (px)

### Border radius
- nav: 100px
- tags: 100px
- cards: 24px
- links: 32px
- buttons: 100px

Regla explícita: nunca esquinas agudas por debajo de 16px, nunca radios de tarjeta por debajo de 24px — "el mundo son píldoras y cápsulas suaves."

### Sombras
Una sola sombra en todo el sistema: `--shadow-sm: rgb(226, 223, 254) 0px 0px 4px 0px` — un halo violeta de 4px, exclusivo del botón CTA primario. Nada más lleva sombra.

### Layout
- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 48px
- **Element gap:** 8-16px

## Componentes

- **Pill Navigation Bar** — contenedor blanco (`#fdfcfe`) con radio 100px completo, enlaces a 15px peso 350 en `#3c315b`, cada uno con un indicador chevron de 4px.
- **Download Button (Header)** — relleno Ghost Lavender, texto `#3c315b`, radio 100px, padding 16px×32px, con el halo `--shadow-sm`.
- **Hero Section (Dark)** — fondo Aubergine, texto blanco 64-80px peso 350 centrado, CTA en píldora debajo.
- **Hero Section (Light)** — fondo Paper White/Bone, texto Aubergine 64-80px — la mascota fantasma reemplaza una vocal del titular, en Periwinkle.
- **Muted Purple Hero Panel** — panel violeta desaturado como puente tonal entre el modo claro y el oscuro.
- **See More Link Button** — relleno Ghost Lavender, radio 100px, padding 12px×24px, con flecha diagonal.
- **Ghost Character Accent** — la mascota, en Periwinkle, sustituye una vocal inline dentro de titulares display — el único elemento ilustrado del sistema.
- **Pastel Accent Button Set** — Buttercream / Blush Mist / Cornflower Pop, mismo radio 100px, usados en grupo para ritmo de "paleta de dulces."
- **Logo Lockup** — wordmark + ícono fantasma, Aubergine en fondo claro / Paper White en fondo oscuro.
- **Search Icon Button** — 32px cuadrado, solo ícono, sin fondo ni borde.
- **Success Badge** — Mint Signal, radio 100px, padding 8px×16px, 13px peso 350.
- **Card Surface** — Paper White, radio 24px, padding 48px, borde 1px en `#e9e8ea`/`#f4f2f4`. **Sin sombra** — la separación viene del borde y el padding generoso.

## Do's y Don'ts

### Hacer
- Radio 100px en toda navegación, botón y tag — la geometría de píldora es la silueta definitoria.
- Peso 350 por default en todo el texto; peso 400 solo cuando el cuerpo necesita más legibilidad.
- Tracking -0.025em en cada tamaño tipográfico, sin excepción.
- Ghost Lavender como relleno de CTA primario, siempre con el halo `rgb(226,223,254) 0 0 4px 0`.
- Alternar entre secciones claras y Aubergine oscura para crear ritmo — ambos modos son igualmente nativos.
- Colapsar line-height a 1.0-1.1 en tamaños ≥64px.
- Reemplazar una vocal de los titulares display con la mascota fantasma en Periwinkle, para el gesto de marca.

### No hacer
- Nunca sombras más allá del único halo violeta de 4px en el CTA primario.
- Nunca peso ≥600 — el susurro en 350 es la voz de marca, no un recurso de énfasis.
- Nunca esquinas agudas por debajo de 16px.
- Nunca colores saturados fuera del set pastel (`#4a87f2`, `#ffffc4`, `#ffdadc`) — la paleta es intencionalmente angosta.
- Nunca texto de cuerpo >16px en peso 400, ni line-height >1.4.
- Nunca gradientes, patrones o imágenes de fondo — la superficie es siempre color plano.
- Nunca radios de tarjeta <24px, ni de elementos pequeños <16px.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 1 | Paper White | `#fdfcfe` | Lienzo base — fondo de página por defecto |
| 2 | Bone | `#f4f2f4` | Paneles de sección claros |
| 3 | Ash | `#e9e8ea` | Superficie de botón neutro |
| 4 | Ghost Lavender | `#e2dffe` | Superficie de CTA primario con halo violeta |
| 5 | Aubergine | `#3c315b` | Fondo de sección oscura, paneles de hero invertidos |

## Elevación

Una sola sombra en todo el sistema (`--shadow-sm`), reservada exclusivamente al botón CTA primario (relleno Ghost Lavender). Todo lo demás es plano — sin drop shadows, sin glows adicionales.

## Imagery

Sin fotografía, sin screenshots de producto, sin gráficos abstractos. El lenguaje visual es tipografía pura + la mascota fantasma — el único elemento ilustrado recurrente, siempre plano en Periwinkle e inline dentro de texto. El texto domina la jerarquía visual por completo.

## Layout

Contenedor máx. 1200px. Alternancia de secciones hero claras/oscuras/violeta-muteado como ritmo estructural. Navegación en píldora flotante con logo a la izquierda y CTA "Download" a la derecha. Tarjetas de contenido sin sombra, separadas por borde + padding generoso (48px).

## Marcas similares (según la referencia)

Linear, Rainbow Wallet, Belka, Stripe.

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-aubergine: #3c315b;
  --color-ghost-lavender: #e2dffe;
  --color-periwinkle: #ab9ff2;
  --color-cornflower-pop: #4a87f2;
  --color-buttercream: #ffffc4;
  --color-blush-mist: #ffdadc;
  --color-mint-signal: #2ec08b;
  --color-paper-white: #fdfcfe;
  --color-obsidian: #1c1c1c;
  --color-fog: #86848d;
  --color-ash: #e9e8ea;
  --color-bone: #f4f2f4;

  /* Typography — Font Families */
  --font-phantom: 'Phantom', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.35;
  --text-body-sm: 15px;
  --leading-body-sm: 1.4;
  --tracking-body-sm: -0.375px;
  --text-subheading: 20px;
  --leading-subheading: 1.35;
  --tracking-subheading: -0.5px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.6px;
  --text-heading: 30px;
  --leading-heading: 1.21;
  --tracking-heading: -0.75px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.6px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -2.4px;

  /* Typography — Weights */
  --font-weight-w350: 350;
  --font-weight-regular: 400;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 48px;
  --element-gap: 8-16px;

  /* Border Radius */
  --radius-md: 4px;
  --radius-2xl: 16px;
  --radius-3xl: 24px;
  --radius-3xl-2: 32px;
  --radius-full: 96px;
  --radius-full-2: 100px;

  /* Named Radii */
  --radius-nav: 100px;
  --radius-tags: 100px;
  --radius-cards: 24px;
  --radius-links: 32px;
  --radius-buttons: 100px;

  /* Shadows */
  --shadow-sm: rgb(226, 223, 254) 0px 0px 4px 0px;

  /* Surfaces */
  --surface-paper-white: #fdfcfe;
  --surface-bone: #f4f2f4;
  --surface-ash: #e9e8ea;
  --surface-ghost-lavender: #e2dffe;
  --surface-aubergine: #3c315b;
}
```
