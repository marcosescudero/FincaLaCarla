/* ==========================================================================
   FINCA LA CARLA — acordeon.js
   Acordeones para la sección de preguntas frecuentes.
   ========================================================================== */
(function () {
  "use strict";

  function initAcordeon() {
    document.querySelectorAll(".acordeon__item").forEach(function (item) {
      var boton = item.querySelector(".acordeon__boton");
      var contenido = item.querySelector(".acordeon__contenido");
      if (!boton || !contenido) return;

      boton.addEventListener("click", function () {
        var abierto = item.classList.contains("abierto");
        /* Cerrar los demás del mismo acordeón */
        var grupo = item.closest(".acordeon");
        if (grupo) {
          grupo.querySelectorAll(".acordeon__item.abierto").forEach(function (otro) {
            if (otro !== item) {
              otro.classList.remove("abierto");
              otro.querySelector(".acordeon__contenido").style.maxHeight = "0px";
            }
          });
        }
        if (abierto) {
          item.classList.remove("abierto");
          contenido.style.maxHeight = "0px";
        } else {
          item.classList.add("abierto");
          contenido.style.maxHeight = contenido.scrollHeight + "px";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initAcordeon);
})();
