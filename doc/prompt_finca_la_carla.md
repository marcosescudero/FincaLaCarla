# PROMPT MAESTRO — CONSTRUCCIÓN DEL WEBSITE

## CONTEXTO OBLIGATORIO (LEER ANTES DE ESCRIBIR CÓDIGO)

Antes de generar, modificar o eliminar cualquier archivo, debés leer y comprender **en este orden**:

1. **`design_itinere.md`** → Sistema de diseño del proyecto (tokens visuales reales: paleta adobe/cream/earth, `Cormorant Garamond` + `Inter`, componentes, HERO, reglas de responsive, animaciones, accesibilidad y tono de voz). **Es la fuente única de verdad visual.** Sus tokens están alineados a lo implementado en `css/style.css`.

2. **`Design_Finca_La_Carla.md`** → Especificaciones completas del proyecto Finca La Carla. Define identidad, textos exactos, mapa de navegación, contenido por sección, reglas de contenido, control final obligatorio y todas las restricciones del cliente.

3. **`estructura_proyecto.txt`** → Estructura oficial de carpetas y archivos del proyecto. Define dónde va cada tipo de archivo (HTML, CSS, JS, imágenes, etc.).

**Si alguno de estos archivos no existe, detené la ejecución y avisá antes de continuar.**

---

## REGLAS INQUEBRANTABLES

### 1. Respeto absoluto a los sistemas de diseño
- **Todos** los colores deben provenir de `design_itinere.md`. No inventar colores nuevos.
- **Todas** las tipografías deben seguir la escala definida en `design_itinere.md`.
- **Todos** los componentes (botones, tarjetas, inputs, HERO) deben respetar las especificaciones de `design_itinere.md`.
- **Todos** los textos deben respetar el contenido exacto y las reglas de `design_finca_la_carla.md`.

### 2. Responsive obligatorio
- Todo componente debe funcionar en **móvil (320px), tablet (768px) y desktop (1280px+)** desde el primer momento.
- Usar `clamp()`, unidades relativas y CSS Grid/Flexbox.
- Aplicar el checklist de la sección 9.4 de `design_itinere.md` antes de dar por terminado cualquier cambio.

### 3. No romper lo existente
- Antes de modificar un archivo, revisar qué contiene.
- Si un cambio puede afectar otros componentes, avisar y proponer alternativa.
- Después de cada cambio, verificar que el diseño previo sigue intacto.

### 4. Respeto a la estructura de carpetas
- **HTML** → dentro de `/html/` (excepto `index.html` que va en la raíz).
- **CSS** → dentro de `/css/` (una única hoja: `style.css`).
- **JS** → dentro de `/js/`.
- **Imágenes** → dentro de `/images/fotos/`, respetando las carpetas del Drive.
- **Nunca** crear archivos en ubicaciones fuera de esta estructura sin autorización explícita. Ver `estructura_proyecto.txt`.

### 5. Comportamiento de trabajo
- Trabajar **componente por componente**, no todo el sitio de una sola vez.
- Antes de empezar un componente nuevo, confirmar conmigo qué vamos a construir.
- Después de cada componente, listar los archivos creados/modificados.
- No usar `lorem ipsum`, no dejar placeholders vacíos, no inventar contenido.

### 6. Contenido y tono
- Respetar el tono de voz de `design_itinere.md` y las reglas específicas de `design_finca_la_carla.md`.
- Español argentino con voseo natural.
- No usar palabras prohibidas (ver sección 13 de `design_itinere.md` y sección 2 de `design_finca_la_carla.md`).
- No inventar servicios, precios, instalaciones ni características no confirmadas.

---

## FLUJO DE TRABAJO ESPERADO

Para cada tarea que te pida, seguí este flujo:

### Paso 1 — Lectura y comprensión
1. Leer los tres archivos obligatorios (`design_itinere.md`, `Design_Finca_La_Carla.md`, `estructura_proyecto.txt`).
2. Confirmar que entendiste el pedido.
3. Listar los archivos que vas a crear o modificar.

### Paso 2 — Propuesta (si aplica)
Si la tarea es compleja, proponer un plan antes de escribir código:
- Qué archivos vas a tocar.
- Qué componentes vas a construir.
- Qué secciones del diseño vas a aplicar.

### Paso 3 — Generación de código
- Generar el código respetando todas las reglas anteriores.
- Comentar secciones clave del código para facilitar mantenimiento.
- Usar variables CSS (`:root`) para colores, tipografía y espaciados.

### Paso 4 — Verificación
Antes de dar por terminada la tarea, ejecutar mentalmente el checklist de la sección 9.4 de `design_itinere.md` y reportar:
- ✅ Qué quedó bien.
- ⚠️ Qué puede necesitar ajustes.
- ❓ Qué decisiones tomaste y por qué.

---

## EJEMPLO DE INSTRUCCIÓN QUE YO VOY A DARTE

> *"Construí el componente HERO de la sección Home de Finca La Carla."*

### Tu respuesta esperada:
1. **Lectura:** Confirmar que leíste `design_itinere.md` (sección 8 sobre HERO) y `design_finca_la_carla.md` (sección 5.1 sobre banner principal y texto).
2. **Plan:**
   - Crear `index.html` en la raíz (o modificar si ya existe).
   - Agregar los estilos del HERO en `css/style.css` (hoja única).
   - Usar `js/slider.js` para el carrusel (ya existente).
3. **Código:** Generar el HERO con:
   - 3 imágenes en carrusel (Banner 1 → Banner 2 → Banner 3).
   - Texto "Una propuesta terrenal" en `Cormorant Garamond`.
   - Overlay según `design_itinere.md` sección 8.2 (degradado en tonos tierra).
   - Altura responsive: `min(100svh, 980px)` desktop / `78vh` tablet / `100svh` móvil.
   - Sin parallax (solo un Ken Burns sutil).
4. **Verificación:** Reportar que el HERO es responsive, que respeta la paleta, que no se cortan rostros y que cumple con el checklist 9.4.

---

## REGLA FINAL

**Si tenés dudas sobre cómo aplicar algo, no improvises.** Consultá primero los archivos de diseño. Si la respuesta no está allí, preguntame antes de generar código.

**Ningún componente se considera terminado hasta que:**
1. Respeta `design_itinere.md`.
2. Respeta `design_finca_la_carla.md`.
3. Respeta la estructura definida en `estructura_proyecto.txt`.
4. Es completamente responsive.
5. No rompe el diseño existente.

---

**FIN DEL PROMPT MAESTRO**