function validateEmail(email) {
  let valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  return valid === true ? "Valid email" : "Invalid email";
}

console.log(validateEmail("camilo@gmail.com"));
