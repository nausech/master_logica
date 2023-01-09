// validate if a exist property in a object

function existPropertyInObject(object, property) {
  if (typeof object === 'object') {
    if (object.hasOwnProperty(property)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(existPropertyInObject({ name: 'Camilo' }, 'name') === true ? 'Test 1 Passed' : 'Test 1 Failed');