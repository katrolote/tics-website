# Monopo Saigon — Style Reference

> "Liquid iridescence behind editorial silence — a monochrome editorial gallery floating on molten light."

**Theme:** light
**Source UUID:** no confirmado — el usuario pegó este contenido sin indicar a cuál URL de la lista original corresponde. No asumir cuál es hasta confirmarlo.

Monopo Saigon opera con disciplina radical de monocromía: negro y blanco puros con grises susurrantes, envueltos en tipografía Roobert masiva que respira sobre lienzos a sangre completa. El contraste de firma vive entre la restricción editorial austera (esquinas de 0px en nav y enlaces de texto, whitespace generoso, ritmo basado en 4px) y un único gesto expresivo — botones píldora completa de radio 75px que flotan como líquido sobre la imaginería. Los entornos de hero se inclinan hacia atmósferas iridiscentes y fluidas (verdes disolviéndose en ámbar y luego en oxblood profundo) mientras la interfaz misma nunca toma un matiz de color — creando la sensación de una galería editorial en blanco y negro flotando sobre un río de luz líquida. La tipografía marca la temperatura: peso 300 a 78px susurra, peso 400 a 225px llena el viewport, y peso 400 a 11px etiqueta todo lo demás con minimalismo confiado. El movimiento es expresivo pero paciente — curvas de easing `cubic-bezier(0.19, 1, 0.22, 1)` con transiciones de transform de hasta 1.25s, dejando que los elementos se deslicen en vez de saltar.

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Obsidian | `#000000` | `--color-obsidian` | Texto primario, trazos SVG, rellenos de overlay |
| Paper | `#ffffff` | `--color-paper` | Texto claro sobre superficies oscuras, etiquetas inversas — no promover a color de CTA primario |
| Inkstone | `#181818` | `--color-inkstone` | Cuerpo de footer y titulares secundarios |
| Felt Gray | `#6d6d6d` | `--color-felt-gray` | Texto ayuda apagado, bloques de dirección, texto legal |
| Slate Pill | `#636363` | `--color-slate-pill` | Fondo de botón neutro relleno — único fill sólido usado (ej. "Accept") |
| Ash Mist | `#9a9a9a` | `--color-ash-mist` | Tono medio para superficies deshabilitadas/bajo contraste |
| Pewter | `#808080` | `--color-pewter` | Tono medio secundario para hover/estados apagados |
| Iridescent Fade | `linear-gradient(90deg, rgb(160,224,171), rgb(255,172,46) 50%, rgb(165,45,37))` | `--color-iridescent-fade` | Acento cromático **solo** dentro del fondo del hero — nunca en controles de UI |

## Tokens — Tipografía

### Roobert — tipo principal
Tipo principal en toda la interfaz: nav, titulares de hero, cuerpo, listas, footers. Sans geométrico con calidez humanista; rango de peso amplio (300 susurro hasta 600 ancla) permite que el sistema respire desde titulares monumentales de 225px hasta etiquetas de 11px.

- **Sustituto:** Inter o Söhne
- **Pesos:** 300, 400, 600
- **Tamaños:** 11, 12, 16, 18, 29, 30, 39, 45, 54, 78, 94, 225px
- **Line height:** 0.70–2.34 (ajustado 0.70–0.76 en displays, generoso 1.58 en body)

### Raleway — acento de titular puntual
Reservado para contextos de titular específicos donde un sans más elegante y angosto introduce contraste — aparece con moderación como contrapunto a Roobert.
- **Sustituto:** Montserrat o Jost
- **Pesos:** 400
- **Tamaños:** 54px
- **Line height:** 1.39

### system-ui — micro UI
Etiquetas micro de UI, cuerpo del banner de cookies, letra pequeña.
- **Pesos:** 400
- **Tamaños:** 9, 16px
- **Line height:** 1.15–1.32

### Type Scale

| Rol | Tamaño | Line Height | Token |
|---|---|---|---|
| caption | 12px | 1.19 | `--text-caption` |
| body-sm | 16px | 1.15 | `--text-body-sm` |
| body | 18px | 1.21 | `--text-body` |
| subheading | 39px | 1.19 | `--text-subheading` |
| subheading-lg | 45px | 1.15 | `--text-subheading-lg` |
| heading-sm | 54px | 1.39 | `--text-heading-sm` |
| heading | 78px | 1.1 | `--text-heading` |
| heading-lg | 94px | 0.76 | `--text-heading-lg` |
| display | 225px | 1.25 | `--text-display` |

## Tokens — Espaciado y formas

- **Unidad base:** 4px
- **Densidad:** spacious

### Escala de espaciado
8, 12, 28, 40, 48, 64, 68, 152 (px)

### Border radius
- tags: 75px
- cards: 0px
- images: 0px
- inputs: 0px
- buttons: 75px

Regla de firma: nunca radios intermedios entre 1px y 74px — el sistema salta de 0px filoso a 75px píldora completa, sin nada entre medio.

### Layout
- **Page max-width:** 1078px
- **Section gap:** 46px
- **Card padding:** 34px
- **Element gap:** 14px

## Componentes

- **Ghost Pill Button (superficie oscura)** — fondo transparente, borde 1px `rgba(255,255,255,0.3)`, texto `#ffffff`, radio 75px, padding 11px×33px, Roobert 16px peso 400.
- **Ghost Pill Button (superficie clara)** — igual geometría, paleta invertida: borde/texto `#000000`.
- **Filled Neutral Pill** — único fill sólido del sistema. `rgba(55,55,55,0.78)` (≈ Slate Pill), texto blanco, borde blanco 1px, radio 75px. Solo para consentimiento de cookies, nunca CTA principal de marketing.
- **Underline-Free Text Link** — sin fondo/borde, 0px radio, Roobert 12–16px peso 400, sin subrayado — el contexto y el peso distinguen el enlace del cuerpo.
- **Hero Display Headline** — Roobert 225px peso 400, line-height 1.25, blanco sobre medio iridiscente oscuro. Sin subtítulo ni CTA — el titular ES el hero.
- **Section Heading (Whisper Weight)** — Roobert 78px peso 300, line-height 1.10. Anti-convención: la mayoría usaría 600–700 aquí.
- **Section Heading (Anchor Weight)** — Roobert 94px peso 400, line-height 0.76 (dramáticamente ajustado, casi tocándose).
- **Project Card / List Row** — sin chrome de tarjeta; imagen a sangre completa dentro del contenedor de 1078px, título debajo en 16–18px peso 400.
- **Language Switcher** — 3 enlaces de texto inline (EN/VN/中文), separados por whitespace, sin divisores.
- **Rotating Scroll Indicator** — insignia circular SVG con texto trazando la circunferencia ("SCROLL DOWN"), rotación continua lenta, esquina inferior izquierda.
- **Footer Address Block** — Roobert 11px peso 400, `#6d6d6d`, sin divisores ni etiquetas.
- **Cookie Banner** — barra fija inferior, fondo Slate Pill translúcido, botón Filled Neutral Pill "Accept".
- **Top Navigation Bar** — header fijo transparente de 66px, logo izquierda, selector de idioma centrado, menú a la derecha, sin fondo — invisible hasta que el contenido hace scroll detrás.
- **Iridescent Hero Backdrop** — medio de fondo full-viewport: verde salvia → ámbar → oxblood, tratado como textura líquida fluida (nunca gradiente plano). Única superficie cromática de todo el sistema, y solo detrás de texto.

## Do's y Don'ts

### Hacer
- Titulares display a 225px Roobert peso 400 dominando el viewport — sin subtítulos ni CTAs que compitan.
- Radio 75px exclusivo para botones y tags; todo lo demás (tarjetas, imágenes, inputs) en 0px.
- Reservar el color para un solo fondo de hero iridiscente por página — toda la UI (texto, bordes, fills) estrictamente en escala blanco/negro/gris.
- Peso 300 a 78px para titulares de manifiesto/atmosféricos — nunca subir de peso 400 en esa escala.
- Line-height 0.70–0.76 en tamaños display >78px.
- Easing `cubic-bezier(0.19, 1, 0.22, 1)` en transform/color, duraciones 0.8–1.25s.
- Enlaces de texto interactivos siempre a 0px radio, sin subrayado.

### No hacer
- Nunca introducir un color de UI cromático — el iridiscente es solo medio, nunca controles.
- Nunca `box-shadow` o elevación en tarjetas, botones o imágenes.
- Nunca radios entre 1px y 74px.
- Nunca pesos ≥600 por encima de 45px.
- Nunca centrar texto de cuerpo en bloques de dirección, listas o descripciones — siempre alineado a la izquierda.
- Nunca degradados en botones/badges/controles — solo en el medio atmosférico del hero.
- Nunca usar Raleway para cuerpo o navegación — solo acento de titular, con moderación.
- Nunca llenar el lienzo de imaginería — el sistema es dominado por texto con un solo gesto visual de tamaño hero por página.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 1 | Paper | `#ffffff` | Lienzo primario — la mayoría de secciones |
| 2 | Slate Pill | `#636363` | Superficie de botón relleno para cookies/acciones neutras |
| 3 | Obsidian | `#000000` | Overlay oscuro y sección inversa — bandas oscuras a sangre completa detrás del medio iridiscente |
| 4 | Ash Mist | `#9a9a9a` | Capa de tono medio para paneles insertados o zonas deshabilitadas |

## Elevación

Sin sombras. Las superficies se distinguen por inversión de color (bandas blanco↔negro) y bordes hairline de 1px, no por sombras apiladas. El único gesto de "elevación" es la píldora slate translúcida del banner de cookies, vía opacidad de fondo, no sombra.

## Imagery

Teatral y singular: una textura fluida iridiscente masiva domina el hero (verdes orgánicos disolviéndose en ámbar y luego en oxblood, como aceite sobre agua o vidrio fundido) — posiblemente video o canvas por shader, ocupando el viewport entero como un momento sensorial único, no un patrón repetido. Los showcases de proyecto usan fotografía editorial contenida (crops ajustados de producto, stills de campaña) sin marcos ni bordes. Sin ilustración, sin íconos más allá de glifos mínimos de UI. Densidad general: dominado por texto, con un solo gesto visual de tamaño hero, luego largos tramos editoriales silenciosos de tipografía e imaginería de producto.

## Layout

Contenedor máx. 1078px centrado, con secciones de hero oscuras a sangre completa rompiendo el contenedor. Hero full-viewport: titular monumental centrado flotando sobre medio iridiscente, navegación mínima flotante arriba, insignia rotatoria única abajo-izquierda. Secciones de cuerpo siguen ritmo editorial espacioso — gaps de sección de 46px generosos, alternando bandas blancas y oscuras (negro con tipo blanco). Composición asimétrica: alternancias texto-izq/imagen-der e imagen-izq/texto-der dominan, sin stacks centrados fuera del hero. Grids de tarjetas aparecen como listas de proyecto de una sola columna, no grids multi-columna. Nav: barra superior transparente, logo izq, idioma centro, menú derecha — sin cambio de color sticky, sin sombra. Footer: bloque de dirección de tres columnas compacto (Tokyo, Saigon, London) en 11px. En general: ritmo de revista editorial en un marco digital.

## Motion Personality

Movimiento expresivo pero sin prisa — tratamiento de transiciones como movimientos de cámara lentos, no snaps de UI. Curva de firma `cubic-bezier(0.19, 1, 0.22, 1)` (ease-out suave) aplicada a transform, color y opacidad en duraciones de 0.8s y 1.25s. Transiciones más cortas usan `ease` plano a 0.4s para micro-interacciones de color/opacidad. Animación de rotación continua en la insignia de scroll a tempo lento. Los transforms dominan sobre la animación posicional — los elementos se deslizan y revelan vía transform, no reposicionamiento de layout. La duración de 1.25s en transforms (69 ocurrencias) señala que el estudio prefiere paciencia sobre respuesta inmediata.

## Marcas similares

Resn, Active Theory, Locomotive, Pentagram — todas comparten el sistema editorial austero blanco/negro con esquinas filosas de 0px y un sans geométrico custom.

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #000000;
  --color-paper: #ffffff;
  --color-inkstone: #181818;
  --color-felt-gray: #6d6d6d;
  --color-slate-pill: #636363;
  --color-ash-mist: #9a9a9a;
  --color-pewter: #808080;
  --color-iridescent-fade: #a02d25;
  --gradient-iridescent-fade: linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37));

  /* Typography — Font Families */
  --font-roobert: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-raleway: 'Raleway', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 1.19;
  --text-body-sm: 16px;
  --leading-body-sm: 1.15;
  --text-body: 18px;
  --leading-body: 1.21;
  --text-subheading: 39px;
  --leading-subheading: 1.19;
  --text-subheading-lg: 45px;
  --leading-subheading-lg: 1.15;
  --text-heading-sm: 54px;
  --leading-heading-sm: 1.39;
  --text-heading: 78px;
  --leading-heading: 1.1;
  --text-heading-lg: 94px;
  --leading-heading-lg: 0.76;
  --text-display: 225px;
  --leading-display: 1.25;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-28: 28px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-152: 152px;

  /* Layout */
  --page-max-width: 1078px;
  --section-gap: 46px;
  --card-padding: 34px;
  --element-gap: 14px;

  /* Border Radius */
  --radius-lg: 10px;
  --radius-full: 75.024px;
  --radius-tags: 75px;
  --radius-cards: 0px;
  --radius-images: 0px;
  --radius-inputs: 0px;
  --radius-buttons: 75px;

  /* Surfaces */
  --surface-paper: #ffffff;
  --surface-slate-pill: #636363;
  --surface-obsidian: #000000;
  --surface-ash-mist: #9a9a9a;
}
```
