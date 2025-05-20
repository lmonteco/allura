const lista = [203, 101, 3, 540, 23];

/* for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);    
}

function imprimeIndices(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }
} 
imprimeIndices(lista);

function somaNumeros(array) {
    let soma = 0;

    for (const elemento of array) {
        soma += elemento;    
    }
    console.log(soma);    
}
somaNumeros(lista); */

/* function encontraMaiorMenor(array) {
    let arrayOrdenado = array.sort((a, b) => a - b);
    let maior = arrayOrdenado[array.length - 1];
    let menor = arrayOrdenado[0];
    console.log(arrayOrdenado);
    
    console.log(`o menor número é ${menor} e o maior número é ${maior}`);    
} */

/* function encontraMaiorMenor(array) {
    let maior = 0;
    let menor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]) {
            maior = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    
    console.log(`O menor número é ${menor} e o maior número é ${maior}'`);
}

encontraMaiorMenor(lista); */

/* function retiraMenor(array) {    
    let indice = 0;
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            indice = i;
        }
    }
    array.splice(indice, 1);
    return menor;
}

function ordenaMenor(array) {
    const tamanhoArray = array.length;
    let arrayOrdenado = [];
    for (i = 0; i < tamanhoArray; i++) {
        arrayOrdenado.push(retiraMenor(array));
    }
    console.log(arrayOrdenado);    
}
ordenaMenor(lista); */

// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
/* const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);        
    }
} */

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
/* const numeros = [10, 8, 6, 9, 7, 5];
let somaNumeros = 0;
let media = 0;
for (const numero of numeros) {
    somaNumeros += numero;
}
media = somaNumeros / numeros.length;

console.log(media); */