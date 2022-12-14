function split(array, number){
    let result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, index + number));
        index += number;
    }
    return result;
}

console.log(split([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 3));