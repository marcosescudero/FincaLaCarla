/* ==========================================================================
   FINCA LA CARLA — lightbox.js
   Visor de fotos a tamaño grande con navegación por flechas y teclado.
   ========================================================================== */
(function () {
  "use strict";

  var lightbox = null;
  var items = [];
  var indice = 0;

  function crearEstructura() {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML =
      '<button class="lightbox__cerrar" data-lb-cerrar aria-label="Cerrar">&times;</button>' +
      '<button class="lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Anterior">&#10094;</button>' +
      '<button class="lightbox__nav lightbox__nav--next" data-lb-next aria-label="Siguiente">&#10095;</button>' +
      '<img class="lightbox__img" src="" alt="">' +
      '<p class="lightbox__titulo"></p>' +
      '<p class="lightbox__contador"></p>';
    document.body.appendChild(lightbox);

    lightbox.querySelector("[data-lb-cerrar]").addEventListener("click", cerrar);
    lightbox.querySelector("[data-lb-prev]").addEventListener("click", anterior);
    lightbox.querySelector("[data-lb-next]").addEventListener("click", siguiente);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) cerrar();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("abierto")) return;
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    });
  }

  function mostrar() {
    if (items.length === 0) return;
    if (indice >= items.length) indice = 0;
    if (indice < 0) indice = items.length - 1;
    var it = items[indice];
    var img = lightbox.querySelector(".lightbox__img");
    img.src = it.src;
    img.alt = it.caption || "";
    lightbox.querySelector(".lightbox__titulo").textContent = it.caption || "";
    lightbox.querySelector(".lightbox__contador").textContent = (indice + 1) + " / " + items.length;
    lightbox.classList.add("abierto");
    document.body.style.overflow = "hidden";
  }

  function cerrar() {
    lightbox.classList.remove("abierto");
    document.body.style.overflow = "";
  }
  function siguiente() { indice++; mostrar(); }
  function anterior() { indice--; mostrar(); }

  function abrir(lista, desde) {
    if (!lightbox) crearEstructura();
    items = lista.map(function (x) {
      if (typeof x === "string") return { src: x, caption: "" };
      return { src: x.src, caption: x.caption || "" };
    });
    indice = (typeof desde === "number") ? desde : 0;
    mostrar();
  }

  /* Vincula galerías normales: .galeria-grid a */
  function vincularGaleria(contenedor) {
    if (!contenedor) return;
    var enlaces = contenedor.querySelectorAll("a");
    enlaces.forEach(function (a, i) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var lista = Array.prototype.map.call(enlaces, function (el) {
          return { src: el.getAttribute("href"), caption: el.getAttribute("data-lb-caption") || "" };
        });
        abrir(lista, i);
      });
    });
  }

  /* Vincula tarjetas de tema (Fotos) que abren una galería del manifiesto */
  function vincularTemas() {
    document.querySelectorAll("[data-galeria]").forEach(function (t) {
      t.addEventListener("click", function (e) {
        e.preventDefault();
        var clave = t.getAttribute("data-galeria");
        var gal = window.Finca && window.Finca.galerias && window.Finca.galerias[clave];
        if (gal && gal.length) {
          abrir(gal.map(function (src) { return { src: src, caption: "" }; }));
        }
      });
    });
  }

  /* Renderiza una cuadrícula desde el manifiesto: <div class="galeria-grid" data-render-galeria="clave" data-max="6"> */
  function renderGaleria(contenedor) {
    var clave = contenedor.getAttribute("data-render-galeria");
    var max = parseInt(contenedor.getAttribute("data-max"), 10) || 0;
    var gal = window.Finca && window.Finca.galerias && window.Finca.galerias[clave];
    if (!gal || !gal.length) return;
    var lista = max > 0 ? gal.slice(0, max) : gal;
    var html = "";
    lista.forEach(function (src) {
      html += '<a href="' + src + '"><img src="' + src + '" alt="" loading="lazy"></a>';
    });
    contenedor.innerHTML = html;
    vincularGaleria(contenedor);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".galeria-grid").forEach(vincularGaleria);
    document.querySelectorAll("[data-render-galeria]").forEach(renderGaleria);
    vincularTemas();
  });

  window.Finca = window.Finca || {};
  window.Finca.lightbox = { abrir: abrir, cerrar: cerrar };
})();
