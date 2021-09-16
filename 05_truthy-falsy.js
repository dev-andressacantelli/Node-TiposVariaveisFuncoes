// boolean
const usuarioLogado = true
const contaPaga = false

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// null = um tipo de dado vazio
// undefined = dado não definido

let minhaVar; //retorna undefined
let varNull = null; //retorna null

console.log(minhaVar)
console.log(varNull)

let numero = 3;
let texto = 'Alura';

// typeof retorna o tipo de dado que a variável está recebendo
console.log(typeof numero) //retorna number
console.log(typeof texto) //retorna string
console.log(typeof minhaVar) //retorna undefined
console.log(typeof varNull) //retorna tipo:objeto pois NULL foi criado como OBJETO e não como NULL