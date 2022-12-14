function getCommonElementsBetweenToArrays(array1, array2) {
  return array1.filter((element) => array2.includes(element));
}

console.log(getCommonElementsBetweenToArrays([1, 2, 3], [2, 4]));