function cutText(text, cutNumber){
  if(typeof text === 'string' && typeof cutNumber === 'number'){
    return text.substr(0, cutNumber);
  }else{
    return 'Invalid input';
  }
}

console.log(cutText('Hello World', 5));