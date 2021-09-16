const nome = "Andressa";
const idade = 2021-1993;
const cidadeDeNascimento = "S�o Paulo";

//Concatena��o tradicional
const apresentacao = "Meu nome � " + nome + ", minha idade � " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//Concatena��o com template string
const apresentacaoTemplateSTring = `Meu nome � ${nome}, minha idade � ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)
console.log(apresentacaoTemplateSTring)


//Outra ideia de concatena��o + ternario
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)