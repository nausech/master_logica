
function reverseText(text) {
  let reverseStr = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reverseStr += text[i];
  }
  console.log(reverseStr);
}

reverseText('hi, how are you?');
