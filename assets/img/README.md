# Imágenes de la landing page

`hero-bg.jpg` es el fondo atmosférico de toda la página (usado en `body` vía
`assets/css/style.css`), generado con IA (Higgsfield, modelo `z_image`) con el
prompt: *"Abstract atmospheric dark environment, pure black void with tiny
glowing teal, coral and amber particles drifting like distributed sensor nodes
forming a faint neural network shape, soft bokeh depth, minimal geometric light
trails, elegant, moody, cinematic, no text, no logos, no people, ultra high
detail"*. No es un placeholder — pueden reemplazarlo por otra imagen si
prefieren otro fondo, pero no es obligatorio.

Solo queda un placeholder real en esta carpeta: `tinkercad-captura.svg` (la página funciona y se ve
completa sin tocarlo, pero debe reemplazarse por la captura real antes de la entrega).

| Archivo actual | Reemplazar por | Usado en |
|---|---|---|
| `tinkercad-captura.svg` | Captura legible del circuito armado en Tinkercad | sección Circuito |

Los avatares y fotos del equipo ya no son placeholders — `avatar-1.jpg`/`avatar-2.jpg`/`avatar-3.jpg`
(avatares generados con IA) y `team-1-foto.jpg`/`team-2-foto.jpg`/`team-3-foto.jpg` (fotos reales) ya
están cargados en la sección Equipo, con la tarjeta activa girando en 3D al pasar el cursor para
mostrar el avatar detrás de la foto.

`infografia.svg` tampoco es un placeholder: es la infografía ejecutiva real (SVG, generada a partir
del contenido ya cargado en la página — nombre del proyecto, ODS, estado del sistema, los 4
componentes del circuito y los 3 avatares del equipo con nombre y rol), embebida como un solo
archivo vectorial escalable en la sección Infografía.

## Cómo reemplazar

**Opción simple (recomendada):** exporten su imagen con el mismo nombre de archivo pero su
extensión real (por ejemplo `avatar-1.png`), y en `index.html` cambien el `src` correspondiente
de `.svg` a `.png` (o `.jpg`). Es una sola palabra por archivo.

**Reto de Prompt Engineering (avatares):** la guía pide que el resultado NO se vea "genérico de IA"
— iteren el prompt hasta lograr un acabado pulido, orgánico y profesional.
