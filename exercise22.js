function getBiggerNumber(number1, number2) {
  if (number1 === number2)  return "The numbers are equal";
  return (number1 > number2)  ? `Number ${number1} is bigger` : `Number ${number2} is bigger`;
}

console.log(getBiggerNumber(15, 15));