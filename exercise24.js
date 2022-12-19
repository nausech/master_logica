function validateIfAPermutation(numberArray, number){
  for(let i = 0; i < number; i++){
    if(numberArray[i] !== i +1){
      return false;
    }
  }
  return true;
}

console.log(validateIfAPermutation([1, 2, 2, 4, 5], 5));