function approvedStudents(array) {
  let approvedArray = [];
  let disapprovedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].qualification >= 7) {
      approvedArray.push(array[i]);

    }else{
      disapprovedArray.push(array[i]);
    }
  }
  return [
    {
      approved: approvedArray,
      disapproved: disapprovedArray
    }
  ]
}

let array = [
  { name: "Juan", qualification: 8 },
  { name: "Pedro", qualification: 5 },
  { name: "Maria", qualification: 9 },
];

let result = approvedStudents(array);

result.forEach((element) => {
  console.log(element);
});

