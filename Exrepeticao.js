// 1 - Contagem de 1 a 10:

console.log("Contando de 1 a 10: \n");
for (let i = 1; i <=10; i++) {
    console.log(`Número: ${i}`);
}


// 2 - Tabuada de um número:

const numero = prompt("Digite um número:")
    if (Number.isNaN(numero)) {
        console.log("Número invalido!")
    } else {
        console.log(`\n Tabuado do ${numero}\n`);
    }

    for(let num = 1; num <=10; num++){
        const resultado = numero * num;
        console.log(`${numero} x ${num} = ${resultado}`)
    }

// 3 - Soma dos primeiros N números naturais:

const n = Number(prompt("Digite um número:"))
let soma = 0
    for(let num1 = 1; num1 <=n; num1++){
        soma += num1
    }
console.log(`Soma de 1 até ${n} = ${soma}`)
   
