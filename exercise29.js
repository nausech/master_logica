
function capicua(numberValidate){
    let num = numberValidate.toString();
    let revertNumber = num.split("").reverse().join("");
    return num === revertNumber;
}

if (capicua(12321)){
    console.log("Es capicua");
}else{
    console.log("No es capicua");
}