import validator from "./validator.js";
let numeroTarjeta =document.getElementById('numeroTarjeta')

//tarjeta valida se ejecutara al hacer llamado al botonComprobar, al tomar el click se acciona funcion comprobarLuhn
const tarjetaValida = document.getElementById('botonComprobar');
tarjetaValida.addEventListener("click", comprobarLuhn);

function comprobarLuhn() {
  const elCCValidation = document.getElementById('validacionTarjeta');
  let message = "";
  //si se cumple el algoritmo de Luhn al ejecutarse desde validator despliega el mensaje en el cuadro de texto
  if (validator.isValid(numeroTarjeta.value))
    message = "Tu pago ha sido realizado con exito, Muchas gracias";
    else
    //en caso de no cumplirse da el mensaje siguiente
    message ="Parece que tenemos un problema, vuelve a intentarlo";
    //el mensaje se despliega en el input que declaramos con CCValidation arriba
  elCCValidation.textContent = message;
};
//document.getElementById("numeroTarjeta").addEventListener("keyup", maskValueInput);