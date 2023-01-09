
function average(numbers) {
  return  numbers.reduce((sum, number) =>{
    return sum + number;
  }) / numbers.length;
}

let numbers = [1, 2, 3, 6];

console.log(average(numbers));