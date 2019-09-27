function fibonacci(numero) {
    if (numero <=  1) return numero;
    
    return fibonacci(numero-1) + fibonacci(numero-2);
}

console.log(fibonacci(5));