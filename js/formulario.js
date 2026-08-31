/* ==========================================================================
   FINCA LA CARLA — formulario.js
   Validación y envío del formulario de consulta al script PHP.
   ========================================================================== */
(function () {
  "use strict";

  function initFormulario() {
    var form = document.getElementById("form-consulta");
    if (!form) return;

    var mensaje = document.getElementById("form-mensaje");
    var fechaIngreso = form.querySelector('[name="fecha_ingreso"]');
    var fechaEgreso = form.querySelector('[name="fecha_egreso"]');

    /* Fecha mínima = hoy */
    function hoyISO() {
      var d = new Date();
      var mm = String(d.getMonth() + 1).padStart(2, "0");
      var dd = String(d.getDate()).padStart(2, "0");
      return d.getFullYear() + "-" + mm + "-" + dd;
    }
    if (fechaIngreso) {
      fechaIngreso.min = hoyISO();
      fechaIngreso.addEventListener("change", function () {
        if (fechaEgreso) {
          fechaEgreso.min = fechaIngreso.value || hoyISO();
          if (fechaEgreso.value && fechaIngreso.value && fechaEgreso.value < fechaIngreso.value) {
            fechaEgreso.value = "";
          }
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (mensaje) {
        mensaje.classList.remove("visible", "formulario__mensaje--error");
        mensaje.textContent = "";
      }

      var nombre = form.querySelector('[name="nombre"]');
      var email = form.querySelector('[name="email"]');
      var texto = form.querySelector('[name="mensaje"]');

      if (!nombre || !nombre.value.trim() || !email || !email.value.trim() || !texto || !texto.value.trim()) {
        mostrarError("Completá los campos obligatorios: nombre, email y mensaje.");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        mostrarError("Ingresá un email válido.");
        return;
      }

      var datos = new FormData(form);
      var accion = form.getAttribute("action") || "php/enviar_consulta.php";

      var boton = form.querySelector('[type="submit"]');
      if (boton) { boton.disabled = true; boton.textContent = "…"; }

      fetch(accion, { method: "POST", body: datos })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) {
            form.reset();
            mostrarOk("Tu consulta se realizó con éxito. Te responderemos a la brevedad.");
          } else {
            mostrarError((res && res.error) || "No se pudo enviar la consulta. Intentalo de nuevo.");
          }
        })
        .catch(function () {
          mostrarError("No se pudo enviar la consulta. Intentalo de nuevo o escribinos por WhatsApp.");
        })
        .finally(function () {
          if (boton) { boton.disabled = false; boton.textContent = window.LANG && window.LANG[(window.Finca && window.Finca.idioma && window.Finca.idioma.actual()) || "es"] ? window.LANG[(window.Finca && window.Finca.idioma && window.Finca.idioma.actual()) || "es"]["contacto_form_enviar"] : "Enviar"; }
        });
    });

    function mostrarOk(t) {
      if (!mensaje) return;
      mensaje.classList.add("visible");
      mensaje.classList.remove("formulario__mensaje--error");
      mensaje.textContent = t;
    }
    function mostrarError(t) {
      if (!mensaje) return;
      mensaje.classList.add("visible", "formulario__mensaje--error");
      mensaje.textContent = t;
    }
  }

  document.addEventListener("DOMContentLoaded", initFormulario);
})();
