const nome = "Andressa";
const idade = 2021-1993;
const cidadeDeNascimento = "São Paulo";

//Concatenação tradicional
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//Concatenação com template string
const apresentacaoTemplateSTring = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)
console.log(apresentacaoTemplateSTring)


//Outra ideia de concatenação + ternario
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)