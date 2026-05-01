//while

//while (condition) {
    // código se repete enquanto a condição for true
//}

//Contagem de 1 a 5 

// let contador = 1;
// while (contador <=5) {
//     console.log("contagem:", contador);

//     contador++
// }

// //contagem regressiva de 10 até 1

// let tempo = 10;
// console.log("Iniciando contagem regressiva...")

// while (tempo > 0) {
//     console.log(`${tempo}...`);

//     tempo--
// }
// console.log("Feliz ano novo!")

// //Validação de senha

// const senhaCorreta = "123456";
// let tentativa = "";
// while (tentativa !== senhaCorreta) {
//     tentativa = prompt("Digite a senha:")
//     if (tentativa === senhaCorreta) {
//         console.log("Senha correta!");
//     } else {
//         console.log("Senha incorreta");
//     }
// }

// Somar números até ultrapassar 100

// let soma = 0;
// let numero = 1;

// console.log("Somando números até passar de 100...");

// while (soma < 100) {
//     soma = soma + numero

//     console.log(`${numero} Soma parcial: ${soma}`);

//     numero++
// }
// console.log(`\n Precisou de ${numero - 1} números para ultrapassar 100`);
// console.log("Soma final:" + soma);

// const numero = Number(prompt("Qual número:"))

// if (Number.isNaN(numero)) {
//     console.log("Digite um número válido!")
// } else {
//     let multiplicador = 1;
//     console.log(`Tabuada do ${numero}\n`);

//     while (multiplicador <=10) {
//         const resultado = numero * multiplicador
//         console.log(`${numero} x ${multiplicador} = ${resultado}`);
//         multiplicador++
//     }
// }

// let x = 10;
// while (x < 5) {
//     console.log("Isso não vai aparecer")
// }

// let y = 10;
// do {
//     console.log("Isso vai aparecer uma vez");
// } while (y < 5);

//Menu interativo

// let opcao;

// do {
//     console.log(`\n=========Menu==========`);
//     console.log(`1 - ver saldo`);
//     console.log(`2 - fazer deposito`);
//     console.log(`3 - fazer saque`);
//     console.log(`0 - sair`);
//     console.log(`\n======================\n`);

//     opcao = prompt("Escolha uma opção:");

//     if (opcao === "1") {
//         console.log("seu saldo é de 1000,00")
//     } else if (opcao === "2") {
//         console.log("Deposito realizado!")
//     } else if (opcao === "3") {
//         console.log("Saque realizado!")    
//     } else if (opcao === "0") {
//         console.log("Até logo!")    
//     } else {
//         console.log("Opção invalida")    
//     }
// } while (opcao !== "0");

// jogo: adivinhe o numero

// const numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Math.random 0.0 0.99999999... 
// * 10 0.0 9.99999999
// Math.floor 0 - 9
// +1 só para transformar esse 0 - 9 em 10

// let palpite;
// let tentativa = 0;
// console.log("Adivinhe o número entre 1 e 10")
// do {
//     palpite = Number(prompt("Seu palpite:"));
//     tentativa++

//     if (Number.isNaN(palpite)) {
//         console.log("Digite um número valido")
        
//     } else if (palpite < numeroSecreto) {
//         console.log("Muito baixo! Tente novamente")
//     } else if (palpite > numeroSecreto) {
//         console.log("Muito alto! Tente novamente")
//     } else {
//         console.log(`Acertou!!!! o numero era ${numeroSecreto}`)
//         console.log(`Precisou de ${tentativa} tentativas`);
//     }
// } while (palpite !== numeroSecreto);

// //For
// console.log("Contando de 1 a 10: \n")
// for (let i = 1; i<= 10; i++) {
//     console.log(` Número: ${i}`)
// }

// // Tabuada
// const numero = Number(prompt("Tabuada de qual número?"))
// if (Number.isNaN(numero)) {
//     console.log("Número inválido!")
    
// } else {
//     console.log(`\n Tabuada do ${numero}\n`);

//     for (let i = 1; i <=10; i++);{
//         const resultado = numero * i;
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }

// }

// //Número pares de 0 a 20//
// console.log("Número pares de 0 a 20: \n")
// for (let i = 0; i <=20; i++); 
// if (i % 2 === 0) {
//     console.log(i)
// }
// // outra forma de fazer
// for (let i2 = 0; i2 <=20; i2 +=2) {
//     console.log(i2);
// }

// contagem regressiva com for
// console.log("Iniciando contagem regressiva...");

// for (let i = 10; i >=0; i--); {
//     console.log(`${i}...`);
// }

// const altura = 5
// for (let linha = 1; linha <=altura; linha--){
//     let asteriscos ="";

//     for (let i = 1; i <=linha; i++) {
//         asteriscos += "* "
//     }
//     console.log(asteriscos);
// }

// Array (lista)

// const frutas = ["Maça", "Banana", "Laranja", "Uva"];
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

// console.log(frutas.length);

// // for of
// for (const item of frutas) { //array
//     console.log(`- ${fruta}`)
// }

// //soma de todos os numeros no array
// const numeros = [10, 25, 8, 42, 15, 7]
// let soma = 0;
// for (const numero of numeros) {
//     soma += numero
//     console.log(`A soma dos numeros é: ${soma}`);
// }

// //Objetos
// // const pessoa = {
//     nome: "Diego",
//     idade: 21,
//     cidade: "Santo André",
//     profissao: "estudante"
// }
// console.log(pessoa.nome)
// console.log(pessoa["idade"])

// // for in
// for (const chave in pessoa) {

// }

// const aluno = {
//     nome: "Sofia",
//     matricula: "15032005",
//     curso: "front-end",
//     nota: 9.5
// }
// console.log("Dados do aluno:\n");
// for (const chave in aluno) {
//     const valor = aluno [chave]
//     console.log(`${chave}: ${valor}`)
// }

// estoque de produtos

// const estoque = {
//     "notebook": 15,
//     "mouse": 50,
//     "teclado": 30,
//     "monitor": 8,
//     "webcam": 22
// }
// for (const produto in estoque){
//     const quantidade = estoque [produto]
//     if (quantidade <10) {
//         console.log(`${produto}: ${quantidade} estoque abaixo!`)
//     } else {
//         console.log(`${produto}: ${quantidade} estoque acima!`)
//     }
// }

//carrinho de compra

// ============================================ Array ============================== //

// const carrinho = [
//     {produto: "camiseta", preco: 49.90, quantidade: 2},
//     {produto: "calça jeans", preco: 129.90, quantidade: 1},
//     {produto: "tênis", preco: 500.90, quantidade: 1},
// ];

// let total = 0;

// console.log ("Carrinho de compras:\n")
// for (const item of carrinho) {
//     const subtotal = item.preco * item.quantidade

//     total += subtotal

//     console.log(`${item.produto} (${item.quantidade}x) - R$ ${subtotal.toFixed(2)}`)
// }
// console.log("\n" + "=".repeat(40));
// console.log(`TOTAL: R$ ${total.toFixed(2)}`)


// ======================================== BREAK ================================ //

// const numeros = [5, 12, 8, 3, 19, 7, 25];
// const procurado = 19;
// console.log("Procurando o número", procurado);
// for(const num of numeros) {
//     console.log("Verificando:", num);
//     if (num === procurado) {
//         console.log("Encontrado!!")
//         break;
//     }
// }
// console.log("Loop terminou!")


// //senha com limite de 3 tentativas
// const senhaCorreta = "abc123";
// const maxTentativas = 3;
// for (let tentativa = 1; tentativa <= maxTentativas; tentativa++){
//     const senha = prompt(`tentativa ${tentativa}/${maxTentativas} - Digite sua senha:`);

//     if (senha === senhaCorreta) {
//         console.log("Acesso liberado");
//         break;
//     } else {
//         console.log("Senha incorreta!");

//         if (tentativa === maxTentativas){
//             console.log("Conta bloqueada!")
//         }
//     }
// }

// continue
// for(let i = 1; i <=10; i++) {
//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// const alunos = [
//     {nome: "ana", nota: 8.5},
//     {nome: "bruno", nota: 5.0},
//     {nome: "carlos", nota: 9.0},
//     {nome: "diana", nota: 4.5},
//     {nome: "eduardo", nota: 7.5},
// ];
// console.log("Alunos aprovados:\n")
// for (const aluno of alunos); {
//     if (aluno.nota < 7) {
//         continue;
//     }
//     console.log(`${aluno.nome} - nota: ${aluno.nota}`);
// }

// const frase = prompt("Digite uma frase:");
// const vogais = "aeiouAEIOU";
// let contador = 0;
// let vogaisEncontradas = [];
// for (const letra of frase) {
//     if(vogais.includes(letra)){
//         contador++
//         vogaisEncontradas.push(letra)
//     }
// }
// console.log(`\n Frase: "${frase}"`);
// console.log(`vogais encontradas: ${contador}`);
// console.log(`Vogais encontradas: ${vogaisEncontradas}`);