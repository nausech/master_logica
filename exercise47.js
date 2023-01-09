// get array of people with yours hobbies and return the that hobbies are more common

function hobbies(array) {
  let map = [];
  for(obj of array){
    for(hobby of obj.hobbies){
      if(!map[hobby]) {
        map[hobby] = 1;
      }else{
        map[hobby]++;
      }
    }
  }
  return map;
}

let array = [
  { name: "Juan", hobbies: ["play", "read"] },
  { name: "Pedro", hobbies: ["play", "read", "swim"] },
  { name: "Maria", hobbies: ["play", "read", "swim", "dance"] },
];

console.log(hobbies(array));