const pessoa = {
    nome: 'Lucas Monteiro',
    idade: 33,
    solteiro: false,
    hobbies: ['Jogos de Tabuleiro', 'Tocar violão'],
    endereco: {
        rua: 'Rua Oitocentos e Trinta e Três',
        cidade: 'Volta Redonda',
        estado: 'Rio de Janeiro'
    } //adiciona nova propriedade com valores fictícios
};

function mostrarInfoPessoa(obj) {
    var info = `Nome: ${obj.nome} / Idade: ${obj.idade} / Solteiro: ${obj.solteiro} / Hobbies: ${obj.hobbies} / Endereço: ${obj.endereco.rua}, ${obj.endereco.cidade}, ${obj.endereco.estado}` //altera o template para exibir a nova propriedade 'edereco'
    console.log(info);    
}

mostrarInfoPessoa(pessoa); //exibe as informações da pessoa

