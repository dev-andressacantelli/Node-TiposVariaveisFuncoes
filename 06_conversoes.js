//tipo de dados
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) //retorna TRUE
console.log(numero + numeroString) //retorna 456456

/* conversão explícita, utilizar:
Number()
String() 
*/

//Exemplo 1 NUMBER:
console.log(numero + Number(numeroString)) //retorna 912


//Exemplo 2 NUMBER:
const numeroString2 = Number("456"); 
console.log(numero + numeroString2) //retorna 912

//Exemplo 1 STRING:
let telefone = 12341234;
console.log('O telefone é ' + String(telefone)); // conversão do número 12341234 para uma string “12341234” 

//Exemplo 2 STRING:
//console.log('O telefone é ' + telefone.toString(); 
//O .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.


/*
= atribui valor;
== compara o valor;
=== compara o valor e o tipo; */
