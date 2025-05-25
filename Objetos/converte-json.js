const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);

const objetoEstudante = JSON.parse(stringEstudante);
console.log(objetoEstudante);
