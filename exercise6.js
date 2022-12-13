function drawSquareInConsole(size) {
  let result = '';
  for (let i = 0; i < size; i++) {
    if(i === 0 || i === size-1) {
      for(let k = 0; k < size; k++) {
        result += '* ';
      }
    }
    else{
      result += '*';
      for(let j = 0; j < size+size-3; j++) {
        result += ' ';
      }
      result += '*';
    }
    result += "\n";
  }
  console.log(result);
}

drawSquareInConsole(2);

