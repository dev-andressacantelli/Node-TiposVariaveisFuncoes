const idadeMinima = 18;
const idadeCLiente = 16;

//Estrutura cl�ssica:
 if (idadeCLiente >= idadeMinima) {
    console.log("cerveja")
} else {
     console.log("suco")
 }

//Mesmo c�digo de cima, por�m na vers�o tern�ria:
console.log(idadeCLiente >= idadeMinima ? "cerveja" : "suco")
//          condicao                       true        false