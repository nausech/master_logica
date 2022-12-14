function replaceWordInAText(text, word){

  let regex = new RegExp(word, 'gi');
  let newText = text.replace(regex, '[CENSORED]');
  console.log(newText);
}

replaceWordInAText('Cuenta la historia de un mago que un día en su bosque encantado lloro', 'mago');