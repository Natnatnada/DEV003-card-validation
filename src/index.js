import validator from "./validator.js";
//llamados al dom
const numeroTarjeta =document.getElementById('numeroTarjeta');
const numberCard =document.getElementById('numberCard')

//tarjeta valida se ejecutara al hacer llamado al botonComprobar, al tomar el click se acciona funcion comprobarLuhn
const tarjetaValida = document.getElementById('botonComprobar');
tarjetaValida.addEventListener("click", comprobarLuhn,);


function comprobarLuhn() {
  const elCCValidation = document.getElementById('validacionTarjeta');
  let message = "";
  //anidar los if para evitar error de texto al clickear
  // eslint-disable-next-line eqeqeq
  if (numeroTarjeta.value ==='')
  { alert('Debes ingresar el numero de tarjeta');
    //sin el return aparece mensaje de problema?
    return false
  }  
  //si se cumple el algoritmo de Luhn al ejecutarse desde validator despliega el mensaje en el cuadro de texto
  if (validator.isValid(numeroTarjeta.value)){
    message = "Tu pago fue realizado, Muchas gracias.";}
  else{
    //en caso de no cumplirse da el mensaje siguiente
    message ="No se pudo realizar el pago, vuelve a intentarlo con otra tarjeta.";}
  //el mensaje se despliega en el input que declaramos con CCValidation arriba
  elCCValidation.textContent = message;
  if (validator.maskify(numeroTarjeta.value)){
    numberCard.innerHTML = validator.maskify(numeroTarjeta.value);   
  }
  else {return numberCard.value}
}

