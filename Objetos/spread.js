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

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);    
}

exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);
