// Crie uma função que ordene alfabeticamente uma lista de objetos com a estrutura { id, nome, cargo } pelo campo nome. A função deve retornar uma nova lista ordenada, sem modificar a original.
const funcionarios = [
{ id: 101, nome: "Ana", cargo: "Vendedor" },
{ id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
{ id: 201, nome: "Maria", cargo: "Desenvolvedor" },
{ id: 202, nome: "João", cargo: "Analista de sistemas" }
]

//eu
function ordenaLista(lista, propriedade) {
    const novaLista = [...lista];
    console.log(novaLista.sort((a, b) => a[propriedade] > b[propriedade]));   
    return;
}

ordenaLista(funcionarios, 'nome');

//gpt
function ordenaLista(lista, propriedade) {
    const novaLista = [...lista];
    novaLista.sort((a, b) => {
        if (a[propriedade] > b[propriedade]) return 1;
        if (a[propriedade] < b[propriedade]) return -1;
        return 0;
    });
    console.log(novaLista);
}