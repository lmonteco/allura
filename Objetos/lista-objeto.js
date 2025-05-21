const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "10293874521",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["24992381348", "2433481348"],
    endereco: [{
        rua: "Joana D'arc",
        numero: "203",
        bairro: "Niteroi"
    }]
}

estudante.endereco.push({
    rua: "Rua Oitocentos e Trinta e Tres",
    numero: "181",
    bairro: "Jardim Tiradentes"
});

console.log(estudante.endereco[1]);