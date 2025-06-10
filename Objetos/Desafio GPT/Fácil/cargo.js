// Crie uma função que receba uma lista de funcionários e um cargo, e retorne apenas os funcionários com esse cargo.
const funcionarios = [
{ id: 101, nome: "Ana", cargo: "Vendedor" },
{ id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
{ id: 201, nome: "Maria", cargo: "Desenvolvedor" },
{ id: 202, nome: "João", cargo: "Analista de sistemas" }
]

//eu
function encontraFuncionarioPorCargo(lista, cargo) {
    for (const funcionario of lista) {
        const funcionarioEncontrado = lista.find(elemento => elemento.cargo === cargo);
        if (funcionarioEncontrado) {
            console.log(funcionarioEncontrado);
            return;
        }
    }
    console.log("Ninguém foi encontrado");    
}

encontraFuncionarioPorCargo(funcionarios, "Digitador");

//gpt
function encontraFuncionarioPorCargo(lista, cargo) {
    const filtrados = lista.filter(funcionario => funcionario.cargo === cargo);
    if (filtrados.length > 0) {
        console.log(filtrados);
    } else {
        console.log("Ninguém foi encontrado");
    }
}