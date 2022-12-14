function reverseNumber(number) {
  return  number.toString().split("").reverse().join("");
}

console.log(reverseNumber(12345));