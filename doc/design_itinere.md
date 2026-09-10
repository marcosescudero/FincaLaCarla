# Sistema de Diseño para Proyectos Itinere

**Inspiración:** Fusión de "La Posada de Cloe" (calidez y autenticidad), "Buenas Vibras Lodge" (claridad y confianza) y estilo "Emergent" (fluidez y modernidad técnica).

> **Estado del proyecto Finca La Carla (2026-09-09):** los tokens visuales de este documento (paleta, tipografía, componentes, espaciado y HERO) fueron **alineados al sistema realmente implementado** en el sitio, basado en el estilo de "La Posada de Cloe" (adobe / cream / earth, `Cormorant Garamond` + `Inter`). Este documento es la fuente única de verdad visual y refleja lo que está en `css/style.css`.

---

## 1. Filosofía Visual General

- **"Refugio Digital con Alma"**: La interfaz se siente tan acogedora como una posada de montaña, pero con la fluidez y claridad de una aplicación moderna. Cada elemento está diseñado para ser funcional, bello y transmitir una sensación de calma y confianza.
- **Jerarquía Narrativa**: El contenido cuenta una historia. Los títulos son grandes y evocadores, los subtítulos aportan contexto y los detalles prácticos (como fechas o contactos) están siempre a mano.
- **Espacio para Respirar**: El diseño es generoso en padding y márgenes, creando una sensación de amplitud y orden que invita a la exploración.

---

## 2. Paleta de Colores (Tonos de la Tierra)

> Estos tokens son los declarados en `css/style.css` (`:root`). **Ningún color debe usarse si no está acá**; primero se agrega como variable y luego se aplica.

| Token CSS | Color (Hex) | Uso |
| :--- | :--- | :--- |
| `--adobe` | `#b56a3d` | Primario: botones, acentos (clay-500) |
| `--adobe-osc` | `#8f5230` | Primario hover y texto de enlaces (clay-600) |
| `--adobe-claro` | `#f3d9c8` | Fondos suaves de acento |
| `--dorado` | `#c69769` | Rótulos "eyebrow" y detalles finos (clay-400) |
| `--vegetacion` | `#5b6b3a` | Acentos verdes (huerta, valle) |
| `--vegetacion-osc` | `#485728` | Verde en hover |
| `--madera` | `#6b4f35` | Tonos profundos cálidos |
| `--piedra` | `#8a8578` | Detalles y texto terciario |
| `--arena` | `#f7f1e6` | Fondo de secciones alternadas (cream-100) |
| `--arena-clara` | `#fbf7ee` | Fondo general del sitio (cream-50) |
| `--arena-osc` | `#ece1cc` | Bordes suaves y fondos apagados |
| `--tierra` | `#2b201a` | Texto principal (earth-900) |
| `--tierra-suave` | `rgba(43,32,26,.72)` | Texto secundario |
| `--tierra-900` | `#1a120e` | Fondo de secciones oscuras (earth-950) |
| `--tierra-800` | `#241a13` | Fondo oscuro secundario |
| `--borde` | `#dad2c8` | Bordes de 1 px |
| `--error` | `#a83836` | Estados de error (formularios) |

**Regla 80/20:** 80 % neutros cálidos (`--arena`, `--arena-clara`, `--tierra`) y 20 % acentos tierra (`--adobe`, `--dorado`, `--vegetacion`).

---

## 3. Tipografía (Dúo Editorial)

> Cargadas desde Google Fonts en el `<head>` de **todas** las páginas:
> `family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600`

- **Fuente de Títulos (`--font-titulo`): `Cormorant Garamond`** (serif).
    - *Estilo:* serif editorial y cálida. Úsala en `h1`–`h6`, títulos de sección y citas.
    - *Pesos:* `500` (Medium) como base; `400` y `600` para casos puntuales.
    - Escala: título de sección `clamp(36px, 4.8vw, 48px)`; lema del HERO `clamp(58px, 8vw, 112px)`.

- **Fuente de Texto / UI (`--font-texto`): `Inter`** (sans-serif).
    - *Estilo:* claridad y contraste moderno. Cuerpo, botones, inputs, navegación, rótulos y datos.
    - *Pesos:* `300`–`600`; `400` para el cuerpo y `500`/`600` para énfasis.
    - Cuerpo base: `16px` con `line-height: 1.6`.

- **Rótulos "eyebrow" (`.rotulo`):** `Inter`, `11px`, peso `600`, `uppercase`, `letter-spacing: .26em`, color `--dorado`. Se colocan sobre los títulos de sección y en el HERO.

---

## 4. Estilo de Componentes Clave

- **Botones (`.btn`):** esquinas rectas (`border-radius: 0`), `uppercase`, `font-size: 11px`, `letter-spacing: .18em`, `padding: 10px 18px`, `display: inline-flex`.
    - **Primario (`.btn--primario`):** fondo `--adobe`, texto blanco. Hover: `--adobe-osc`, `translateY(-2px)` y sombra media.
    - **Secundario / Ghost (`.btn--ghost`):** fondo transparente, borde 1 px `--adobe`, texto `--adobe-osc`. Hover: se rellena con `--adobe` y texto blanco.
    - **Oscuro (`.btn--oscuro`):** fondo `--tierra`, texto blanco (para fondos claros dentro de secciones oscuras).
    - **WhatsApp (`.btn--whatsapp`):** fondo `#25d366`, texto blanco.
    - **Grande (`.btn--grande`):** `padding: 13px 28px`, `font-size: 12px`.
    - **Íconos en botones:** un `<svg>` hermano con clase `.btn__icono` (transición `translateX` en hover). ⚠️ **No colocar SVG dentro de un elemento con `data-i18n`**: el motor de idiomas reemplaza `textContent` y borra los hijos; el texto debe ir en un `<span data-i18n="...">`.

- **Tarjetas de servicio (`.tarjeta-servicio`):** imagen full-bleed + overlay con degradado y rótulo "Descubrir"; borde y redondeo `0`, sin sombra.
    - Alto por grilla: `min-height: 330px`; la tarjeta destacada (`.tarjeta-servicio--grande`) ocupa 2×2 en desktop (`min-height: 500px`).
    - Hover: zoom suave de la imagen y aclarado del overlay. En móvil, la información esencial queda visible sin depender del hover.

- **Inputs y formularios (`.formulario`):** borde inferior de 1 px en tonos arena, fondo transparente, `border-radius: 0`. Foco: el borde pasa a `--adobe`. Rótulos en estilo `label-caps`.

- **Íconos:** ver sección 11 (SVG inline estilo Lucide + `mask` CSS con data-URI). No se carga ninguna librería externa.

---

## 5. Imágenes y Medios

- **Fotografía de Alta Calidad:** Esencial para transmitir la calidez del proyecto. Fotos con luz natural, paisajes, detalles (una taza de café, una textura) y personas.
- **Fondos Evocadores:** Secciones principales pueden tener una imagen de fondo a pantalla completa con una superposición de color suave (ej. un degradado del crema) para asegurar la legibilidad del texto.
- **Animación en Imágenes:** el HERO aplica un Ken Burns suave (`heroKenBurns`, 12 s). El "zoom out" / "revelado" general al hacer scroll **no está implementado** (mejora pendiente).

---

## 6. Espaciado, Layout y Animaciones

- **Espaciado Generoso:**
    - Padding de secciones (`.seccion`): `clamp(84px, 11vw, 128px)` arriba y abajo.
    - Contenedor principal (`.contenedor`): `max-width: 1320px`, centrado.
    - Gutter lateral: `28px` en desktop (`--gutter`) y `20px` en móvil (`--gutter-movil`).

- **Layouts Flexibles:**
    - Uso de **CSS Grid** para layouts de servicios, habitaciones o testimonios (ej. 3 columnas en escritorio, 2 en tablet, 1 en móvil).
    - Uso de **Flexbox** para alineaciones internas y componentes como el header.

- **Animaciones y Micro-interacciones:**
    - **HERO:** `fadeIn` entre slides (0.8 s), `heroCopyIn` en eyebrow/título/subtítulo/acciones (0.8–0.9 s) y `heroKenBurns` en la imagen (12 s).
    - **Header:** pasa de transparente a sólido al superar los `30px` de scroll (`.encabezado--solido`).
    - **Transiciones:** todas las interacciones (hover, focus, cambio de estado) usan transiciones suaves de `0.25–0.3s`.
    - **Accesibilidad:** `@media (prefers-reduced-motion: reduce)` desactiva las animaciones.

---

## 7. Toques Finales: El "Secreto" de la Fusión

- **Consistencia Absoluta:** Usar **variables CSS (`:root`)** para colores, tipografías, sombras y radios (`--radio: 0px` y `--radio-suave: 4px`; esquinas rectas como sello editorial). Esto asegura que cualquier cambio sea global y el diseño sea homogéneo.
- **Contraste Narrativo:** Combinar la serif cálida (para la "historia" y la emoción) con la sans-serif fría (para la "función" y la claridad).
- **Toque Humano:** Incluir pequeños detalles que hagan el diseño único, como un ícono personalizado, un borde decorativo o una línea de separación con estilo.

---

## 8. COMPONENTE HERO (Imagen de Cabecera de Sección)

Todas las secciones principales del sitio de Itinere deben comenzar con un 
componente HERO: una imagen grande de cabecera que presenta visualmente la 
sección antes de mostrar su contenido.

### 8.1 Estructura del HERO

Cada HERO debe contener, como mínimo:

1. **Imagen de fondo** (o imagen principal) a pantalla completa del contenedor.
2. **Overlay** (superposición) con degradado de tonos tierra (`rgba(20,14,9,…)`) 
   para asegurar la legibilidad del texto.
3. **Título principal** (H1) usando la tipografía serif cálida (`Cormorant Garamond`), 
   en color blanco.
4. **Subtítulo opcional** (hasta 70 caracteres) en tipografía sans-serif 
   (`Inter`), color crema con opacidad 0.85.
5. **CTA opcional** (botón primario o ghost claro) si la sección lo requiere.

### 8.2 Especificaciones Técnicas del HERO

| Atributo | Valor |
| :--- | :--- |
| **Altura Desktop** (`>860px`) | `min(100svh, 980px)` (mínimo `700px`) |
| **Altura Tablet** (`≤860px`) | `78vh` (mínimo `460px`) |
| **Altura Móvil** (`≤640px`) | `100svh` (mínimo `620px`) |
| **Ancho** | `100%` (full-width, sin márgenes laterales) |
| **Posición del contenido** | Abajo a la izquierda, alineado al contenedor |
| **Padding interno** | `padding: 0 28px clamp(72px, 10vw, 126px)` (20 px laterales en móvil) |
| **Overlay** | `linear-gradient(90deg, rgba(20,14,9,.62), rgba(20,14,9,.12) 65%)` + `linear-gradient(0deg, rgba(20,14,9,.48), transparent 55%)` |
| **Border-radius** | `0px` (bordes rectos, sin redondeo) |
| **Movimiento** | Ken Burns (`heroKenBurns`, 12 s) sobre la imagen activa |

### 8.3 Tipografía del HERO

- **Eyebrow / Rótulo (`.hero__eyebrow`):**
  - Fuente: `Inter`, `12px`, `500`, `uppercase`, `letter-spacing: .32em`
  - Color: `--dorado`

- **Título / Lema (`.hero__lema`, H1):**
  - Fuente: `Cormorant Garamond`, serif
  - Tamaño: `clamp(58px, 8vw, 112px)` (móvil: `clamp(48px, 15vw, 76px)`)
  - Peso: `500`
  - Color: `#FFFFFF`
  - `max-width: 820px`, `line-height: 1.05`
  - Sombra de texto: `0 3px 22px rgba(0,0,0,.45)`

- **Subtítulo (`.hero__subtitulo`):**
  - Fuente: `Inter`, `14px`, `400`, `uppercase`, `letter-spacing: .26em`
  - Color: `rgba(247,241,230,.85)`

- **Acciones (`.hero__acciones`):** botón primario + botón ghost claro (`.btn--hero-ghost`), `gap: 12px`. En móvil los botones ocupan el ancho completo.

### 8.4 Comportamiento en Scroll (Inspiración Emergent)

- El HERO **no usa parallax**. La imagen activa aplica un **Ken Burns** suave (`heroKenBurns`, 12 s) y el texto entra con `heroCopyIn` (0.8–0.9 s).
- El carrusel avanza con `fadeIn` (0.8 s) entre slides (3 imágenes del Banner de Home, orden Banner 1 → 2 → 3).
- Con `prefers-reduced-motion: reduce` se desactivan las animaciones del HERO; en móvil también se desactivan el Ken Burns y las entradas de texto por rendimiento.

### 8.5 Reglas del HERO (No negociables)

- ❌ **NUNCA** cortar rostros ni cabezas en la imagen del HERO.
- ❌ **NUNCA** usar imágenes de baja resolución (mínimo `1920x1080px`).
- ❌ **NUNCA** dejar el HERO sin overlay si lleva texto encima.
- ✅ **SIEMPRE** usar la fotografía "Destacada" (1) de la carpeta correspondiente.
- ✅ **SIEMPRE** asegurar contraste WCAG AA entre texto e imagen.
- ✅ **SIEMPRE** optimizar la imagen. **Estado actual:** JPG/PNG (el WebP quedó como mejora pendiente); el HERO principal no usa `lazy loading`, el resto de las imágenes sí.

### 8.6 Secciones que DEBEN tener HERO en Itinere

- Home (Hero principal, puede ser un carrusel de 3 imágenes)
- Habitaciones
- Gastronomía
- Servicios
- Eventos
- Qué hacer
- Quiénes somos
- Fotos
- Contacto
- Sustentabilidad
- Compromiso con la comunidad

> **Nota para la IA/Desarrollador:** Cada HERO debe ser visualmente 
> consistente (misma altura, mismo overlay, misma tipografía), pero la imagen 
> de fondo debe cambiar según la sección. Esto crea una experiencia de 
> navegación cohesiva y profesional.

---

## 9. RESPONSIVE Y PRESERVACIÓN DEL DISEÑO (REGLAS CRÍTICAS)

> ⚠️ **ATENCIÓN — LECTURA OBLIGATORIA PARA TODA IA O DESARROLLADOR**
>
> Este proyecto es **SIEMPRE responsive**. No es una opción, no es un "nice to have", no es una fase posterior. **Todo componente, sección, página o funcionalidad que se genere debe funcionar correctamente en desktop, tablet y móvil desde el primer momento.**
>
> Además, **cada cambio que se realice sobre el código (nuevo componente, ajuste de estilo, corrección de bug, refactor) debe ser revisado íntegramente para verificar que NO se rompió el diseño existente en ninguna resolución.**

---

### 9.1 Principio Rector: "No Romper lo que Ya Funciona"

Antes de dar por finalizado **cualquier** cambio, es obligatorio verificar que:

1. **El diseño previo sigue intacto** en todas las resoluciones.
2. **Los componentes ya existentes** (HERO, botones, tarjetas, formularios, navegación) siguen funcionando y viéndose igual.
3. **No aparecen scrolls horizontales** no deseados.
4. **No se desbordan textos, imágenes ni contenedores**.
5. **Los breakpoints siguen respondiendo** como corresponde.

> **REGLA DE ORO:** Si un cambio arregla algo pero rompe otra cosa, **el cambio no está terminado**. Se debe iterar hasta que todo conviva correctamente.

---

### 9.2 Breakpoints Oficiales de Itinere

Todos los diseños y desarrollos deben contemplar estos breakpoints:

| Nombre | Ancho | Uso |
| :--- | :--- | :--- |
| **Mobile S** | `320px` – `479px` | Celulares pequeños |
| **Mobile M** | `480px` – `639px` | Celulares estándar |
| **Mobile L / Tablet vertical** | `640px` – `800px` | Celulares grandes y tablets chicas |
| **Tablet / Desktop S** | `801px` – `1024px` | Tablets y laptops pequeñas |
| **Desktop** | `1025px` en adelante | Laptops y monitores |

**Media queries implementadas (en `css/style.css`):** el proyecto se construyó *desktop-first*, con estos cortes:

```css
@media (max-width: 1024px) { /* Tablet / ajustes generales */ }
@media (max-width: 860px)  { /* menú móvil y header */ }
@media (max-width: 800px)  { /* secciones a una columna */ }
@media (max-width: 640px)  { /* móvil */ }
@media (max-width: 520px)  { /* móvil chico */ }
```

> **Regla de verificación:** todo componente nuevo debe probarse al menos en `320px`, `768px` y `1280px`, en línea con el checklist de la sección 9.4.

---
### 9.3 Reglas Obligatorias de Responsive

- **Enfoque responsive:** el CSS base es *desktop-first* con cortes `max-width` (ver 9.2). Todo componente nuevo debe quedar verificado en `320px`, `768px` y `1280px` antes de cerrarse.
- **Unidades relativas:** Usar `rem`, `em`, `%`, `vw`, `vh`, `clamp()`.
- **Imágenes fluidas:** `max-width: 100%` y `height: auto`.
- **Tipografía fluida:** `clamp(min, preferido, max)`.
- **Contenedores flexibles:** CSS Grid y Flexbox.
- **Navegación adaptativa:** Menú hamburguesa en móvil.
- **HERO adaptativo:** ajustar la altura y el tamaño del título en tablet y móvil. No se implementa parallax (ver 8.4).
- **Touch targets:** Área táctil mínima de `44x44px`.
- **No depender del `:hover`:** Toda interacción debe tener equivalente táctil.

### 9.4 Checklist Obligatorio Antes de Cerrar Cualquier Cambio

**Integridad del diseño existente**
- [ ] El cambio no rompió ninguna sección previa.
- [ ] Los componentes existentes siguen viéndose igual.
- [ ] Los colores, tipografías y espaciados coinciden con `design_itinere.md`.

**Responsive**
- [ ] Se ve correctamente en `320px`.
- [ ] Se ve correctamente en tablet (`768px`).
- [ ] Se ve correctamente en desktop (`1280px` y `1920px`).
- [ ] No hay scroll horizontal en ninguna resolución.
- [ ] No hay textos ni imágenes desbordadas.
- [ ] El menú de navegación funciona en todas las resoluciones.
- [ ] Los botones tienen tamaño táctil adecuado en móvil.

**Funcionalidad**
- [ ] Todos los enlaces funcionan.
- [ ] Todos los botones ejecutan su acción.
- [ ] Los formularios validan correctamente.
- [ ] Los mapas, galerías y carruseles funcionan.
- [ ] El selector de idioma (si aplica) funciona.

**Performance y accesibilidad**
- [ ] Imágenes optimizadas (WebP, lazy loading).
- [ ] Contraste de texto cumple WCAG AA.
- [ ] Elementos interactivos accesibles por teclado.
- [ ] Sin errores en la consola del navegador.

**Reglas específicas del proyecto**
- [ ] Se respetaron todas las reglas del `design_itinere.md`.
- [ ] Se respetaron las reglas específicas del proyecto.

### 9.5 Protocolo de Revisión de Cambios

1. **Antes:** Documentar qué se va a modificar y por qué.
2. **Durante:** Trabajar en rama aislada.
3. **Después:** Ejecutar el Checklist Obligatorio completo.
4. **Si algo se rompió:** Revertir o iterar.
5. **Si todo está OK:** Integrar y documentar.

> **REGLA FINAL:** Un cambio sin revisión responsive **NO está terminado**. Un cambio que rompe el diseño existente **NO se integra**.

### 9.6 Frase Guía

> **"Si no lo probaste en móvil, tablet y desktop, no está listo."**
>
> **"Si no verificaste que no rompiste nada, no lo subas."**

---

## 10. Animaciones y Micro-interacciones

- **Entradas del HERO:** `fadeIn` (0.8 s) entre slides, `heroCopyIn` (0.8–0.9 s) para eyebrow/título/subtítulo/acciones, `heroKenBurns` (12 s) para la imagen.
- **Header:** transición de transparente a sólido al superar los `30px` de scroll (`.encabezado--solido`), con `blur` y borde inferior.
- **Hover en botones:** `translateY(-2px)` + sombra media, transición `0.25 s`.
- **Hover en tarjetas de servicio:** zoom suave de la imagen y aclarado del overlay.
- **Hover en enlaces del menú:** subrayado que crece (`transform: scaleX`), transición `0.3 s ease`.

**Duraciones estándar observadas:**
- Rápida: `150–200ms` (hover de color en enlaces)
- Media: `250–300ms` (transiciones generales y botones)
- Lenta: `800–900ms` (entradas de texto del HERO); Ken Burns `12s`

**Accesibilidad de movimiento:** `@media (prefers-reduced-motion: reduce)` desactiva las animaciones (HERO y componentes animados).

> **Pendientes opcionales (no implementados):** el "revelado al hacer scroll" (fade-in / slide-up con IntersectionObserver) y el efecto *blur-up* en la carga de imágenes. Se documentan como mejoras futuras, no como comportamiento actual.

---

## 11. Iconografía

- **Implementación:** SVG **inline** dibujados a mano con el lenguaje visual de Lucide/Feather (`stroke="currentColor"`, `stroke-width` 1.5–2, `stroke-linecap="round"`). No se carga ninguna librería de iconos externa.
- **Íconos utilitarios** (RESERVAR, CTA de WhatsApp, footer): resueltos con **CSS `mask` + data-URI** en variables (`--ic-msg`, `--ic-send`, `--ic-pin`, `--ic-phone`, `--ic-mail`).
- **Tamaños en uso:** `16px`, `20px`, `22px` (chevrons del HERO), `24px`, `30px` (comillas de testimonios), `56px` (caja de los diferenciales).
- **Color:** `currentColor` (hereda del contexto): `--adobe`, `--dorado` o `--tierra` según el fondo.
- **Regla:** mantener un único lenguaje de trazo en todo el proyecto. No mezclar estilos.

---

## 12. Accesibilidad

- **Contraste:** Cumplir WCAG AA (contraste mínimo `4.5:1` para texto normal, `3:1` para texto grande).
- **Foco visible:** Todos los elementos interactivos tienen indicador de foco claro.
- **Navegación por teclado:** Todo el sitio navegable sin mouse.
- **Textos alternativos:** Todas las imágenes tienen `alt` descriptivo.
- **Aria labels:** En botones sin texto visible (ej. menú hamburguesa).
- **Jerarquía semántica:** Uso correcto de `h1`, `h2`, `h3` sin saltos.

---

## 13. Tono de Voz y Guía de Contenidos

- **Tono:** Cálido, cercano, auténtico, sin exageraciones.
- **Idioma principal:** Español argentino con voseo natural.
- **Evitar:**
  - Lenguaje inclusivo forzado.
  - Adjetivos grandilocuentes ("mágico", "increíble", "inolvidable").
  - Frases cliché ("te vas a sentir como en tu casa", "viví una experiencia").
  - Fórmulas genéricas ("un lugar único", "un verdadero paraíso").
- **Preferir:**
  - Información concreta y diferencial.
  - Descripciones sensoriales específicas.
  - Verbos en presente activo.

---

## 14. Checklist Final de Calidad

Antes de considerar terminado cualquier proyecto, verificar:

- [ ] Todos los colores provienen de la paleta oficial.
- [ ] Todas las tipografías respetan la escala definida.
- [ ] Todos los componentes siguen las especificaciones.
- [ ] El HERO está presente en todas las secciones principales.
- [ ] El sitio es completamente responsive (`320px` → `1920px+`).
- [ ] No hay scroll horizontal en ninguna resolución.
- [ ] Todas las imágenes tienen `alt` y están optimizadas.
- [ ] No se cortan rostros ni cabezas.
- [ ] Todos los enlaces y botones funcionan.
- [ ] Los formularios validan correctamente.
- [ ] El contraste cumple WCAG AA.
- [ ] El sitio es navegable por teclado.
- [ ] No hay errores en la consola del navegador.
- [ ] El tono de voz respeta la guía de contenidos.
- [ ] No se rompió ningún componente previo.

---

## NOTA FINAL PARA LA IA O DESARROLLADOR

Este documento es tu **biblia de estilo**. Antes de generar cualquier código, **consultá y aplicá** estas reglas. Cada color, fuente, sombra, animación y decisión de layout debe estar justificada por este sistema de diseño.

**Ningún cambio se considera terminado hasta que:**

1. Respeta este documento.
2. Es completamente responsive.
3. No rompe el diseño existente.

**Si tenés dudas, consultá este archivo. Si la respuesta no está acá, agregala antes de implementarla.**

---

**FIN DEL DOCUMENTO**
