/* ==========================================================================
   FINCA LA CARLA — whatsapp.js
   Enlaces de WhatsApp (botón flotante, RESERVAR, formulario).
   Número principal: +54 9 11 6793-1464 → wa.me/5491167931464
   ========================================================================== */
(function () {
  "use strict";

  var NUMERO = "5491167931464";

  function aplicarEnlaces() {
    var idioma = (window.Finca && window.Finca.idioma && window.Finca.idioma.actual()) || "es";
    var dict = window.LANG[idioma] || {};
    var msg = dict["contacto_whatsapp_auto"] || "";

    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.setAttribute("href", "https://wa.me/" + NUMERO + (a.getAttribute("data-whatsapp") === "msg" && msg ? "?text=" + encodeURIComponent(msg) : ""));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    aplicarEnlaces();
    document.addEventListener("idioma:cambiado", aplicarEnlaces);
  });
})();
