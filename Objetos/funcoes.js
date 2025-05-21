const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "10293874521",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["24992381348", "2433481348"],
    media : 7.5,
    statusAprovacao : function (nota) {
        return this.media >= nota ? true : false;
    }
}

console.log(estudante.statusAprovacao(8));