// get max number and min number from array
function maxMin(arr) {
  let arr2 = arr.filter((item) => typeof item === "number");
  return `Max: ${Math.max(...arr2)}, Min:${Math.min(...arr2)}`;
}

console.log(maxMin([1, 2, 3, 4, 5, 68, 7, 8, 9, 10]));