var palabra = prompt("Ingrese una palabra");
var palabra = palabra.toLowerCase();
var arr = palabra.split("");

var funcion = palindromo =>{
    let tamanio = arr.length;
    let flag = false

    for(let i=0; i<tamanio; i++){
        if(arr[i]==arr[tamanio-(i+1)]){
            flag = true;
        }else{
            flag = false;
        }
    }

    if (flag == true){
        console.log("Palabra es palindromo");
    } else {
        console.log("Palabra NO es palindromo")
    }
    

} 

funcion(arr);