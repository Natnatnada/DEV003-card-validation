const validator = {

  isValid(creditCardNumber) {
    /*typeError: Cannot read property 'reverse' of undefined so creditCardNumber.split('').reverse(); ?
    luego pasara a mi index algoritmoLuhn para hacer la comprobacion de la tarjeta
    */
    let value = creditCardNumber.reverse();
    for(let i=0; i<value.length; i++){
      if(i%2 !=0){
        value[i] = value[i] * 2;
        if(value[i] > 9){
          value[i]= parseInt(string(value[i]).charAt(0))+parseInt(String(value[i]).charAt(1))

        }
      }
    }
    
    let sum = 0;

    for(let i=1; i<value.length; i++){
      sum += parseInt(value[i]);
      
    }
    sum = sum * 9 % 10;
    if (value[0] == sum){
      return true
    }
    else{
      return false
    }
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
