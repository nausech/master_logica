function firstWordUpperCase(phrase) {
  let words = [];
  for (let word of phrase.split(' ')) {
    words.push(word[0].toUpperCase() +  word.slice(1));
  }
  return words.join(' ');
}

console.log(firstWordUpperCase('hello world'));