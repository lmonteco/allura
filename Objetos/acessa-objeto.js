const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '10293874521',
    turma: 'JavaScript'
}


function acessaInfoEstudante(obj, info) {
    return obj[info];
}

console.log(estudante["nome"]);

console.log(`Acesso por notação de ponto: ${estudante.cpf}`);
console.log(`Acesso por notação de ponto: ${estudante.pet}`);
console.log(`Acesso por notação colchete: ${estudante['cpf']}`);
console.log(`Acesso por notação colchete: ${estudante['pet']}`);

console.log(acessaInfoEstudante(estudante, 'idade'));