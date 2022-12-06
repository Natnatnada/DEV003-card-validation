const validator = {

  /*
  
  }*/
  isValid: function creditCardNumber(numeroTarjeta) {
    let length = numeroTarjeta.length;
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
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);
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
                    let trailingNumber = currentDigit % 10;
                    let firstNumber = parseInt(currentDigit / 10);
                    currentDigit = firstNumber + trailingNumber;
                }
            }
            count += currentDigit;
        }
}
return (count % 10) === 0;
}


  /*
maskify(creditCardNumber){
  if(creditCardNumber.length> 4){
    let hideNumber ="*".repeat(creditCardNumber.length -4);
    let showLastFour =creditCardNumber.substring(creditCardNumber.length -4);
    let mask =hideNumber+showLastFour;
    return mask;
  }
  else {
    return creditCardNumber;
  }

}
    */
};


export default validator;
