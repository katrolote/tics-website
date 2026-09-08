# Imágenes de la landing page

`hero-bg.jpg` es el fondo atmosférico de toda la página (usado en `body` vía
`assets/css/style.css`), generado con IA (Higgsfield, modelo `z_image`) con el
prompt: *"Abstract atmospheric dark environment, pure black void with tiny
glowing teal, coral and amber particles drifting like distributed sensor nodes
forming a faint neural network shape, soft bokeh depth, minimal geometric light
trails, elegant, moody, cinematic, no text, no logos, no people, ultra high
detail"*. No es un placeholder — pueden reemplazarlo por otra imagen si
prefieren otro fondo, pero no es obligatorio.

Cada archivo `.svg` de esta carpeta (excepto `hero-bg.jpg`) es un **placeholder** — la página funciona y se ve completa
sin que hagan nada, pero deben reemplazarlos por su contenido real antes de la entrega.

| Archivo actual | Reemplazar por | Usado en |
|---|---|---|
| `avatar-1.svg` | Avatar del integrante 1 generado con IA | sección Equipo |
| `avatar-2.svg` | Avatar del integrante 2 generado con IA | sección Equipo |
| `avatar-3.svg` | Avatar del integrante 3 generado con IA | sección Equipo |
| `tinkercad-captura.svg` | Captura legible del circuito armado en Tinkercad | sección Circuito |
| `infografia.svg` | Infografía ejecutiva del proyecto | sección Infografía |

## Cómo reemplazar

**Opción simple (recomendada):** exporten su imagen con el mismo nombre de archivo pero su
extensión real (por ejemplo `avatar-1.png`), y en `index.html` cambien el `src` correspondiente
de `.svg` a `.png` (o `.jpg`). Es una sola palabra por archivo.

**Reto de Prompt Engineering (avatares e infografía):** la guía pide que el resultado NO se vea
"genérico de IA" — iteren el prompt hasta lograr un acabado pulido, orgánico y profesional antes
de reemplazar el placeholder.
