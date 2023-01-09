
function loop(num){
  let numbersArray = num.toString().split("");
  let countLoop = 0;
  for (num of numbersArray) {
    num = parseInt(num);
    if (num === 0 || num === 6 || num === 9) {
      countLoop++;
    } else if (num === 8) {
      countLoop += 2;
    }
  }

    return countLoop;

}

console.log(loop(288));