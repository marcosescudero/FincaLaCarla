/* ==========================================================================
   FINCA LA CARLA — slider.js
   Carrusel del banner principal (Home) con autoplay, flechas y puntos.
   ========================================================================== */
(function () {
  "use strict";

  function initSlider(contenedor) {
    if (!contenedor) return;
    var slides = contenedor.querySelectorAll(".hero__slide");
    var puntosCont = contenedor.querySelector(".hero__puntos");
    if (slides.length <= 1) {
      if (slides.length === 1) slides[0].classList.add("activo");
      return;
    }

    var indice = 0;
    var intervalo = null;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function irA(n) {
      slides[indice].classList.remove("activo");
      indice = (n + slides.length) % slides.length;
      slides[indice].classList.add("activo");
      if (puntosCont) {
        var pts = puntosCont.querySelectorAll(".hero__punto");
        pts.forEach(function (p, i) { p.classList.toggle("activo", i === indice); });
      }
    }

    function siguiente() { irA(indice + 1); }
    function anterior() { irA(indice - 1); }

    function iniciarAutoplay() {
      detenerAutoplay();
      if (!reduceMotion) intervalo = setInterval(siguiente, 6000);
    }
    function detenerAutoplay() {
      if (intervalo) { clearInterval(intervalo); intervalo = null; }
    }

    var prev = contenedor.querySelector(".hero__flecha--prev");
    var next = contenedor.querySelector(".hero__flecha--next");
    if (prev) prev.addEventListener("click", function () { detenerAutoplay(); anterior(); iniciarAutoplay(); });
    if (next) next.addEventListener("click", function () { detenerAutoplay(); siguiente(); iniciarAutoplay(); });

    if (puntosCont) {
      puntosCont.querySelectorAll(".hero__punto").forEach(function (p, i) {
        p.addEventListener("click", function () { detenerAutoplay(); irA(i); iniciarAutoplay(); });
      });
    }

    contenedor.addEventListener("mouseenter", detenerAutoplay);
    contenedor.addEventListener("mouseleave", iniciarAutoplay);
    document.addEventListener("keydown", function (e) {
      if (!contenedor.closest(".hero")) return;
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    });

    irA(0);
    iniciarAutoplay();
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".hero__carrusel").forEach(initSlider);
  });
})();
