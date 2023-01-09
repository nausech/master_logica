
function drawTriangle(num) {
  let half = Math.floor(num -1);
  let result = "";
  for (let row = 0; row < num; row++) {
    let level = "";
    for (let column = 0; column < (2 * num - 1); column++) {
      if (half - row <= column && half + row >= column) {
        level += "*";
      }else{
        level += " ";
      }
    }
    result += level + "\n";
  }
  return result;
}

console.log(drawTriangle(5));