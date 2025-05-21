const anoAtual = new Date().getFullYear(); // ex2
const livroPropriedades = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idade'];
const livro = {
    titulo: "Senhor dos Anéis: As Duas Torres",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
}

livro.idade = anoAtual - livro.anoPublicacao;
let mostrarDetalhes = `Título: ${livro.titulo} - Autor: ${livro.autor} - Ano de Publicação: ${livro.anoPublicacao} - Gênero: ${livro.genero} - Idade do Livro: ${livro.idade} anos`

// console.log(mostrarDetalhes);

livroPropriedades.forEach((propriedade) => console.log(livro[propriedade]));