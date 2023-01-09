
function countVowelsConsonants(str) {
  let vowels = str.match(/[aeiou]/gi);
  let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return `Vowels: ${vowels.length}, Consonants: ${consonants.length}`;
}

console.log(countVowelsConsonants("hello"));