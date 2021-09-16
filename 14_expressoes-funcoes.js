// Declaração de função:
function declaraFuncaoSoma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(declaraFuncaoSoma(5,5))



// Expressão de função:
const expressaoSoma = function(num1, num2) {return num1 + num2}
console.log(expressaoSoma(2,2))


/* A maior diferença entre declaração e expressão é que o JS lista primeiro as FUNCTION'S e VAR's,
esse processo é mais conhecido como "HOISTING" que significa levantar.
Com isso, é possível executar o console.log ANTES da função,
mas não é possível executar console.log ANTES da expressão. */


// Exemplo de HOISTING que funciona para function, console.log antes da function:
console.log(apresentar())
function apresentar() {
    return "Olá";
}

// Exemplo de HOISTING que NÃO FUNCIONA para expressão, console.log antes da expressão:
console.log(soma(1,1))
const soma = function(num1, num2) {return num1 + num2}
// Retorna-> ReferenceError: Cannot access 'soma' before initialization;
