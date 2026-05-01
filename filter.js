// filter

// ============================================= callback ================================================ //
// array.metodo((element, index, array) => {

// });

// ============================================= forEach ================================================== //
// const frutas = ["Maça", "Banana", "Uva"];
// frutas.forEach((element, index)=>{
//     console.log(index, element);
// })

// const alunos = ["Lucas", "Maria", "Joao"]
// alunos.forEach((nome, index)=>{
//     console.log(`${index + 1} aluno: ${nome}`)
// })

const people = [
    {nome: "Lucas", age: 35},
    {nome: "Maria", age: 17},
    {nome: "Joao", age: 18},
    {nome: "Ana", age: 22},
];

// // const novoArray = array.filter((element)=>{
// //     return condicao;
// // });

// const maiores = people.filter((person)=>{
//     return person.age >=18;
// });
// console.log(maiores)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// const numerosPares = numeros.filter((numero)=>{
//     return numero % 2 === 0;
// });

// console.log(numerosPares)

// const numeros = [10, 66, 88, 90, 12, 40]
// const numerosmaiores = numeros.filter((numeros)=>{
//     return numeros > 50;
// })
//     console.log(numerosmaiores)

//====================================== MAP ================================ //
// const novoArray = array.map((element)=>{
//     return novoValor;
// });

// const nomes = people.map((person)=>{
//     return person.nome.toUpperCase();
// })
// console.log(nomes)

// const numeros = [1, 2, 3, 4, 5];
// const dobro = numeros.map((numero)=>{
//     return numero * 2;
// })
// console.log(dobro)

// const produtos = ["Mouse", "Teclado", "Monitor"];
// const frases = produtos.map((produto)=>{
//     return `Produtos: ${produto}`
// })
// console.log(frases)

// const pessoas = [
//     {nome:"Lucas", idade:35},
//     {nome:"Maria", idade:17},
// ]
// const resultados = pessoas.map((pessoa)=>{
//     return {
//         nome: pessoa.nome, 
//         maiorIdade: pessoa.idade >=18
//     }
// })
// console.log(resultados)

// const precos = [100, 200, 300];
// const descontos = precos.map((desconto)=>{
//     return desconto * 0.9
// })

// console.log(descontos)

// const numero = [1, 2, 3, 4];
// const frase = numero.map((frases)=>{
//     return `Número: ${frases}`
// })
// console.log(frase)


// ======================================= FIND ============================== //

// const item = array.find((element)=>{
//     return condição;
// })

// const maria = people.find((person)=>{
//     return person.nome === "Maria"
// })
// console.log(maria)

// const numeros = [5, 10, 15, 20, 25];
// const maior = numeros.find((n)=>{
//     return n > 18
// })
// console.log(maior)
  
// const usuarios = [
//     {id:1, nome:"Diego"},
//     {id:2, nome:"Lucas"},
//     {id:3, nome:"Maria"},
// ]
// const usuario = usuarios.find((u)=>{
//     return u.id === 2;
// })
// console.log(usuario)

// const numeros = [5, 8, -2, 10, -7]
// const negativo = numeros.find((n)=>{
//     return n < 0
// })
// console.log(negativo)

// ===================================== REDUCE ================================== //
// array.reduce((acc, element)=>{
//     return novoACC;
// }, valorInicial);

// const numeros = [10, 20, 30];
// const soma = numeros.reduce((acc, numero)=>{
//     console.log("ACC:", acc)
//     console.log("Número atual:", numero)
//     return acc + numero;
// }, 0);
// console.log(soma)

// const totalIdade = people.reduce((acc, person)=>{
//     return acc + person.age;
// }, 0)
// console.log(totalIdade)

// const nomes = people.reduce((acc, person)=>{
//     return acc + " " + person.nome
// }, "")
// console.log(nomes)

// const numeros = [2, 3, 4]
// const multi = numeros.reduce((acc, n)=>{
//     return acc * n
// }, 1)
// console.log(multi)

const carrinho = [
    {produto: "Mouse", preco: 50},
    {produto: "Teclado", preco: 100},
    {produto: "Monitor", preco: 900},
]

const soma = carrinho.reduce((acc, produtos)=>{
    return acc + produtos.preco
}, 0)
console.log(soma)