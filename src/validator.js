/* eslint-disable eqeqeq */
const validator = {

  isValid: function creditCardNumber(numeroTarjeta) {  
    const length = numeroTarjeta.length;
    let count = 0;

    if(length % 2 == 0)
    {
      /*cantidad de veces que se repetira el ciclo i es igual a 0, se repetira hasa el length y aumentara++ */
      for(let i= 0; i< length; i++)
      {
        let currentDigit = parseInt(numeroTarjeta[i]);
        if (i % 2 == 0)
        {
          if ((currentDigit *= 2) > 9)
          {
            const trailingNumber = currentDigit % 10;
            const firstNumber = parseInt(currentDigit / 10);
            //  si es que el numero es +10 suma ambos digitos, ex 16, 1+6                    
            currentDigit = firstNumber + trailingNumber;
          }
        }
        count += currentDigit;
      }
    }
    else 
    {
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
