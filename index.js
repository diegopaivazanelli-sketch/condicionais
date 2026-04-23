let minhaVariavel = 10;
console.log(minhaVariavel);

minhaVariavel = "Olá, Mundo!";
console.log(minhaVariavel);

minhaVariavel = true;
console.log(minhaVariavel);

let numero = 10;
let texto = "20";

let resultado = numero + texto;
console.log (resultado);

// Isso é um comentário de linha única
/*
    Isso é um comentário
    de múltiplas linhas
*/

console.log ("Isso vai executar") // mas isso aqui é ignorado

// Case sensitive
let nome = "Diego";
let Nome = "Maria";
let NOME = "João";
console.log(nome)
console.log(Nome)
console.log(NOME)

//Palavra Reservada
//let, const, var, if, else, for, while, function, return, class, new, switch, case

//Regras de Nomenclatura
//Pode começar com letra, _ ou $
//Pode conter lentras, número, _ ou $
//Não pode começar com número
//Não pode ter espaço
//Não pode usar acentos

let nome2;
let nomeCompleto;
let _contador;

//Nomes de funções começam com verbos:
function calcularMedida() {
}

function buscarUsuario() {

}

//Tipos Primitivos
//NUMBER - Número
const preco = 19.9;
console.log(typeof preco);

//STRING - texto
const nome3 = "Diego"
console.log(typeof nome3);

//BOOLEAN - verdadeiro ou falso
const ativo = true;
console.log(typeof ativo);

//NULL - ausencia intencional de valor
const vazio = null;
console.log(typeof vazio);

//UNDEFINED - varíavel sem valor
let indefinido;
console.log(typeof indefinido);

//BIGINT > números muitos grandes
const grande = 78455454842585n;
console.log(typeof grande);

//Valores especiais - NaN e Infinity
//// INFINITY - divisao por zero
console.log(5 / 0);
console.log(-5 / 0);

//NaN (Not a Number) - operação inválida
console.log("abc" * 3);
console.log(Math.sqrt(-1));
console.log(0 / 0);

//Checar se é número ou não
console.log(Number.isNaN("abc" * 3));

function calcularTotal(preco, quantidade){
    const total = preco * quantidade;
    if (Number.isNaN(total)) {
        console.log("Erro: preço ou quantidade inválidos");
        return 0;
    }
    return total;
}

console.log(calcularTotal("abc", 2))
console.log(calcularTotal(10, 5));

//Strings e Template Literals
// // Aspas simples, duplas ou crase
const nome4 = 'Diego';
const nome5 = "Diego";


//// Propriedades e métodos
const nomeCompleto2 = "Diego Paiva";
console.log(nomeCompleto2.length);
console.log(nomeCompleto2.toUpperCase());
console.log(nomeCompleto2.toLowerCase());

// TEMPLATE STRING (crase) - permite inserir variáveis
const nome7 = "Diego";
const idade = "21"

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);

//Conversões de Tipo
console.log(Number("123"));
console.log(parseInt("10.9"));
console.log(parseFloat("10.9"));
console.log(String(123));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("oi"));

const texto2 = prompt("Digite um número:");
console.log(texto2 + 5);

const numero2 = Number(prompt("Digite um número:"));
console.log(numero2 + 5);
alert(numero2 + 5);

//Operadores Aritméticos
console.log(2 + 3) // soma
console.log(2 - 2) // subtração
console.log(2 * 3) // multiplicação
console.log(10 / 2) // divisão
console.log(10 % 3) // resto da divisão
console.log(2 ** 3) // potencia

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

//operadores de comparação
console.log( 5 == "5"); // true - valores são iguais ( após conversão)
console.log( 5 == 5); // true - valores são iguais

console.log( 5 === "5"); // false - tipos diferentes (number - string)
console.log( 5 === 5) // true - valor E tipos iguais

console.log( 5 != "5"); // false - valores NÃO sçao diferentes (após conversão)
console.log( 5 != 7); // true - valores SÃO diferentes

console.log( 5 !== "5"); // true - SÃO diferentes (tipos diferentes)
console.log( 5!== 5); // false - NÃO são diferentes (idênticos)

console.log(!true);
console.log(!false);

const idade3 = 15;
console.log(idade3 >= 18);
console.log(!(idade3 >= 18));

const nome8 = "";
const nomeVazio = nome8 === "";
console.log(nomeVazio)

const nomeNaoVazio = nome8 !=="";

console.log(!!true);

//estrutura sequencial (entrada > processamento > saída)


//entrada
const nome9 = prompt("Digite seu nome:");
//processamento
//saída
console.log("Olá," + nome9 + "!");

//entrada soma de dois numeros
const n1 = Number(prompt("Digite o primeiro numero"))
const n2 = Number(prompt("Digite o segundo numero"))
//processamento
const soma = n1 + n2;
//saida
alert("Resultado: " + soma);

//dobro de um numero
const numero1 = Number(prompt("Digite um numero:"))
const dobro = numero1 * 2;
alert(`o dobro de ${numero1} é ${dobro}`);

//media de duas notas
const nota = Number(prompt("Nota da primeira prova"));
const nota2 = Number(prompt("Nota da segunda prova"));
const media = (nota + nota2) / 2;
alert(`a media é ${media.toFixed(1)}`); 


//idade detalhada
const anos = Number(prompt("Digite sua idade:"))
const meses = (anos * 12);
const dias = (anos * 365);
const horas = dias * 24;
const minutos = horas * 60;
console.log(`Idade informada: ${anos} anos`);
console.log(`_________________`)
console.log(`${meses} meses`)
console.log(`${dias} dias`)
console.log(`${horas} horas`)
console.log(`${minutos} minutos`)

// celsius > fahrenheit
//formula: "f = (c x 9/5)" + 32

const celsius = Number(prompt("Digite a temperatura em celsius:"))
const fahrenheit = f = (celsius*9/5) + 32
alert(`${fahrenheit} F`)


