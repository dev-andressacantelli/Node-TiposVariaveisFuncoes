/* Tipos de variáveis:

var: não recomendável, muito solta, pode ser alterada em qualquer ponto do escopo resultando em bugs;
let: pode alterar o valor e não precisa ter um valor declarado inicialmente;
const: não pode alterar o valor e precisa ser declarada inicialmente;

*/

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
area = altura * comprimento;
} else {area = (altura  * comprimento) /2;}

console.log(area)