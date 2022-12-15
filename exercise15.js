function getCharacterMoreUsed(str) {
  let char = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let count2 = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count2++;
      }
    }
    if (count2 > count) {
      count = count2;
      char = str[i];
    }
  }
  return char;
}

console.log("La letra mas repetida es: ", getCharacterMoreUsed('hola mundo maaaa aaa'));