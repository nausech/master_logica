function upperCaseLowerCase(text){
  let numberLowerCase = 0;
  let numberUpperCase = 0;
  for(let i = 0; i < text.length; i++){
    if(text[i] === text[i].toUpperCase()){
      numberUpperCase++;
    }else{
      numberLowerCase++;
    }
  }
  if(numberLowerCase === numberUpperCase) return 'Same';
  return numberLowerCase > numberUpperCase ? text.toLowerCase() : text.toUpperCase();
}

console.log(upperCaseLowerCase('HEEls'));