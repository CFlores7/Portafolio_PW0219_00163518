var numero = 3;
var arr = [3,1,6,2,10,3];

var funcion = buscador =>{
    let contador = 0;

    for(let i=0; i < arr.length; i++){
        if (numero == arr[i]){
            contador = contador + 1;
        };
    };

    console.log(contador);
} 

funcion(numero, arr);