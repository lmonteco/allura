const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

// Crie uma função que receba um objeto JavaScript e retorne um novo objeto.
function criaCopiaObjeto(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
const copiaPessoa = criaCopiaObjeto(pessoaOriginal);

// Modifique a cópia do objeto obtido através da função
copiaPessoa.nome = 'Lucas';

// Imprima no console ambos os objetos (o original e o modificado)
console.log(pessoaOriginal);
console.log(copiaPessoa);

