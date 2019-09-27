var arr = [4,6,15,64,0,1];

var funcion = x => {
    let sum = 0;
    let cont=arr.length;

    for(let i=0; i < arr.length; i++){
        sum=sum + arr[i];
    }

    prom = sum/cont;

    console.log("Sumatoria: " + sum);
    console.log("Promedio: " + prom);
}

funcion(arr);