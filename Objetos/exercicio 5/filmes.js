const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.
function filtrarFilmesPorAno(lista, ano) {
    const filmeEncontrado = lista.filter((filme) => filme.anoLancamento === ano);
    if (filmeEncontrado.length === 0) {
        console.log('Nenhum filme foi encontrado');        
    } else {
        console.log(filmeEncontrado);
    }
}
console.log("Filmes de 2010: ");
filtrarFilmesPorAno(catalogoFilmes, 2010)
console.log("Filmes de 2011: ");
filtrarFilmesPorAno(catalogoFilmes, 2011)


// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.
