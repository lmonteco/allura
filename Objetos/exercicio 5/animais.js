// ordenarAnimais.js

// Array de objetos representando animais
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
];

// Função para ordenar animais com base na função de comparação fornecida
function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

// Função de comparação para ordenar por idade de forma crescente
function compararOrdem(chave, ordem = 'crescente') {
    return function (a, b) {
        if (typeof a[chave] === 'string') {
            const resultado = a[chave].localeCompare(b[chave]);       
            return ordem === 'crescente' ? resultado : -resultado;
        } else {
            const resultado = a[chave] - b[chave];       
            return ordem === 'crescente' ? resultado : -resultado;
        }
    }
}

// Ordena os animais por idade de forma crescente e imprime no console
const animaisOrdenadosIdade = ordenarAnimais((compararOrdem('nome','crescente')));
console.log("Animais Ordenados por Idade (Crescente):");
console.log(animaisOrdenadosIdade);