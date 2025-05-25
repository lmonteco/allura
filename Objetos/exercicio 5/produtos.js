const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.
function filtrarOrdenarProdutosPorPreco(lista, maxPreco) {
    const produtosFiltrados = lista.filter((produto) => produto.preco <= maxPreco);
    const produtosOrdenados = produtosFiltrados.sort((a, b) => {
        if (a.preco < b.preco) return -1;
        if (a.preco > b.preco) return 1;
        return 0;
    })
    console.log(produtosFiltrados);
}

// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
filtrarOrdenarProdutosPorPreco(listaProdutos, 50);