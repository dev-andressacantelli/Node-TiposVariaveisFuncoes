// Declara��o de fun��o:
function declaraFuncaoSoma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(declaraFuncaoSoma(5,5))



// Express�o de fun��o:
const expressaoSoma = function(num1, num2) {return num1 + num2}
console.log(expressaoSoma(2,2))


/* A maior diferen�a entre declara��o e express�o � que o JS lista primeiro as FUNCTION'S e VAR's,
esse processo � mais conhecido como "HOISTING" que significa levantar.
Com isso, � poss�vel executar o console.log ANTES da fun��o,
mas n�o � poss�vel executar console.log ANTES da express�o. */


// Exemplo de HOISTING que funciona para function, console.log antes da function:
console.log(apresentar())
function apresentar() {
    return "Ol�";
}

// Exemplo de HOISTING que N�O FUNCIONA para express�o, console.log antes da express�o:
console.log(soma(1,1))
const soma = function(num1, num2) {return num1 + num2}
// Retorna-> ReferenceError: Cannot access 'soma' before initialization;
