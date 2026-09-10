# Sistema de Diseño — Finca La Carla

> Generado con Stitch MCP (proyecto `projects/6559276579610758899`) como **referencia de prototipado**. El sitio final se implementó con un sistema propio inspirado en "La Posada de Cloe"; los valores de abajo ya están **alineados a esa implementación** (`css/style.css`), no al prototipo original.

## Identidad visual

**Rústica y contemporánea a la vez.** Arquitectura de piedra, madera, adobe y caña; producción agroecológica; sustentabilidad; atención cálida de sus dueños (Diego y Marcela); relación cercana con la comunidad. Estilo **minimalista / editorial**: mucho espacio visual, fondos claros naturales y fotografía grande como protagonista. Sin decoración folklórica artificial.

## Paleta (tonos de la tierra)

| Token CSS | Color | Uso |
|---|---|---|
| `--adobe` (primario) | `#b56a3d` | Acentos, botones, enlaces |
| `--adobe-osc` | `#8f5230` | Hover y texto de enlaces |
| `--dorado` | `#c69769` | Rótulos "eyebrow" y detalles |
| `--vegetacion` | `#5b6b3a` | Acentos verdes (huerta, valle) |
| `--madera` | `#6b4f35` | Tonos profundos y cálidos |
| `--piedra` | `#8a8578` | Detalles y texto secundario |
| `--arena` | `#f7f1e6` | Fondos de secciones alternadas |
| `--arena-clara` (fondo) | `#fbf7ee` | Fondo general del sitio |
| `--tierra` (texto) | `#2b201a` | Texto principal |
| `--tierra-900` | `#1a120e` | Fondos de secciones oscuras |
| `--borde` | `#dad2c8` | Bordes de 1 px |

Aplicar con regla 80/20: 80% neutros cálidos (arena/tierra), 20% acentos tierra (adobe/dorado/vegetación).

## Tipografía

- **Cormorant Garamond** (serif editorial) — títulos y encabezados, peso 500.
- **Inter** (sans limpia) — cuerpo, UI y rótulos.
- Rótulos y navegación en **mayúsculas con interletraje generoso** (`.rotulo`: 11px, 600, `letter-spacing: .26em`, color dorado).

Escala implementada: lema de HERO `clamp(58px, 8vw, 112px)` · título de sección `clamp(36px, 4.8vw, 48px)` · intro de sección `17px` · cuerpo `16px` (line-height 1.6) · rótulo `11px`.

## Layout y espaciado

- Contenedor máx. **1320 px** (`--container`), gutters `28px` (20 px en móvil).
- Espacio entre secciones: `clamp(84px, 11vw, 128px)` (`.seccion`).
- Móvil: una columna, márgenes 20 px.
- Esquinas: **rectas** (`--radio: 0px`; `--radio-suave: 4px` como excepción).

## Elevación y profundidad

- Capas tonales y bordes finos de 1 px en vez de sombras pesadas.
- Velo oscuro sutil sobre fotografías cuando el texto va encima (legibilidad sin perder textura).
- Profundidad a través de la fotografía.

## Componentes

- **Botones**: esquinas rectas, `uppercase` 11px con `letter-spacing: .18em`. Primario en adobe con texto blanco; *ghost* con borde 1 px en adobe; variante oscura y variante WhatsApp (`#25d366`). Hover: cambio de color + `translateY(-2px)`.
- **Tarjetas de servicio**: imagen full-bleed + overlay con degradado + rótulo en mayúsculas + título serif; sin sombra, esquinas rectas.
- **Fotografías**: grandes, sin deformar; nunca cortar rostros. HERO con `object-fit: cover` y overlay de tonos tierra.
- **Inputs**: borde inferior de 1 px en tonos arena; rótulos en mayúsculas; foco en adobe.
- **Header**: fijo, transparente sobre el HERO, se solidifica al hacer scroll (`.encabezado--solido`).
- **Mapa**: Google Maps embebido; **WhatsApp**: botón flotante + enlaces `wa.me`.

## Tono editorial

Español argentino con voseo (ES) y traducción fiel al inglés (EN). Sin clichés publicitarios; nunca usar la palabra "alojamiento" en textos comerciales. Sin spa ni gimnasio. Lema: **"UNA PROPUESTA TERRENAL"**.
