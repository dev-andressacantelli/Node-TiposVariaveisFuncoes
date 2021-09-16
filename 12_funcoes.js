// let x = "";
// console.log(x);
// x = "Ol�";


//1� passo -> declarar a fun��o

//a��o   nome da func��o (par�metro)
function imprimeTexto(texto) {
    console.log(texto)
}

//2� passo -> executar a fun��o

imprimeTexto("oi");
imprimeTexto("Outro texto");


//Fun��o com n�meros, exemplo simples
function somaNumeroSoft(){
    return 2 + 2;
}
console.log(somaNumeroSoft())


//Fun��o com n�meros, exemplo mais elaborado
const n1 = 10
const n2 = 20
const soma = n1 + n2 

function somaNumeroHard() {
    return `O resultado da soma � ${soma}`;
}
console.log(somaNumeroHard())


//Fun��o chamando outra fun��o,
//imprimeTexto transformou o parametro (texto) em fun��o somaNumero(), retornando o resultado da soma.
imprimeTexto(somaNumeroSoft());


// As fun��es ajudam muito no desenvolvimento de um c�digo, pois colaboram para a separa��o de trechos de c�digo com fun��es espec�ficas, tornando-o menor e mais leg�vel, O JavaScript nos oferece algumas fun��es prontas, como � o caso de fun��es matem�ticas (Math em ingl�s), alguns exemplos s�o:

// Math.round(): Faz o arredondamento (round em ingl�s) de um n�mero de ponto flutuante para o inteiro mais pr�ximo.

// Math.round(4.3) retorna 4
// Math.round(3.85) retorna 4
// Math.round(2.5) retorna 3, quando o n�mero termina com 0.5 a fun��o arredonda para cima
// Math.ceil(): Faz o arredondamento para o valor mais alto, tamb�m conhecido como teto (ceil em ingl�s).

// Math.ceil(5.2) retorna 6
// Math.floor(): Faz o arredondamento para o valor mais baixo, tamb�m conhecido como piso (floor em ingl�s).

// Math.floor(5.2) retorna 5
// Math.trunc() : Desconsidera os n�meros decimais, o que � conhecido como truncamento.

// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4
// Math.pow() : Faz a exponencia��o de 2 n�meros, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplica��o por ser mais r�pido.

// Math.pow(4 , 2) retorna 4^2 = 16
// Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
// Math.sqrt() : Retorna a raiz quadrada de um n�mero.

// Math.sqrt(64) retorna 8
// Math.min(): Retorna o menor valor entre os argumentos.

// Math.min(0, 150, 30, 20, -8, -200) retorna -200
// Math.max(): Retorna o maior valor entre os argumentos.

// Math.max(0, 150, 30, 20, -8, -200) retorna 150
// Math.random(): Retorna um valor rand�mico (random em ingl�s) entre 0 e 1, ent�o n�o teremos um valor esperado para receber.

// Math.random() retorna 0.7456916270759015
// Math.random() retorna 0.15449802102729304
// Math.random() retorna 0.4214269561951203
