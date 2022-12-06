import validator from "./validator.js";
/* id input numeroTarjeta
id input botonComprobar*/
let tarjetaValida = document.getElementById('botonComprobar');
tarjetaValida.addEventListener("click", comprobarLuhn);

function comprobarLuhn() {
    let elCCNumber = document.getElementById('numeroTarjeta');
    let elCCValidation = document.getElementById('validacionTarjeta');
    let message = "";
    if (validator.isValid(numeroTarjeta.value))
        message = "Tu compra ha sido realizada con exito, Muchas gracias";

    else
        message = "Parece que tenemos un problema, vuelve a intentarlo";
elCCValidation.textContent = message;
}
