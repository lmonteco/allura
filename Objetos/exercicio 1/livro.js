const anoAtual = new Date().getFullYear(); // ex2
const livro = {
    titulo: "Senhor dos Anéis: As Duas Torres",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idade: null,
    avaliacao: null
}

livro.idade = anoAtual - livro.anoPublicacao;
let mostrarDetalhes = `Título: ${livro.titulo} - Autor: ${livro.autor} - Ano de Publicação: ${livro.anoPublicacao} - Gênero: ${livro.genero} - Idade do Livro: ${livro.idade} anos - Avaliação: ${livro.avaliacao}`;


if (livro.avaliacao === null) {
    livro['avaliacao'] = '10/10';
} else {
    console.log(`O livro ${livro.titulo} já possui uma avaliação`);    
}

livro.genero = 'Aventura';

delete livro.avaliacao;

console.log(livro);