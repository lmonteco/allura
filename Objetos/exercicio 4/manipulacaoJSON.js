// a) Leia o conteúdo do arquivo animais.json.
const animais = require('./animais.json');

console.log(animais);

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
const listaAnimais = JSON.parse(JSON.stringify(animais));

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
listaAnimais.animais.push({id: 4, nome: 'Zebra', tipo: 'Mamífero', habitat: 'Savana'})

// d) Modifique o habitat de um animal existente no array de animais.
listaAnimais.animais[2].habitat = 'Deserto';

// e) Remova um animal do array de animais.
listaAnimais.animais.splice(1, 1);

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const stringListaAnimais = JSON.stringify(listaAnimais);

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(stringListaAnimais);