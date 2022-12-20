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
          /*currentDigit = currentDigit*2 if mayor que */
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
      /* para tarjetas con menos numeros validator ej 79927398713 
      mayor o igual que 0 i-- disminuye en 1 */
      for(let i = length - 1 ; i >= 0; i--)
      {
        let currentDigit = parseInt(numeroTarjeta[i]);
        if ((i - 1) % 2 == 0)
        {
          if ((currentDigit *= 2) > 9)
          {
            /* separar en componentes que luego se unen en current digit */
            const trailingNumber = currentDigit % 10;
            const firstNumber = parseInt(currentDigit / 10);
            /* si current digit +10 se unen los componentes tal como arriba 16 ej 1+6 */
            currentDigit = firstNumber + trailingNumber;
          }
        }
        count += currentDigit;
      }
    }
    /*si count es divisible por 10 equal */
    return (count % 10) === 0;
  },

  maskify: function(numeroTarjeta){
    /* si el length del id mayor a 4 */
    if (numeroTarjeta.length > 4)
    /* se repite # menos en los ultimos 4 digitos -4 */ {
      const reemplazarNumero = "#".repeat(numeroTarjeta.length - 4);
      /*substring para crear serie de caracteres nuevaa, menos los ultimos 4 en este caso */
      const mostrarFinales = numeroTarjeta.substring(numeroTarjeta.length - 4);
      /* devuelve los numeros remplazados con # + los ultimos 4 */
      const enmascarados = reemplazarNumero + mostrarFinales;
      /* devuelve los numeros enmascarados */
      return enmascarados;
    }
    else {
      return numeroTarjeta;
    } 
  }
 
};
 






export default validator;
