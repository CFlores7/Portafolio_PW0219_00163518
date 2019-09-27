function circunferencia(num){
    if (num <= 0){
        console.log("Area: -1");
    } else{
        console.log("Area: "+(Math.PI*num*num).toFixed(2));
    }
}

circunferencia(2);