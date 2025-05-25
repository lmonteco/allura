// cria array representando livros
const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

// Crie uma função que receba um id e retorne o objeto do livro correspondente.
function encontrarLivroPorId(lista, id) {
    return lista.find((livro) => livro.id === id ? livro.id : null)
}


// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado.
var livroProcurado = encontrarLivroPorId(biblioteca, 3);
for (const propriedade in livroProcurado) {
    console.log(`${propriedade}: ${livroProcurado[propriedade]}`);    
}

// Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
livroProcurado = encontrarLivroPorId(biblioteca, 4);
if (!livroProcurado) {
    console.log(`Livro não encontrado`);
}

