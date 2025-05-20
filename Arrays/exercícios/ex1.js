/* //exercício 1:
const arrayNums = [1, 2, 3, 4];
arrayNums.forEach(numero => console.log(numero)); */

/* //exercício 2:
const arrayNums = [1,2,3,5,8,13];
let soma = 0;

function executaOperacaoEmArray(arr, funcaoCallback) {
    return arr.map(funcaoCallback);
}

function somaNumero(num) {
    soma += num;
    console.log(soma);    
}

executaOperacaoEmArray(arrayNums, somaNumero); */

/* //exercício 3:
let numeros = [1,2,3,4,5];

function verificaNumeroExistente(num, array) {
    if (array.includes(num)) {
        let index = array.indexOf(num)
        console.log(`O número ${num} existe no array, e seu índice é: ${index}`);
    } else {
        return false;
    }
}

verificaNumeroExistente(5, numeros); */

/* //exercício 4:
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

let todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
let nomeProcurado = 'Lucas Monteiro';
let nomeVerificado = todasAsTurmas.find((nome) => nome == nomeProcurado);

if (nomeVerificado) {
    console.log(`O(A) aluno(a) ${nomeProcurado} foi encontrado(a)`);
} else {
    console.log(`Aviso! O(A) aluno(a) ${nomeProcurado} não foi encontrado(a)`);
} */

//exercício 5;
const numeros = [6, 9, 12, 15, 18, 21];
let numeroProcurado = 18;
let indiceProcurado = numeros.findIndex((elemento) => elemento === numeroProcurado);

numeros.forEach(function (numero) {
   let resultado = numero * 3;
   console.log(resultado);   
});

console.log(indiceEncontrado);