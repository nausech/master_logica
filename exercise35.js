
function firstLast(arr) {
  let arr2 = arr.filter((item) => typeof item === "number");
  return [arr2[0], arr2[arr2.length - 1]];
}

console.log(firstLast([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));