/* ==========================================================================
   FINCA LA CARLA — acordeon.js
   Acordeones para la sección de preguntas frecuentes.
   Accesibilidad: cada botón expone aria-expanded y se relaciona con su panel
   mediante aria-controls; el panel lleva role="region" y aria-labelledby.
   ========================================================================== */
(function () {
  "use strict";

  var contador = 0;

  function initAcordeon() {
    document.querySelectorAll(".acordeon__item").forEach(function (item) {
      var boton = item.querySelector(".acordeon__boton");
      var contenido = item.querySelector(".acordeon__contenido");
      if (!boton || !contenido) return;

      /* Relación botón ↔ panel, con identificadores estables */
      var n = ++contador;
      if (!boton.id) boton.id = "acordeon-boton-" + n;
      if (!contenido.id) contenido.id = "acordeon-panel-" + n;
      boton.setAttribute("aria-controls", contenido.id);
      boton.setAttribute("aria-expanded", "false");
      contenido.setAttribute("role", "region");
      contenido.setAttribute("aria-labelledby", boton.id);

      boton.addEventListener("click", function () {
        var abierto = item.classList.contains("abierto");
        /* Cerrar los demás del mismo acordeón */
        var grupo = item.closest(".acordeon");
        if (grupo) {
          grupo.querySelectorAll(".acordeon__item.abierto").forEach(function (otro) {
            if (otro !== item) {
              otro.classList.remove("abierto");
              var otroContenido = otro.querySelector(".acordeon__contenido");
              if (otroContenido) otroContenido.style.maxHeight = "0px";
              var otroBoton = otro.querySelector(".acordeon__boton");
              if (otroBoton) otroBoton.setAttribute("aria-expanded", "false");
            }
          });
        }
        if (abierto) {
          item.classList.remove("abierto");
          contenido.style.maxHeight = "0px";
          boton.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add("abierto");
          contenido.style.maxHeight = contenido.scrollHeight + "px";
          boton.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initAcordeon);
})();
