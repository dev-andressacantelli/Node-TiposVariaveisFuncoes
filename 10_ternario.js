const idadeMinima = 18;
const idadeCLiente = 16;

//Estrutura clássica:
 if (idadeCLiente >= idadeMinima) {
    console.log("cerveja")
} else {
     console.log("suco")
 }

//Mesmo código de cima, porém na versão ternária:
console.log(idadeCLiente >= idadeMinima ? "cerveja" : "suco")
//          condicao                       true        false