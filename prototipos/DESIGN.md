# Sistema de Diseño — Finca La Carla

> Generado con Stitch MCP (proyecto `projects/6559276579610758899`) para el sitio web de **Finca La Carla** — posada boutique, Paraje San Antonio, Animana, Salta (Valle Calchaquí).

## Identidad visual

**Rústica y contemporánea a la vez.** Arquitectura de piedra, madera, adobe y caña; producción agroecológica; sustentabilidad; atención cálida de sus dueños (Diego y Marcela); relación cercana con la comunidad. Estilo **minimalista / editorial**: mucho espacio visual, fondos claros naturales y fotografía grande como protagonista. Sin decoración folklórica artificial.

## Paleta (tonos de la tierra)

| Token | Color | Uso |
|---|---|---|
| `adobe` (primario) | `#a65d3a` | Acentos, botones, títulos destacados |
| `arena-clara` (fondo) | `#f5ede0` / `#faf5ec` | Fondos y superficies |
| `vegetacion` (secundario) | `#5b6b3a` | Acentos verdes (huerta, valle, enlaces) |
| `madera` (terciario) | `#6b4f35` | Tonos profundos y cálidos |
| `piedra` | `#8a8578` | Detalles y texto secundario |
| `tierra-oscura` (texto) | `#2b241b` | Texto principal |

Aplicar con regla 80/20: 80% neutros cálidos, 20% acentos tierra.

## Tipografía

- **EB Garamond** (serif elegante) — títulos y encabezados.
- **Work Sans** (sans limpia) — cuerpo y UI.
- Rótulos y navegación en **mayúsculas con interletraje generoso** (label-caps, 0.16em).

Escala: `display-lg` 64px · `headline-xl` 44px · `headline-lg` 32px · `headline-md` 24px · `body-lg` 18px · `body-md` 16px · `label-caps` 12px.

## Layout y espaciado

- Contenedor máx. 1200–1280 px, gutters 24 px.
- Grandes espacios entre secciones (`section-gap` 96–120 px).
- Móvil: una columna, márgenes 16–20 px.
- Esquinas: radio pequeño (`ROUND_FOUR`).

## Elevación y profundidad

- Capas tonales y bordes finos de 1 px en vez de sombras pesadas.
- Velo oscuro sutil sobre fotografías cuando el texto va encima (legibilidad sin perder textura).
- Profundidad a través de la fotografía.

## Componentes

- **Botones**: primario en adobe con texto blanco, o *ghost* con borde 1 px. Hover: leve cambio de color / elevación.
- **Tarjetas**: imagen full-bleed + rótulo en mayúsculas + título serif; borde 1 px en tonos arena.
- **Fotografías**: grandes, sin deformar; nunca cortar rostros.
- **Inputs**: borde inferior o borde 1 px en arena; rótulos en label-caps.
- **Mapa**: Google Maps embebido; **WhatsApp**: botón flotante.

## Tono editorial

Español argentino con voseo (ES) y traducción fiel al inglés (EN). Sin clichés publicitarios; nunca usar la palabra "alojamiento" en textos comerciales. Sin spa ni gimnasio. Lema: **"UNA PROPUESTA TERRENAL"**.
