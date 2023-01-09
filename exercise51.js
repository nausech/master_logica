
function pairsImpairs(array) {
  let pairs = [];
  let impairs = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pairs.push(array[i]);
    } else {
      impairs.push(array[i]);
    }
  }
  return [
    {
      pairs: pairs,
      impairs: impairs,
    },
  ];
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = pairsImpairs(array);

result.forEach((element) => {
  console.log(element);
});