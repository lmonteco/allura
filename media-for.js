const notas = [10, 8, 7.5, 9, 6, 3.5];
let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;
console.log(media.toFixed(1));