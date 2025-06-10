const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" },
            { id: 203, nome: "Lucas", cargo: "Scrum Master" }
        ]
    }
]

//eu
function exibeQuantidadeFuncionariosPorSetor() {
    const relatorioResumido = [];
    for (const setor of departamentos) {
        const departamento = setor.nome;
        const totalFuncionarios = setor.funcionarios.length;
        relatorioResumido.push({departamento, totalFuncionarios});
    }
    console.log(relatorioResumido);    
}

exibeQuantidadeFuncionariosPorSetor();

//gpt - versão com .map();
function exibeQuantidadeFuncionariosPorSetor() {
    const relatorioResumido = departamentos.map(setor => ({
        departamento: setor.nome,
        totalFuncionarios: setor.funcionarios.length
    }));
    console.log(relatorioResumido);
}