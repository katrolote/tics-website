# Podcast del proyecto

Coloca aquí el archivo de audio del podcast con el nombre exacto:

```
podcast.mp3
```

Se reproducirá automáticamente en la sección **Podcast** de `index.html` (`assets/audio/podcast.mp3`).

**Duración máxima: 5 minutos** (según la guía del proyecto).

## Alternativa: YouTube (oculto)

Si prefieren subirlo a YouTube en modo oculto, reemplacen el bloque `<audio>` en `index.html`
(sección `#podcast`) por un iframe, por ejemplo:

```html
<iframe width="100%" height="200" src="https://www.youtube.com/embed/TU_ID_DE_VIDEO"
  title="Podcast del proyecto" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
```

Y actualicen también el enlace `#podcastLink` con la URL directa del video.
