//return array without duplicates
let input = ["uno", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeDuplicates(arr) {

  let arr2 = arr.filter((item) => typeof item === "number");
  return [...new Set(arr2)];
}

console.log(removeDuplicates(input));