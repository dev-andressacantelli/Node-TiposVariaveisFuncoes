//Exemplo de função normal:
function apresentar(nome) {
    return `Meu nome na função tradicional é ${nome}`;
}
console.log(apresentar('Andressa'))


//Exemplo de Arrow function:
const apresentarArrow = nome => `Meu nome na "arrow function" é ${nome}`;
console.log(apresentarArrow('Andressa'))


//Exemplo de Arrow function com números:
const somaArrow = (num1, num2) => num1 + num2;
console.log(somaArrow(10,10))


//Exemplo de Arrow function c/ + de 1 linha:
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
      return "Escolha somente números de 1 a 9."
    } else {
      return num1 + num2;
    }
}
console.log(somaNumerosPequenos(1,1))
console.log(somaNumerosPequenos(5,15))

