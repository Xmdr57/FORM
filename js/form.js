$(document).ready(function() {
    jQuery.validator.messages.required = 'Esta campo es obligatorio.';
    jQuery.validator.messages.number = 'Esta campo debe ser num&eacute;rico.';
    $("#formulario").validate();
    $("#enviar").click(function() {
        var validado = $("#formulario").valid();
        if (validado) {

            alert("el foprmulario se ha enviado correctamente");
        }
    });

});