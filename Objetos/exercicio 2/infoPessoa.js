const pessoa = {
    nome: 'Lucas Monteiro',
    idade: 33,
    solteiro: false,
    hobbies: ['Jogos de Tabuleiro', 'Tocar violão']
};

function mostrarInfoPessoa(obj) {
    var info = `Nome: ${obj.nome}, Idade: ${obj.idade}, Solteiro: ${obj.solteiro}, Hobbies: ${obj.hobbies}`
    console.log(info);    
}

mostrarInfoPessoa(pessoa);