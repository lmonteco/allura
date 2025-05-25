const estudantes = require('./estudantes.json');

function filtraPropriedadeIncompleta(lista, chave, propriedade) {
    return lista.filter((estudante) => {
        return !estudante[chave].hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPropriedadeIncompleta(estudantes, 'endereco', 'complemento');
console.log(listaEnderecosIncompletos);