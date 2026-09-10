# Sistema de diseño — «Lujo clásico»

**Finca La Carla · Posada boutique · Valle Calchaquí, Salta**

---

## 1. Estado y alcance

| | |
|---|---|
| **Estado** | Vigente. Reemplaza a `design_itinere.md` (desestimado). |
| **Alcance** | Las 18 páginas del sitio: `index.html` y las 17 de `html/`. |
| **Rama** | `prototipo-lujo` |
| **Implementación** | `css/lujo.css`, capa de overrides sobre `css/style.css`. |

**Dirección visual:** verde profundo + oro, serif de alto contraste, formas rectas, filetes de 1 px y fotografía cinematográfica. Referencias: Ritz Paris, Palacio Duhau, Alvear Palace. La idea rectora es que **el lujo se construye con contraste y espacio, no con sombras difusas ni bordes redondeados**.

---

## 2. Cómo está implementado

`lujo.css` es una **capa de overrides** que se carga **después** de `style.css` en todas las páginas:

```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/lujo.css">
```

El mecanismo central es el **remapeo de tokens**. `style.css` está escrito con variables (`--tierra`, `--adobe`, `--dorado`, `--borde`, `--radio`, …). `lujo.css` reasigna esas mismas variables en `:root`, de modo que **todos los componentes existentes adoptan el sistema nuevo sin reescribirlos uno por uno**. Después agrega reglas puntuales sólo donde el remapeo no alcanza.

Ventaja: es reversible (basta quitar el `<link>`) y no obliga a tocar `style.css`.

Costo: conviven dos capas, y eso exige respetar la regla de la sección 6.

### Mapa de `lujo.css`

| Línea | Bloque |
|---|---|
| 14 | Tokens |
| 69 | Base tipográfica |
| 121 | Botones |
| 228 | Hero |
| 249 | Tarjetas |
| 267 | Imágenes |
| 283 | Testimonios |
| 289 | Formularios |
| 303 | Otros componentes (encabezado, selector de idioma, acordeón) |
| 314 | Footer |
| 420 | CTA final |

---

## 3. Tokens

### Color

| Token | Valor | Uso |
|---|---|---|
| `--noche` | `#16211b` | Verde profundo. Fondo oscuro principal, texto de titulares. |
| `--noche-osc` | `#0f1712` | Variante más profunda (encabezado sólido, pie). |
| `--noche-suave` | `#1e2f26` | Verde intermedio. |
| `--oro` | `#c6a664` | Oro de marca. **Decorativo**: filetes, fondos de botón, iconos. |
| `--oro-claro` | `#e0cb9a` | Oro claro para acentos sobre oscuro. |
| `--oro-osc` | `#9a7f45` | Oro apagado. |
| `--oro-texto` | `#7a5b28` | **Oro legible sobre fondos claros (5,0:1).** Usar siempre en texto. |
| `--marfil` | `#f8f5ee` | Fondo claro principal. |
| `--arena` | `#ece5d8` | Fondo claro secundario. |
| `--arena-osc` | `#ded5c4` | Bordes y separadores claros. |
| `--texto` | `#1a1f1b` | Texto principal sobre claro. |
| `--texto-suave` | `#5d665e` | Texto secundario sobre claro. |
| `--borde` | `rgba(198,166,100,.32)` | Filete dorado de 1 px. |
| `--radio` / `--radio-suave` | `0px` | **Sin esquinas redondeadas.** |
| `--sombra-suave` / `--sombra-media` | `none` | **Sin sombras difusas.** |

### Remapeo de los tokens anteriores

Para que los componentes de `style.css` hereden el sistema nuevo:

`--adobe` → oro · `--adobe-osc` → oro oscuro · `--adobe-claro` → oro claro · `--dorado` → oro · `--dorado-texto` → oro de texto · `--dorado-claro` → oro claro · `--vegetacion` / `--tierra` / `--tierra-900` → verde profundo · `--tierra-800` → verde profundo oscuro · `--madera` / `--piedra` / `--tierra-suave` → verde grisáceo · `--arena-clara` → marfil.

### Tipografía

| Token | Valor |
|---|---|
| `--font-titulo` | `'Cormorant Garamond', Georgia, 'Times New Roman', serif` |
| `--font-texto` | `'Inter', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif` |

Se cargan desde Google Fonts en el `<head>` de **todas** las páginas:

```
family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600
```

Los titulares van en Cormorant Garamond con **peso 400** (no 700): el contraste se logra por tamaño y por espacio, no por grosor.

### Layout

`--container: 1280px` · `--gutter: 32px`

---

## 4. Componentes

### Encabezado

Arranca **transparente** sobre la foto del hero y se **solidifica** al pasar los 30 px de scroll (`JS` → `.encabezado--solido` en `js/main.js`).

| Estado | Fondo | Texto |
|---|---|---|
| Transparente | — (sobre la foto) | Marfil / oro claro |
| Sólido | `rgba(15,23,18,.95)` + `backdrop-filter: blur(10px)` + filete dorado inferior | Marfil / oro |

**Selector de idioma:** réplica del de La Posada de Cloe. Caja con filete fino, globo SVG de 13 px y `ES | EN` separados por una barra. El idioma activo se distingue **sólo por color** (oro), sin fondos rellenos. Área táctil de 44×44 px en móvil.

### Hero

Carrusel de 3 fotos a pantalla completa (88vh, mín. 620 px, máx. 1000 px) con velo, flechas, puntos y texto centrado. Ver la restricción de la sección 7.

### Botones

Rectangulares (radio 0), mayúsculas, `letter-spacing` amplio, mínimo táctil de 44 px en móvil. `.btn--primario` en oro con texto verde profundo.

### Tarjetas de servicio

Foto a sangre, sin sombra, con filete. Al pasar el mouse se revela un rótulo dorado «Descubrir».

### Testimonios

Carrusel de una cita por vez, con comillas grandes, filete y autor en versalitas. Controles: flechas, puntos, autoplay de 8 s, pausa al pasar el mouse o al enfocar, flechas del teclado y respeto por `prefers-reduced-motion`. El script está embebido al final de `index.html`.

### Formularios

Campos rectangulares, borde que pasa a oro al enfocar, sin sombras.

---

## 5. Cómo se verifica (método)

Los controles automáticos de contraste **deben** hacerse con cálculo determinista, no por captura de pantalla:

1. Dibujar la foto del hero en un `<canvas>` aplicando la matemática de `object-fit: cover`.
2. Leer los degradados **reales** desde el CSSOM (`getComputedStyle(el).backgroundImage` y `getComputedStyle(el, '::before').backgroundImage`).
3. Parsear los stops y componer píxel a píxel contra la imagen.
4. Comparar el color del texto (compuesto sobre su propio fondo si lo tiene) contra **cada** píxel de su caja y quedarse con el peor caso.
5. Hacerlo **todo dentro de una sola ejecución**, fijando el viewport.

**Trampas conocidas del método:**

- Si `document.hidden === true` (pestaña en segundo plano), el navegador **no avanza los frames de las transiciones**: `getComputedStyle` devuelve el valor congelado del inicio. Produce falsos positivos —ya pasó con la opacidad de los testimonios, el color del idioma activo y el fondo del encabezado sólido. Prueba decisiva: forzar el valor inline con `!important`; si no cambia, es artefacto. Para medir de verdad, inyectar `*{transition:none!important;animation:none!important}` y volver a leer.
- El viewport del panel de VS Code **se resetea entre llamadas**: si se miden las coordenadas en una llamada y se captura la pantalla en otra, quedan desalineadas y los resultados son absurdos.
- Chrome devuelve los degradados computados **normalizados**: `radial-gradient(56% 36%, …)` — sin la palabra `ellipse` y sin `at 50% 50%` cuando son los valores por defecto. Y en un `background` con varias capas, la primera es la de **arriba**.
- Los elementos con fondo propio (botones, flechas) hay que **componer siempre** con su background, incluso con alfa menor a 0,5, o el resultado es un falso fallo.

---

## 6. ⚠️ La trampa de especificidad

**Una regla de `lujo.css` NO gana por cargarse después si tiene menos especificidad.** Es el error que más veces apareció al construir esta capa, y produjo tres bugs reales:

| Regla de `style.css` | Especificidad | Regla de `lujo.css` que perdía | Especificidad |
|---|---|---|---|
| `.encabezado.encabezado--solido` | 0-2-0 | `.encabezado--solido` | 0-1-0 |
| `.encabezado--solido .idioma button.activo` | 0-3-1 | `.idioma button.activo` | 0-2-1 |
| `.encabezado--solido .idioma button` | 0-2-1 | `.idioma button` | 0-1-1 |

**Consecuencia real:** el encabezado sólido quedaba **crema** en lugar de verde oscuro, y como los textos ya eran marfiles, el menú, la marca y el selector de idioma **desaparecían**. Y el selector de idioma volvía a su diseño viejo al hacer scroll.

**Regla a seguir:** al sobrescribir un componente, replicar los selectores de **todos** sus estados —base, `:hover`, `.encabezado--solido`, `.seccion--oscura` y media queries—, no sólo el base. Antes de tocar algo del encabezado, listar **todas** las reglas de `style.css` con prefijo `.encabezado` y comparar especificidad.

**También:** al redefinir una regla base hay que revisar si pisa algún mínimo táctil. `.idioma button { min-width: 24px }` dejó sin efecto el mínimo de 44 px que `style.css` fija para móvil.

---

## 7. Restricción conocida del hero

Las tres fotos del carrusel tienen **cielo casi blanco justo detrás del texto**. Contraste del texto blanco sobre la foto **sin ningún oscurecimiento** (peor caso de las tres fotos):

| Zona del texto | Contraste | Necesario |
|---|---|---|
| Centro | 1,35:1 | 4,5:1 |
| Izquierda | 3,65:1 | 4,5:1 |
| Abajo a la izquierda | 3,48:1 | 4,5:1 |

Conclusión medida: **no existe ninguna zona de ninguna de las tres fotos donde el texto sea legible sin oscurecer.** Para llegar a AA hay que oscurecer: texto centrado exige ~76 % en la zona del texto; texto a la izquierda en columna angosta exige ~25-35 % concentrado en un borde. El rótulo en oro a 10 px exige ~55-65 % en cualquier caso, porque el oro tiene luminancia alta.

**Estado actual:** el hero conserva su velo original (`linear-gradient(180deg, .62 / .34 / .82)`), que es el compromiso aceptado.

Si en el futuro se quiere una foto **sin oscurecer**, las salidas son: mover el texto a una columna angosta sobre una zona oscura, elegir una foto del hero con una zona oscura amplia, o aceptar contraste por debajo de AA.

---

## 8. Pendientes

Del relevamiento de accesibilidad, sin resolver:

- Botón de pausa del carrusel de testimonios (WCAG 2.2.2-A).
- `aria-controls="menu-principal"` apunta a un ID que no existe.
- El acordeón de preguntas frecuentes no expone `aria-expanded`.
- Gestión de foco del lightbox.
- Falta un enlace «saltar al contenido».
- `index.html` no tiene `<main>`.
- La imagen del hero es de 6000×4000 px: conviene servir una versión optimizada.

Fuera del alcance de esta capa:

- **Fototeca duplicada:** 21 grupos de fotos repetidas (el mismo archivo en varias carpetas). Afecta las galerías de todo el sitio y conviene resolverlo en origen.
