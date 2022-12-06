import validator from './validator.js';
/* id input numeroTarjeta
id input botonComprobar*/
let creditCardNumber= document.getElementById("cardNumber");
let algoritmoLuhn= validator.isValid(creditCardNumber);
document.getElementById("botonComprobar").addEventListener("click",(comprobarValidacion));

function comprobarValidacion (){
    //llamada al inputhtml mediante el id para obtener los datos
    let creditCardNumber= document.getElementById("cardNumber");
    //funcion desde validator para comprobar la validez de la tarjeta alert para pruebas
    
    let algoritmoLuhn= validator.isValid(creditCardNumber);
    if (algoritmoLuhn==true){
       alert("tu compra funciono");
    }
else if(algoritmoLuhn==false){
    alert("no");
}
}


/*let creditCardNumber= document.getElementById("cardNumber")
let algoritmoLuhn= validator.isValid(creditCardNumber);
console.log(algoritmoLuhn);
if (algoritmoLuhn ==true){
    message = "Tu compra ha sido realizada con exito, Muchas gracias";

}
else if (algoritmoLuhn==false){
    message = "Parece que tenemos un problema, vuelve a intentarlo";
};
*/

/*añadir funcion al click, ahi se ejecuta el credit card number si se cumple*/

document.getElementById("botonComprobar").addEventListener("click",(comprobarValidacion));
