// Função de soma:
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(2,2))


//Função de subtração:
function subtrai(numero1, numero2) {
    return numero1 - numero2;
}
console.log(subtrai(10,5))


//Função de multiplicação:
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(2,10))


//Função de divisão:
function divide(numero1, numero2) {
    return numero1 / numero2;
}
console.log(divide(60,4))


//Função que mistura funções como parâmetro:
function mix(numero1, numero2) {
    return numero1 * numero2;
}
console.log(mix ( soma(4,5) , soma(3,3) ) )
//função mix chama a função soma como parâmetro do numero1 e multiplica pela soma do parâmetro do numero2


//Função de cadastro:
function cadastro(nome, idade) {
    return `O nome do cliente é ${nome}, e sua idade é ${idade}.`;
}
console.log(cadastro("Andressa",28))


//Função calculando o IMC
function imc(peso, altura) {
    return peso / (altura*altura);
}
console.log(imc(60,1.50))


//Função sem retorno e sem parâmetro: 
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


   //Função sem retorno, com parâmetro:
   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')


   //Função com retorno, sem parâmetro: 
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


   //Função com return e mais de um parâmetro:
   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90


   /* Parâmetros x argumentos: 
   Na prática se referem ao mesmo tipo de dado; 
   algumas documentações se referem a parâmetros no momento em que a função é definida
   (no caso, numero1, numero2, etc) 
   e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).*/
