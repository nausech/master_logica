function validateAnagram(text1, text2){
  return cleanText(text1) === cleanText(text2);
}

function cleanText(text){
  return text.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
}

console.log("Son anagramas", validateAnagram('anagram', 'nag a ramq'));