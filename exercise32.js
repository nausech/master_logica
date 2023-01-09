
function powerOfTwo(arr) {
  let arr2 = arr.filter((item) => typeof item === "number");
  return arr2.map((item) => item ** 2);
}
console.log(powerOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));