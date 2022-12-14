function getQuantityOfOddNumbersBetweenTwoNumbers(number1, number2) {
  let count = 0;
  for (let i = number1; i <= number2; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

console.log(getQuantityOfOddNumbersBetweenTwoNumbers(1, 100));