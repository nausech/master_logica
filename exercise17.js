function getIfMultipleOf3And5(number) {

    if (number % 5 === 0 && number % 7 === 0) {
        return "BuzzLightyear";
    }else if (number % 3 === 0) {
        return "Buzz";
    }else if (number % 5 === 0) {
        return "Lightyear";
    }else {
        return number;
    }
}

function printBuzz(iterations) {
    for (let i = 1; i <= iterations; i++) {
      console.log(getIfMultipleOf3And5(i));
    }
}

printBuzz(5);