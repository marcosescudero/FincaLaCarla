<?php
/* ==========================================================================
   FINCA LA CARLA — enviar_consulta.php
   Recibe el formulario de consulta (contacto.html) y envía el mensaje por
   correo a las casillas de la finca, respondiendo JSON al front-end.
   ========================================================================== */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/* ---------- Leer y sanitizar la entrada ---------- */
$nombre       = isset($_POST['nombre'])       ? trim(strip_tags((string) $_POST['nombre']))       : '';
$fechaIngreso = isset($_POST['fecha_ingreso']) ? trim((string) $_POST['fecha_ingreso'])            : '';
$fechaEgreso  = isset($_POST['fecha_egreso'])  ? trim((string) $_POST['fecha_egreso'])             : '';
$personas     = isset($_POST['personas'])      ? trim((string) $_POST['personas'])                 : '';
$email        = isset($_POST['email'])         ? trim(strip_tags((string) $_POST['email']))        : '';
$mensaje      = isset($_POST['mensaje'])       ? trim(strip_tags((string) $_POST['mensaje']))      : '';

/* ---------- Respuesta de error ---------- */
function responderError($texto) {
    echo json_encode(array('ok' => false, 'error' => $texto));
    exit;
}

/* ---------- Validación de campos obligatorios ---------- */
if ($nombre === '') {
    responderError('Por favor, completá tu nombre.');
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responderError('Por favor, ingresá un email válido.');
}
if ($mensaje === '') {
    responderError('Por favor, escribí tu mensaje.');
}

/* ---------- Destinos y asunto ---------- */
$destinatario = 'lacarlareservas@gmail.com';
$asunto       = 'Consulta desde el sitio web — Finca La Carla';

/* ---------- Armar el cuerpo del correo (HTML) ---------- */
$cuerpo  = "<h2>Nueva consulta desde el sitio web</h2>";
$cuerpo .= "<table cellpadding=\"6\" style=\"border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;\">";
$cuerpo .= "<tr><td style=\"font-weight:bold;\">Nombre y apellido:</td><td>" . htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8') . "</td></tr>";
if ($fechaIngreso !== '') {
    $cuerpo .= "<tr><td style=\"font-weight:bold;\">Fecha de ingreso:</td><td>" . htmlspecialchars($fechaIngreso, ENT_QUOTES, 'UTF-8') . "</td></tr>";
}
if ($fechaEgreso !== '') {
    $cuerpo .= "<tr><td style=\"font-weight:bold;\">Fecha de egreso:</td><td>" . htmlspecialchars($fechaEgreso, ENT_QUOTES, 'UTF-8') . "</td></tr>";
}
if ($personas !== '') {
    $cuerpo .= "<tr><td style=\"font-weight:bold;\">Cantidad de personas:</td><td>" . htmlspecialchars($personas, ENT_QUOTES, 'UTF-8') . "</td></tr>";
}
$cuerpo .= "<tr><td style=\"font-weight:bold;\">Email:</td><td>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</td></tr>";
$cuerpo .= "</table>";
$cuerpo .= "<p style=\"font-family:Arial,sans-serif;font-size:14px;\"><strong>Mensaje:</strong></p>";
$cuerpo .= "<p style=\"font-family:Arial,sans-serif;font-size:14px;\">" . nl2br(htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8')) . "</p>";

/* ---------- Cabeceras del correo ---------- */
/* Remitente: usar un remitente del dominio si el hosting lo exige. */
$cabeceras  = "MIME-Version: 1.0\r\n";
$cabeceras .= "Content-Type: text/html; charset=UTF-8\r\n";
$cabeceras .= "From: Sitio Finca La Carla <no-reply@fincalacarla.com>\r\n";
$cabeceras .= "Reply-To: " . $email . "\r\n";
$cabeceras .= "Cc: Ramilo.diego@gmail.com\r\n";
$cabeceras .= "X-Mailer: PHP/" . phpversion();

/* ---------- Enviar y responder ---------- */
if (@mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
    echo json_encode(array('ok' => true));
} else {
    responderError('No se pudo enviar la consulta en este momento. Intentalo nuevamente o escribinos por WhatsApp.');
}
