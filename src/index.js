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
  //si el numero de tarjeta no se ingresa, aparece la alerta
  if (numeroTarjeta.value ==='')
  { alert('Debes ingresar el numero de tarjeta');
    //sin el return aparece mensaje de problema?
    return false
  }  
  //si se cumple el algoritmo de Luhn al ejecutarse desde validator despliega el mensaje cuadro de texto textarea
  if (validator.isValid(numeroTarjeta.value)){
    message = "Tu pago fue realizado, Muchas gracias.";}
  else{
    //en caso de no cumplirse da el mensaje siguiente
    message ="No se pudo realizar el pago, vuelve a intentarlo con otra tarjeta.";}
  //el mensaje se despliega en el input que declaramos con CCValidation arriba, fija el contenido del nodo textarea
  elCCValidation.textContent = message; 
  //llamado al validator maskify, toma valor del id numeroTarjeta
  if (validator.maskify(numeroTarjeta.value)){
    //numberCard cons declarada id output html, reemplaza la sintaxis HTML del output placeholder por maskify.
    numberCard.innerHTML = validator.maskify(numeroTarjeta.value);   
  }
  else {return numberCard.value}
}

/*
function campoNumerico(event keyup?) {
  if(event.charCode >= 48 && event.charCode <= 57){
    return true;
   }
   return false;        
} */