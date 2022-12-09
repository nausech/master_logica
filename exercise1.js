function MultiplicationTable(number) {
 let result = `# Multiplication table for ${number}`;
 for (let i = 1; i <= 10; i++) {
    result += `
  ${number} x ${i} = ${number * i}`;
    console.log(result);
 }
}

MultiplicationTable(5);