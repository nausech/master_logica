function getNumbersInEights(number) {
  let result = `------- ${number} to 0  -----------\n`;
  while (number >= 0) {
    result += `No ${number} \n`;
    number -= 8;
  }

  result += `------- END  -----------`;

  return result;
}

console.log(getNumbersInEights(100));