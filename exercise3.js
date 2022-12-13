function searchWord(word, text) {

  let regex = new RegExp(word, 'gi');
  let numberOfMatches = text.match(regex).length;
  let result = text.match(regex);
  console.log(result);
  return numberOfMatches;
}
console.log("Number of the coincidence: ", searchWord('the', 'The quick brown fox jumps over the lay dog.'));
//searchWord('the', 'The quick brown fox jumps over the lay dog.');