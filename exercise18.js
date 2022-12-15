function divisor(number, possibleDivisor) {
  if (number % possibleDivisor === 0) {
    return possibleDivisor;
  }
    return 0;

}

function showDivisors(num) {
  for (let i = 1; i <= num; i++) {
    let result = divisor(num, i);
    if (result !== 0) {
      console.log("Is divisor: " + result);
    }
  }
}

  showDivisors(10);