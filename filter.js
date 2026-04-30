// filter

// //callback
// array.metodo((element, index, array) => {

// });

//forEach
// const frutas = ["Maça", "Banana", "Uva"];
// frutas.forEach((element, index)=>{
//     console.log(index, element);
// })

// const alunos = ["Lucas", "Maria", "Joao"]
// alunos.forEach((nome, index)=>{
//     console.log(`${index + 1} aluno: ${nome}`)
// })

// const people = [
//     {nome: "Lucas", age: 35},
//     {nome: "Maria", age: 17},
//     {nome: "Joao", age: 18},
//     {nome: "Ana", age: 22},
// ];

// // const novoArray = array.filter((element)=>{
// //     return condicao;
// // });

// const maiores = people.filter((person)=>{
//     return person.age >=18;
// });
// console.log(maiores)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const numerosPares = numeros.filter((numero)=>{
    return numero % 2 === 0;
});

console.log(numerosPares)

