// return the word that appears the most in a string or array

function mostFrequent(arr) {
  if(typeof arr === "string") {
    arr = arr.split(" ");
  }
  let arr2 = arr.filter((item) => typeof item === "string");
  let arr3 = arr2.join(" ").split(" ");
  let arr4 = [...new Set(arr3)];
  let arr5 = arr4.map((item) => [item, arr3.filter((item2) => item2 === item).length]);
  let arr6 = arr5.sort((a, b) => b[1] - a[1]);
  return arr6[0][0];
}

console.log(mostFrequent(["House", "University", "Party", "Study", "Travel", "Travel"]));
