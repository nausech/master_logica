function palindrome(text) {

  text.replace(/[\W_]/g, '').toLowerCase();
  let reverseStr = text.split('').reverse().join('');
  console.log( text === reverseStr);
}

palindrome("rotor");