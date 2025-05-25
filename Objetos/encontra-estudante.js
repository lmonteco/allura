const estudantes = require('./estudantes.json');

function buscaInfoEstudante(lista, chave, valor) {
    const informacaoEncontrada = lista.find((estudante) => estudante[chave].includes(valor));
    return informacaoEncontrada;
}

console.log(buscaInfoEstudante(estudantes, 'telefone', '9466883489'));