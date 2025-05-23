const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "10293874521",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["24992381348", "2433481348"],
    enderecos: [{
        rua: "Joana D'arc",
        numero: "155",
        complemento: "101",
        bairro: "Niteroi"
    },
    {
        rua: "Rua Oitocentos e Trinta e Tres",
        numero: "181",
        complemento: null,
        bairro: "Jardim Tiradentes"
    }]
}

for (let chave in estudante) {
    var tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo != 'function') {
        var info = `A chave ${chave} tem o valor: ${estudante[chave]}`;
        console.log(info);
    }
}