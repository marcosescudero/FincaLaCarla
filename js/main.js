/* ==========================================================================
   FINCA LA CARLA — main.js
   Motor de idiomas (ES/EN), menú móvil, navegación y utilidades globales.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "finca-lang";

  function idiomaGuardado() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return v === "en" ? "en" : "es";
    } catch (e) {
      return "es";
    }
  }

  var idiomaActual = idiomaGuardado();

  /* Traduce un texto con {clave} → valor dinámico */
  function reemplazarVar(texto, vars) {
    if (!vars) return texto;
    return Object.keys(vars).reduce(function (acc, k) {
      return acc.split("{" + k + "}").join(vars[k]);
    }, texto);
  }

  function texto(clave, vars) {
    var dict = (window.LANG && window.LANG[idiomaActual]) || {};
    var t = dict[clave] !== undefined ? dict[clave] : clave;
    return reemplazarVar(t, vars);
  }

  function aplicarIdioma(lang, forzar) {
    idiomaActual = lang === "en" ? "en" : "es";
    var dict = window.LANG[idiomaActual];

    document.documentElement.setAttribute("lang", idiomaActual === "es" ? "es" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] !== undefined) el.textContent = reemplazarVar(dict[k], { año: new Date().getFullYear() });
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      if (dict[k] !== undefined) el.setAttribute("placeholder", dict[k]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] !== undefined) el.setAttribute("aria-label", dict[k]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (dict[k] !== undefined) el.setAttribute("alt", dict[k]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-title");
      if (dict[k] !== undefined) el.setAttribute("title", dict[k]);
    });
    document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-value");
      if (dict[k] !== undefined) el.value = dict[k];
    });

    document.querySelectorAll(".idioma button").forEach(function (b) {
      var idioma = b.getAttribute("data-idioma");
      b.classList.toggle("activo", idioma === idiomaActual);
      if (idioma === idiomaActual) b.setAttribute("aria-pressed", "true");
      else b.setAttribute("aria-pressed", "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, idiomaActual);
    } catch (e) { /* sin almacenamiento */ }

    document.dispatchEvent(new CustomEvent("idioma:cambiado", { detail: idiomaActual }));
  }

  /* ---------- Menú móvil ---------- */
  function initMenu() {
    var boton = document.querySelector(".menu-boton");
    var menu = document.querySelector(".menu");
    var sombra = document.querySelector(".menu-sombra");
    if (!boton || !menu) return;
    function abrir(estado) {
      menu.classList.toggle("abierto", estado);
      if (sombra) sombra.classList.toggle("visible", estado);
      boton.setAttribute("aria-expanded", estado ? "true" : "false");
    }
    boton.addEventListener("click", function () {
      abrir(!menu.classList.contains("abierto"));
    });
    if (sombra) sombra.addEventListener("click", function () { abrir(false); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { abrir(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") abrir(false);
    });
  }

  /* ---------- Resaltar enlace activo del menú ---------- */
  function marcarActivo() {
    var ruta = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".menu a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      a.classList.remove("activo");
      if (href === ruta) a.classList.add("activo");
    });
  }

  /* ---------- Inicialización ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initMenu();
    marcarActivo();
    document.querySelectorAll(".idioma button[data-idioma]").forEach(function (b) {
      b.addEventListener("click", function () { aplicarIdioma(b.getAttribute("data-idioma")); });
    });
    aplicarIdioma(idiomaActual, true);
  });

  window.Finca = window.Finca || {};
  window.Finca.idioma = { actual: function () { return idiomaActual; }, aplicar: aplicarIdioma, texto: texto };
})();
