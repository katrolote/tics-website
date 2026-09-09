# Savee — Style Reference

> "Black canvas for visual curators"

**Theme:** dark
**Source UUID:** no confirmado — el usuario pegó este contenido sin indicar a cuál URL de la lista original corresponde.

Savee opera en oscuridad casi total: un lienzo casi negro puro (`#050505`) donde el único elemento cromático es un violeta eléctrico (`#1500ff`) que puntúa la interfaz como una luz de neón de galería. La tipografía hace todo el trabajo de jerarquía — un único sans-serif custom usado en cada nivel, desde titulares display de 96px con line-height 0.96 y tracking -0.04em hasta captions de 13px, creando un ritmo editorial que se siente más como pared de museo que dashboard de SaaS. Las superficies son casi indistinguibles entre sí: lienzo de página, tarjetas elevadas (`#151515`) y overlays más profundos (`#1e1e1e`) forman una jerarquía casi invisible que deja que la imaginería y la tipografía carguen la experiencia. El único acento violeta en el CTA primario es todo el "ruido" visual que el sistema permite — todo lo demás es texto blanco sobre negro, controles en píldora, y 64px de aire entre secciones.

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Electric Indigo | `#1500ff` | `--color-electric-indigo` | Acento violeta de soporte — solo para el CTA primario, nunca para links/iconos/decoración |
| Obsidian | `#050505` | `--color-obsidian` | Lienzo de página, fondo más profundo — el vacío sobre el que se sienta todo |
| Charcoal | `#151515` | `--color-charcoal` | Superficie elevada, marcos de preview de producto, paneles secundarios |
| Graphite | `#1e1e1e` | `--color-graphite` | Overlay más profundo, estados hover en tarjetas oscuras, inputs |
| Paper | `#fdfdfd` | `--color-paper` | Texto primario, superficie invertida, texto de botón |
| Silver | `#e5e5e5` | `--color-silver` | Bordes hairline, divisores |
| Pearl | `#d4d4d4` | `--color-pearl` | Texto secundario, subtítulos, placeholder |
| Slate | `#2f2f2f` | `--color-slate` | Bordes de footer, divisores de bajo contraste |
| Ash | `#a3a3a3` | `--color-ash` | Texto de ayuda apagado, iconos inactivos |
| Stone | `#737373` | `--color-stone` | Texto terciario, timestamps, metadatos |

## Tokens — Tipografía

**Savee Font** (custom, único tipo en todo el sistema, en todas las escalas). Peso 400 para cuerpo/nav editorial; peso 500 en botones y énfasis. El display de 96px a line-height 0.96 y tracking -0.04em es la firma del sistema: comprime el texto en un bloque denso y confiado en vez de estirarlo verticalmente, dándole sensación escultural.

- **Sustituto:** Inter, DM Sans o Satoshi
- **Pesos:** 400, 500
- **Tamaños:** 13, 14, 16, 18, 21, 24, 30, 36, 60, 96px
- **Line height:** 0.96, 1.00, 1.11, 1.13, 1.23, 1.25, 1.29, 1.33, 1.38, 1.50
- **Letter spacing:** -0.04em @96px, -0.02em @60px, -0.01em @30-36px, normal @18-24px, +0.01em @16px, +0.015em @13-14px

### Type Scale

| Rol | Tamaño | Line Height | Letter Spacing | Token |
|---|---|---|---|---|
| caption | 13px | 1.5 | 0.195px | `--text-caption` |
| body | 16px | 1.5 | 0.16px | `--text-body` |
| body-lg | 18px | 1.38 | — | `--text-body-lg` |
| subheading | 21px | 1.33 | — | `--text-subheading` |
| heading-sm | 24px | 1.29 | -0.24px | `--text-heading-sm` |
| heading | 30px | 1.25 | -0.3px | `--text-heading` |
| heading-lg | 36px | 1.13 | -0.36px | `--text-heading-lg` |
| display | 60px | 1 | -1.2px | `--text-display` |
| display-lg | 96px | 0.96 | -3.84px | `--text-display-lg` |

## Tokens — Espaciado y formas

- **Unidad base:** 4px
- **Densidad:** comfortable

### Escala de espaciado
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 (px)

### Border radius
- tags: 9999px
- cards: 14px
- pills: 9999px
- inputs: 9999px
- buttons: 9999px

**Filosofía de radio:** exactamente dos valores — 9999px (píldora completa) para todo elemento interactivo, y 14px para toda superficie pasiva (tarjetas, marcos de preview). Nada de 4px, 8px o 16px intermedios.

### Layout
- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 12px

## Componentes

- **Primary Pill Button** — único relleno del sistema. `#1500ff` fondo, texto Paper 14-16px peso 500, radio 9999px, padding 12px×24px. Aparece como máximo una vez por viewport.
- **Ghost Pill Button** — transparente, borde Paper 1px (~30% opacidad o sólido), texto Paper 14px peso 500, radio 9999px, padding 10px×20px.
- **Navigation Bar** — transparente flotando sobre el lienzo. Logo izquierda en blanco, enlaces centrados en Pearl 14px, acciones de auth a la derecha. Sin fondo, sin sombra, sin borde.
- **Display Headline** — 96px peso 500, Paper, line-height 0.96, tracking -0.04em. Centrado, hero de una sola columna (sin split, sin imagen lateral).
- **Editorial Body Block** — cuerpo de texto a escala de titular: 36px peso 400, line-height 1.13. Alineado a la izquierda, max-width ~800px.
- **Partner Logo Strip** — fila de logos en escala de grises (Ash/Pearl), precedida por caption en Stone 13px. Sin color, sin hover.
- **Product Preview Frame** — superficie Charcoal `#151515`, radio 14px, sin borde, sin sombra — la única señal de elevación es el paso de color de superficie.
- **Text Link** — hereda el color de cuerpo, subrayado solo en hover. Nunca cromático.
- **Subhead Caption** — 16-18px peso 400, Pearl, centrado, line-height 1.50.
- **Full-Width Section Spacer** — 64-80px de lienzo Obsidian vacío como único separador entre secciones.
- **Footer Divider** — única línea estructural del sistema: 1px en Slate/Silver a ~10% opacidad.

## Do's y Don'ts

### Hacer
- `#1500ff` exclusivamente para el único CTA primario por pantalla — nunca en links, iconos o decoración.
- Titulares display a 96px, line-height 0.96, tracking -0.04em.
- Radio 9999px en todo botón/tag/píldora; 14px en tarjetas y superficies — nada entre medio.
- El lienzo Obsidian como separador entre secciones — 64-80px de vacío, no líneas ni cambios de color.
- Cuerpo de texto a 36px cuando debe cargar peso editorial; nunca bajar el cuerpo principal de 16px.
- Mantener todo el texto en la paleta neutra — el único color cromático es el CTA.

### No hacer
- Nunca usar `#1500ff` fuera del CTA primario — ni en links, iconos, hover states o badges.
- Nunca sombras ni glows de elevación — la jerarquía es por paso de color de superficie.
- Nunca texto de cuerpo principal por debajo de 16px (captions sí pueden ir a 13-14px).
- Nunca introducir acentos de color adicionales, ni en ilustraciones o logos de partners.
- Nunca radios entre 0px y 9999px en botones — el sistema es binario (píldora o 14px).
- Nunca degradados en fondos, botones o texto.
- Nunca line-height por encima de 1.50.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 0 | Canvas | `#050505` | Fondo de página completo, superficie de vacío |
| 1 | Elevated Panel | `#151515` | Marcos de preview de producto, contenedores de imagen, tarjetas |
| 2 | Deep Overlay | `#1e1e1e` | Inputs, elementos interactivos anidados, hover states |

## Elevación

El sistema evita por completo las sombras. La jerarquía se expresa mediante pasos de color de superficie (`#050505` → `#151515` → `#1e1e1e`) y escala tipográfica únicamente. La ausencia de sombras es una elección de firma — mantiene la interfaz sintiéndose como una pared de galería plana en vez de un producto de software apilado en capas.

## Imagery

Imaginería centrada en producto y contenido curado por el usuario. El hero muestra un marco grande de preview de producto en Charcoal sugiriendo una interfaz dark-mode. Los logos de partners se renderizan en escala de grises plana. Densidad visual general: dominada por texto — el titular de 96px y el cuerpo de 36px ocupan mucho más espacio visual que cualquier imagen.

## Layout

Página centrada de una sola columna, max-width ~1200px. El hero abre con titular centrado, subtexto y un solo CTA — sin layout dividido, sin imagen lateral. Debajo, un marco de preview de producto (rectángulo Charcoal) ocupa todo el ancho de contenido. Sigue una fila de logos de partners. Luego texto editorial grande alineado a la izquierda a 36px. Navegación: barra flotante solo de texto, sin fondo. Secciones separadas por 64-80px de lienzo Obsidian puro. Ritmo: tipo masivo centrado → marco oscuro de producto → fila de logos silenciosa → prosa sobredimensionada → vacío.

## Marcas similares (según la referencia)

Are.na, Linear, Pitch, VSCO, Things 3 (Cultured Code).

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-electric-indigo: #1500ff;
  --color-obsidian: #050505;
  --color-charcoal: #151515;
  --color-graphite: #1e1e1e;
  --color-paper: #fdfdfd;
  --color-silver: #e5e5e5;
  --color-pearl: #d4d4d4;
  --color-slate: #2f2f2f;
  --color-ash: #a3a3a3;
  --color-stone: #737373;

  /* Typography — Font Families */
  --font-savee-font: 'Savee Font', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 13px;
  --leading-caption: 1.5;
  --tracking-caption: 0.195px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0.16px;
  --text-body-lg: 18px;
  --leading-body-lg: 1.38;
  --text-subheading: 21px;
  --leading-subheading: 1.33;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.29;
  --tracking-heading-sm: -0.24px;
  --text-heading: 30px;
  --leading-heading: 1.25;
  --tracking-heading: -0.3px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.36px;
  --text-display: 60px;
  --leading-display: 1;
  --tracking-display: -1.2px;
  --text-display-lg: 96px;
  --leading-display-lg: 0.96;
  --tracking-display-lg: -3.84px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 64px;
  --card-padding: 24px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-xl: 14px;
  --radius-full: 9999px;
  --radius-tags: 9999px;
  --radius-cards: 14px;
  --radius-pills: 9999px;
  --radius-inputs: 9999px;
  --radius-buttons: 9999px;

  /* Surfaces */
  --surface-canvas: #050505;
  --surface-elevated-panel: #151515;
  --surface-deep-overlay: #1e1e1e;
}
```
