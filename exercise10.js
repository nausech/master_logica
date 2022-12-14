function stairs(number){
  let completeStairs = '';
  for (let i = 1; i <= number; i++) {
    let steps = '';
    for(let j = 1; j <= i; j++) {
      steps += '[-]';
    }
    completeStairs += steps + '\n';
  }
  console.log(completeStairs);
}
stairs(5);