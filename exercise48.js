// return which letter appears the once in a string
function letterAppearsOnce(str) {
  let count = {};
  let result = [];

  for (letter of str) {
    count[letter] = (count[letter] || 0) + 1;
  }
  result = Object.keys(count).filter((key) => count[key] === 1);

  return result;


}

console.log(letterAppearsOnce("hhoolla"));