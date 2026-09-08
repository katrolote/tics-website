# Landing Page — Proyecto Final de Tecnología Aplicada (Undécimo)

Landing page de entrega para la consultoría de IRTRA Petapa, según la
**Guía del Proyecto de Undécimo** (Colegio Capouilliez). Sirve como
"Centro de Mando y Entrega": reúne y enlaza los 5 productos pedidos por
la guía (circuito, investigación, infografía, podcast, despliegue).

## Qué hay que completar antes de entregar

Todo el texto entre `[corchetes]` en `index.html` y los archivos `.svg` de
`assets/img/` son placeholders. Nada está roto — la página se ve y funciona
completa tal cual, pero deben reemplazar:

1. **Nombre del proyecto, integrantes, grado/sección** — buscar `[corchetes]` en `index.html`.
2. **Problemática, ODS y estado del sistema** — sección `#reto`.
3. **Captura de Tinkercad + enlace al circuito** — `assets/img/tinkercad-captura.svg` y el botón "Abrir circuito en Tinkercad".
4. **Documento de investigación (.docx/.pdf)** — ver `docs/README.md`.
5. **Infografía ejecutiva** — `assets/img/infografia.svg` (ver `assets/img/README.md`).
6. **Podcast** — `assets/audio/podcast.mp3` (ver `assets/audio/README.md`).
7. **Avatares del equipo generados con IA** — `assets/img/avatar-1.svg`, `avatar-2.svg`, `avatar-3.svg`.

Cada carpeta de `assets/` tiene su propio `README.md` con el detalle exacto.

## ⚠️ Nomenclatura obligatoria del repositorio (pendiente)

La guía exige que el **repositorio final** y el link de GitHub Pages sigan este formato exacto:

```
ProyectoFinalTICS_PrimerApellido1_PrimerApellido2_PrimerApellido3_GradoSeccion_NombreDelProyecto
```

Este repositorio (`tics-website`) se usó como espacio de trabajo/desarrollo y **no cumple** ese
formato — no conozco los apellidos del equipo, el grado/sección ni el nombre definitivo del
proyecto, así que no puedo renombrarlo por ustedes. Antes de la entrega final:

- Renombren este repositorio a ese formato, o
- Creen el repositorio definitivo con ese nombre y copien estos archivos ahí.

En cualquiera de los dos casos, `index.html` debe seguir estando en la **raíz** del repositorio
para que GitHub Pages lo renderice automáticamente.

## Estructura

```
index.html              ← archivo principal (obligatorio en la raíz)
assets/
  css/style.css         ← sistema de diseño (ver /design-references)
  js/main.js             ← menú móvil, scroll-reveal, nav activo
  img/                   ← avatares, captura de Tinkercad, infografía (+ README)
  audio/                 ← podcast.mp3 (+ README)
docs/                    ← documento formal de investigación (.docx/.pdf) (+ README)
design-references/       ← referencias de estilo usadas como base de diseño
```

## Diseño

El estilo visual (fondo casi negro, un solo acento de acción, cero sombras, contraste de radios
agudo/píldora, jerarquía por escala tipográfica) se basa en las lecciones documentadas en
[`design-references/`](./design-references/), adaptadas con paleta propia (teal/coral/dorado)
para no repetir literalmente ninguna de esas referencias.
