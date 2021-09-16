// Fun��o de soma:
function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(2,2))


//Fun��o de subtra��o:
function subtrai(numero1, numero2) {
    return numero1 - numero2;
}
console.log(subtrai(10,5))


//Fun��o de multiplica��o:
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(2,10))


//Fun��o de divis�o:
function divide(numero1, numero2) {
    return numero1 / numero2;
}
console.log(divide(60,4))


//Fun��o que mistura fun��es como par�metro:
function mix(numero1, numero2) {
    return numero1 * numero2;
}
console.log(mix ( soma(4,5) , soma(3,3) ) )
//fun��o mix chama a fun��o soma como par�metro do numero1 e multiplica pela soma do par�metro do numero2


//Fun��o de cadastro:
function cadastro(nome, idade) {
    return `O nome do cliente � ${nome}, e sua idade � ${idade}.`;
}
console.log(cadastro("Andressa",28))


//Fun��o calculando o IMC
function imc(peso, altura) {
    return peso / (altura*altura);
}
console.log(imc(60,1.50))


//Fun��o sem retorno e sem par�metro: 
function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()


   //Fun��o sem retorno, com par�metro:
   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')


   //Fun��o com retorno, sem par�metro: 
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome � ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // �Oi gente! Meu nome � Paula�


   //Fun��o com return e mais de um par�metro:
   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90


   /* Par�metros x argumentos: 
   Na pr�tica se referem ao mesmo tipo de dado; 
   algumas documenta��es se referem a par�metros no momento em que a fun��o � definida
   (no caso, numero1, numero2, etc) 
   e argumentos como os dados que utilizamos para executar a fun��o (ou seja, 30, 45, etc).*/
