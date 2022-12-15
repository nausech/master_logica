function counterVowels(text) {
  let counter = text.match(/[aeiou]/gi);
  return counter ? counter.length : 0;
}

console.log('Cantidad de vocales', counterVowels('hello world'));