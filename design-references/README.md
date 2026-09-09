# Design Style References

Esta carpeta guarda referencias de estilo (tokens, tipografía, componentes, reglas do/don't) extraídas de páginas de [Refero Design](https://refero.design), para usarlas como inspiración/base al diseñar `tics-website`.

**Origen:** el usuario compartió una lista de URLs de `styles.refero.design/style/<uuid>`. El acceso directo (WebFetch, curl, y el MCP `refero_design`) está bloqueado en este entorno (egress proxy / suscripción inactiva), así que cada archivo aquí se generó a partir del contenido que el usuario pegó manualmente en el chat — no son visitas automáticas del agente al sitio.

## Estilos registrados

| Archivo | Nombre | Tema | UUID de origen (si se confirmó) |
|---|---|---|---|
| [`dala.md`](./dala.md) | Dala | dark | `c9c5be5a-aaa1-4338-9681-8378d2e24fbd` |
| [`monopo-saigon.md`](./monopo-saigon.md) | Monopo Saigon | light | no confirmado — el usuario pegó el contenido sin indicar a cuál URL de la lista original corresponde |
| [`savee.md`](./savee.md) | Savee | dark | no confirmado — mismo caso que Monopo Saigon |

## Lista original de URLs (para referencia cruzada futura)

De la solicitud inicial del usuario (nota: la primera y la última URL de la lista original eran idénticas):

- `e5f5f8cf-e68d-4ed1-bbf5-6b67569af648`
- `c9c5be5a-aaa1-4338-9681-8378d2e24fbd` → **Dala**
- `6b667ffc-5158-4000-9252-3a107d5161ee`
- `0d914ef0-fa84-4c60-a9aa-cef0b5eb6e5d`
- `ee403055-480e-4bd4-9216-07c9ae2dde2e`
- `faec4b0c-cf93-4150-97de-0a8e7eed1840`
- `8875b14e-c59a-492f-8780-8027a480f21c`
- `1f32d914-6fdd-4692-b4fc-fcee2c414766`
- `8b6b547f-a357-4f1b-9842-4579c62dd42b`
- `8eb9c53e-d69c-497a-b640-610856cf3a60`

Solo 3 de las 10 referencias únicas se han documentado hasta ahora (más una — Savee — que tampoco tiene UUID confirmado, así que en total hay al menos 11 estilos distintos en juego). Faltan por documentar las URLs restantes de la lista original. Para completar el resto, el usuario puede pegar el contenido de cada estilo restante, o resolver el acceso directo (red/suscripción de refero.design).

## Síntesis comparativa (hasta ahora)

Los tres estilos comparten:
- Un único acento cromático protagonista (nunca varios colores de acción a la vez) — o, en el caso de Savee, ni siquiera eso: el acento vive solo en el CTA.
- Cero sombras / elevación — la jerarquía se logra con escala tipográfica, peso, espacio en blanco y pasos de color de superficie, no con `box-shadow`.
- Tipografía como principal herramienta de jerarquía, con pesos usados de forma poco convencional (pesos bajos en tamaños grandes).
- Disciplina estricta de "no mezclar": reglas explícitas de qué NO hacer con radios, color y sombras.
- Radios binarios: cada uno de los tres elige exactamente dos valores de radio (agudo/plano vs. píldora completa) y prohíbe cualquier valor intermedio.

Difieren en:
- **Dala** es dark-mode con violeta (`#8052ff`) como color de acción explícito y radios uniformes (24px, no binarios como los otros dos).
- **Monopo Saigon** es light-mode, sin color de acción alguno, y usa contraste de radios (0px vs. 75px pill) como su gesto de firma.
- **Savee** es dark-mode casi negro puro (`#050505`, más oscuro que Dala), con un solo acento (`#1500ff`) reservado exclusivamente al CTA primario — ni siquiera los links lo usan — y jerarquía de superficies en tres pasos casi imperceptibles (`#050505`→`#151515`→`#1e1e1e`) en vez de un fondo plano único.

Con 3 muestras empieza a verse un patrón repetido en "estilo Refero": un acento único y muy restringido, cero sombras, y radios binarios — pero sigue siendo una muestra pequeña para generalizar con certeza.
