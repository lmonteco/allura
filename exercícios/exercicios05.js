/* //Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
const notas1 = [7,4.5,8,7.5];
const notas2 = [10,8,7.5,9,6,3.5];
const notas3 = [10,6.5,8,7.5];

function unificaArrays(...arrays) {
    return [].concat(...arrays);
}

let arrayUnificada = unificaArrays(notas1, notas2, notas3);
console.log(arrayUnificada); */

/* //Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const valores = [10,6.5,8,7.5];

const somatorioArray = valores.reduce((acum, valor) => acum + valor, 0);
console.log(somatorioArray); */

/* //Considere duas listas de cores:
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
const coresUnidasUnicas = [...new Set([...coresLista1, ...coresLista2])];

console.log(coresUnidasUnicas.sort()); */

/* //Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares
const valores = [10,6.5,8,7.5];

function exibePares(array) {
    const valoresPares = array.filter((num) => num % 2 === 0);    
    console.log(valoresPares);
}

exibePares(valores); */

/* //5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
const valores = [10,6.5,8,7.5,35,23,12,15,10,3,2,1,5,4,6,9];

function filtraArray(array) {
    return array.filter((num) => num % 3 === 0 && num > 5);
}
const numerosFiltrados = filtraArray(valores);
console.log(numerosFiltrados); */

//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
const valores = [10,6.5,8,7.5,35,23.3,12,15,10,3,2,1,5,4,6,9];

function somaTudo(arr) {
    return arr.reduce((ac, num) => ac + num, 0);
}

const resultadoSoma = somaTudo(valores);
console.log(resultadoSoma);