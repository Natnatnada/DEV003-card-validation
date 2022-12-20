/* eslint-disable eqeqeq */
const validator = {
/* toma id: numeroTarjeta */
  isValid: function creditCardNumber(numeroTarjeta) {  
    /*declaramos que tomara el length del id */
    const length = numeroTarjeta.length;
    /*length del id cuenta desde 0, cero 1 */
    let count = 0;
    /* si el largo del string numeroTarjeta es divisible por 2 */
    if(length % 2 == 0)
    {
      /*cantidad de veces que se repetira el ciclo, recorre el numero de tarjeta i es igual a 0, i menos que length y aumentara++ */
      for(let i= 0; i< length; i++)
      {
        /*  declaramos currentDigit a parseInt para convertir la cadena (input type text) en un entero (numero) */
        let currentDigit = parseInt(numeroTarjeta[i]);
        /* if si es divisible por 2 */
        if (i % 2 == 0)
        {
          if ((currentDigit *= 2) > 9)
          {
            /* se separan los numeros en componentes para luego sumarlos juntos*/
            const trailingNumber = currentDigit % 10;
            const firstNumber = parseInt(currentDigit / 10);
            //  si es que el numero es +10 suma ambos digitos, ex 16, 1+6                    
            currentDigit = firstNumber + trailingNumber;
          }
        }
        /* += para concatenar cadena, devuelve la cadena nueva */
        count += currentDigit;
      }
    }
    else 
    {
      /**/
      for(let i = length - 1 ; i >= 0; i--)
      {
        let currentDigit = parseInt(numeroTarjeta[i]);
        if ((i - 1) % 2 == 0)
        {
          if ((currentDigit *= 2) > 9)
          {
            const trailingNumber = currentDigit % 10;
            const firstNumber = parseInt(currentDigit / 10);
            currentDigit = firstNumber + trailingNumber;
          }
        }
        count += currentDigit;
      }
    }
    /*si es divisible por  */
    return (count % 10) === 0;
  },

  maskify: function(numeroTarjeta){
    if (numeroTarjeta.length > 4) {
      const reemplazarNumero = "#".repeat(numeroTarjeta.length - 4);
      const mostrarFinales = numeroTarjeta.substring(numeroTarjeta.length - 4);
      const enmascarados = reemplazarNumero + mostrarFinales;
      return enmascarados;
    }
    else {
      return numeroTarjeta;
    } 
  }
 
};
 






export default validator;
