//dado un numero indicar el angulo

function angle(number){
    if(number === 90){
        console.log("Recto");
    }else if(number < 90){
        console.log("Agudo");
    }else if(number > 90 && number < 180){
        console.log("Obtuso");
    }else if (number === 180){
        console.log("Llano");
    } else if (number > 180 && number < 360) {
      console.log("Reflex");
    } else if (number === 360) {
      console.log("Completo");
    }
}

angle(80);
