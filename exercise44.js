// return array with the elements with more words of a array

function moreWords(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].split(" ").length > 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let array = ["hola", "hola mundo", "hola mundo como estas"];

console.log(moreWords(array));