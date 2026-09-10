> ## ⚠️ DOCUMENTO DESESTIMADO
>
> **Este sistema no se aplicó al sitio y no debe usarse como referencia.**
>
> La dirección visual fue descartada por decisión del cliente el 2026-09-10, en favor del sistema
> **«Lujo clásico»** (verde profundo + oro), documentado en **`doc/design_lujo.md`**.
>
> Se conserva únicamente como registro histórico de una alternativa evaluada. El código del sitio
> **no** implementa las indicaciones de este archivo.

---

# Sistema de Diseño para Proyectos Itinere

**Inspiración:** Fusión de "La Posada de Cloe" (calidez y autenticidad), "Buenas Vibras Lodge" (claridad y confianza) y estilo "Emergent" (fluidez y modernidad técnica).

---

## 1. Filosofía Visual General

- **"Refugio Digital con Alma"**: La interfaz se siente tan acogedora como una posada de montaña, pero con la fluidez y claridad de una aplicación moderna. Cada elemento está diseñado para ser funcional, bello y transmitir una sensación de calma y confianza.
- **Jerarquía Narrativa**: El contenido cuenta una historia. Los títulos son grandes y evocadores, los subtítulos aportan contexto y los detalles prácticos (como fechas o contactos) están siempre a mano.
- **Espacio para Respirar**: El diseño es generoso en padding y márgenes, creando una sensación de amplitud y orden que invita a la exploración.

---

## 2. Paleta de Colores (Sistema Híbrido)

| Uso | Color (Hex) | Nombre Descriptivo | Fuente de Inspiración |
| :--- | :--- | :--- | :--- |
| **Fondo Principal** | `#F9F6F0` | Crema / Lino | Posada Cloe / Buenas Vibras |
| **Fondo de Tarjetas / Secciones** | `#FFFFFF` | Blanco Puro | Todos |
| **Color Primario (Títulos y Acentos)** | `#2C3E2F` | Verde Oscuro / Bosque | Buenas Vibras |
| **Color Secundario (Texto)** | `#4A5B4E` | Verde Grisáceo / Musgo | Buenas Vibras |
| **Color Terciario (Detalles)** | `#7A6B5D` | Marrón Suave / Piedra | Posada Cloe |
| **Color de Acento (Botones y Links)** | `#D4A373` | Arena / Terracota | Posada Cloe / Buenas Vibras |
| **Color de Acento (Hover)** | `#C28F5F` | Arena Oscuro | Buenas Vibras |
| **Color para Fondos de Detalles** | `#E8E0D5` | Crema / Paja | Buenas Vibras |
| **Color de Acento para Acciones** | `#3B82F6` | Azul Eléctrico | Emergent (para acciones digitales) |

---

## 3. Tipografía (Dúo Dinámico)

- **Fuente Principal (Títulos y Encabezados):**
    - *Recomendación:* `'Lora'` o `'Merriweather'` (serif).
    - *Estilo:* Transmite tradición, calidez y autenticidad. Úsala para H1, H2 y citas destacadas.
    - *Pesos:* `Bold (700)` para H1 y `Semi-Bold (600)` para H2.

- **Fuente Secundaria (Cuerpo y Subtítulos):**
    - *Recomendación:* `'Inter'` o `'Nunito Sans'` (sans-serif).
    - *Estilo:* Aporta claridad, legibilidad y un contraste moderno. Úsala para todo el texto de apoyo, botones, inputs y datos.
    - *Pesos:* `Regular (400)` para el cuerpo y `Medium (500)` o `Semi-Bold (600)` para énfasis.

---

## 4. Estilo de Componentes Clave

- **Botones:**
    - **Primarios:** Fondo sólido en el color de acento (Arena `#D4A373`), texto blanco. Forma de píldora (`border-radius: 50px`). Sombra suave.
    - **Secundarios:** Contorno delgado del color de acento (Arena), con texto en el mismo color.
    - **Acción Digital:** Botones para "Enviar mensaje" o "Conectar con API" usarán el color de acento para acciones (Azul Eléctrico `#3B82F6`).
    - **Hover (Todos):** El color de fondo o borde se oscurece, con una transición suave (`transition: all 0.3s ease`) y una ligera elevación.

- **Tarjetas (Habitaciones, Servicios, Mensajes del Chat):**
    - **Fondo:** Blanco (`#FFFFFF`) con una sombra muy sutil (`box-shadow: 0 4px 15px rgba(0,0,0,0.05)`).
    - **Efecto Hover:** La sombra se intensifica (`0 8px 30px rgba(0,0,0,0.12)`) y la tarjeta se eleva ligeramente (`transform: translateY(-5px)`).
    - **Detalle:** Un borde superior delgado en el color de acento (Arena) para darle un toque de distinción.

- **Inputs de Texto (Chat y Formularios):**
    - **Estilo:** Línea inferior o contorno muy delgado (`border: 1px solid #E0E0E0`).
    - **Foco:** El borde cambia al color de acento (Arena o Azul) y se añade una sombra exterior (glow) de ese mismo color.
    - **Fondo:** Blanco o ligeramente gris (`#FAFAFA`).

- **Íconos:**
    - **Estilo:** Línea fina y moderna (ej. Lucide o Feather).
    - **Color:** Principalmente el color primario (Verde Oscuro) o el de acento (Arena) para llamar la atención.

---

## 5. Imágenes y Medios

- **Fotografía de Alta Calidad:** Esencial para transmitir la calidez del proyecto. Fotos con luz natural, paisajes, detalles (una taza de café, una textura) y personas.
- **Fondos Evocadores:** Secciones principales pueden tener una imagen de fondo a pantalla completa con una superposición de color suave (ej. un degradado del crema) para asegurar la legibilidad del texto.
- **Animación en Imágenes (Inspiración Emergent):** Al hacer scroll, las imágenes pueden tener un ligero efecto de "zoom out" o "revelado" para dar dinamismo.

---

## 6. Espaciado, Layout y Animaciones

- **Espaciado Generoso:**
    - Padding de secciones: `80px` arriba y abajo.
    - Margen entre elementos: `24px` o `32px`.
    - Contenedor principal: `max-width: 1200px`, centrado.

- **Layouts Flexibles:**
    - Uso de **CSS Grid** para layouts de servicios, habitaciones o testimonios (ej. 3 columnas en escritorio, 2 en tablet, 1 en móvil).
    - Uso de **Flexbox** para alineaciones internas y componentes como el header.

- **Animaciones y Micro-interacciones (Clave para el Look & Feel Profesional):**
    - **Revelado al Hacer Scroll:** Los elementos aparecen con animaciones suaves (`fade-in`, `slide-up`) a medida que el usuario navega.
    - **Transiciones:** Todas las interacciones (hover, focus, cambio de estado) deben tener transiciones suaves de `0.3s` de duración.
    - **Carga (Typing Indicator):** Para el chat, un indicador de "escribiendo..." con tres puntos animados.

---

## 7. Toques Finales: El "Secreto" de la Fusión

- **Consistencia Absoluta:** Usar **variables CSS (`:root`)** para colores, tipografías, sombras y radios de borde (`8px` en general, `50px` para botones-píldora). Esto asegura que cualquier cambio sea global y el diseño sea homogéneo.
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
2. **Overlay** (superposición) con degradado suave del color base (`#F9F6F0`) 
   para asegurar la legibilidad del texto.
3. **Título principal** (H1) usando la tipografía serif cálida (`'Lora'` o 
   `'Merriweather'`), en color blanco o crema según contraste.
4. **Subtítulo opcional** (hasta 70 caracteres) en tipografía sans-serif 
   (`'Inter'` o `'Nunito Sans'`), color blanco con opacidad 0.9.
5. **CTA opcional** (botón primario) si la sección lo requiere.

### 8.2 Especificaciones Técnicas del HERO

| Atributo | Valor |
| :--- | :--- |
| **Altura Desktop** | `80vh` (mínimo `600px`, máximo `900px`) |
| **Altura Tablet** | `60vh` |
| **Altura Móvil** | `50vh` (mínimo `400px`) |
| **Ancho** | `100%` (full-width, sin márgenes laterales) |
| **Posición del contenido** | Centrado horizontal y verticalmente |
| **Padding interno** | `80px 40px` en desktop, `40px 20px` en móvil |
| **Overlay** | `linear-gradient(180deg, rgba(44,62,47,0.3) 0%, rgba(44,62,47,0.6) 100%)` |
| **Border-radius** | `0px` (bordes rectos, sin redondeo) |

### 8.3 Tipografía del HERO

- **Título (H1):**
  - Fuente: `'Lora'` o `'Merriweather'`, serif
  - Tamaño: `clamp(2.5rem, 5vw, 4rem)` (responsive)
  - Peso: `700` (Bold)
  - Color: `#FFFFFF` o `#F9F6F0`
  - Letter-spacing: `-0.02em`
  - Sombra de texto: `0 2px 10px rgba(0,0,0,0.3)` para asegurar contraste

- **Subtítulo:**
  - Fuente: `'Inter'` o `'Nunito Sans'`, sans-serif
  - Tamaño: `clamp(1rem, 1.5vw, 1.25rem)`
  - Peso: `400` (Regular)
  - Color: `#FFFFFF` con opacidad `0.9`
  - Margin-top: `16px`

### 8.4 Comportamiento en Scroll (Inspiración Emergent)

- El HERO puede tener un **efecto sutil de parallax**: la imagen se mueve a 
  `0.5x` la velocidad del scroll.
- El texto del HERO puede **desvanecerse suavemente** (`opacity: 1 → 0`) 
  durante los primeros `200px` de scroll.
- En móvil, **desactivar el parallax** por rendimiento.

### 8.5 Reglas del HERO (No negociables)

- ❌ **NUNCA** cortar rostros ni cabezas en la imagen del HERO.
- ❌ **NUNCA** usar imágenes de baja resolución (mínimo `1920x1080px`).
- ❌ **NUNCA** dejar el HERO sin overlay si lleva texto encima.
- ✅ **SIEMPRE** usar la fotografía "Destacada" (1) de la carpeta correspondiente.
- ✅ **SIEMPRE** asegurar contraste WCAG AA entre texto e imagen.
- ✅ **SIEMPRE** optimizar la imagen (WebP, lazy loading excepto el HERO principal).

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
| **Mobile M** | `480px` – `767px` | Celulares estándar |
| **Tablet** | `768px` – `1023px` | Tablets verticales |
| **Desktop S** | `1024px` – `1279px` | Laptops pequeñas |
| **Desktop M** | `1280px` – `1439px` | Laptops estándar |
| **Desktop L** | `1440px` – `1919px` | Monitores grandes |
| **Desktop XL** | `1920px+` | Monitores ultra wide |

**Media queries recomendadas:**

```css
/* Mobile first */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop S */ }
@media (min-width: 1280px) { /* Desktop M */ }
@media (min-width: 1440px) { /* Desktop L */ }
@media (min-width: 1920px) { /* Desktop XL */ }
```

---
### 9.3 Reglas Obligatorias de Responsive

- **Mobile First:** Estilos base pensados primero en móvil.
- **Unidades relativas:** Usar `rem`, `em`, `%`, `vw`, `vh`, `clamp()`.
- **Imágenes fluidas:** `max-width: 100%` y `height: auto`.
- **Tipografía fluida:** `clamp(min, preferido, max)`.
- **Contenedores flexibles:** CSS Grid y Flexbox.
- **Navegación adaptativa:** Menú hamburguesa en móvil.
- **HERO adaptativo:** Reducir altura en móvil, desactivar parallax.
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

- **Revelado al Hacer Scroll:** Elementos aparecen con `fade-in` y `slide-up` suave.
- **Transiciones:** Todas las interacciones usan `0.3s ease`.
- **Hover en Botones:** Elevación (`translateY(-2px)`) y cambio de sombra.
- **Hover en Tarjetas:** Elevación (`translateY(-5px)`) y sombra intensificada.
- **Typing Indicator (chat):** Tres puntos animados.
- **Carga de Imágenes:** Efecto blur-up (blur inicial → nítido).

**Duraciones estándar:**
- Rápida: `150ms` (hover pequeños)
- Media: `300ms` (transiciones generales)
- Lenta: `500ms` (revelados al scroll)

**Easings:**
- `ease-out` para entradas.
- `ease-in` para salidas.
- `cubic-bezier(0.4, 0, 0.2, 1)` para transiciones suaves.

---

## 11. Iconografía

- **Librería recomendada:** Lucide Icons o Feather Icons.
- **Estilo:** Línea fina y moderna.
- **Tamaños:** `16px`, `20px`, `24px`, `32px`.
- **Color:** `--itinere-primary` o `--itinere-accent`.
- **Regla:** No mezclar librerías de iconos. Una sola para todo el proyecto.

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
