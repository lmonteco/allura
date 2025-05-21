const anoAtual = new Date().getFullYear(); // ex2
const livroPropriedades = ['titulo', 'autor', 'anoPublicacao', 'genero', 'idade'];
const livro = {
    titulo: "Senhor dos Anéis: As Duas Torres",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
}

livro.idade = anoAtual - livro.anoPublicacao;

let mostrarDetalhes = livroPropriedades.forEach((propriedade) => livro[propriedade])
console.log(mostrarDetalhes);
