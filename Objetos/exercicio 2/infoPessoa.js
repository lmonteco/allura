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

const pessoas = [{
    nome: 'Joelson Mendes',
    idade: 23,
    cidade: 'Volta Redonda'
},
{
    nome: 'Priscila Coutinho',
    idade: 14,
    cidade: 'Jundiaí'
},
{
    nome: 'Mateus Proença',
    idade: 45,
    cidade: 'Angra dos Reis'
}]; //cria um array de objetos 'pessoas'

function mostrarInfoPessoa(obj) {
    var info = `Nome: ${obj.nome} / Idade: ${obj.idade} / Solteiro: ${obj.solteiro} / Hobbies: ${obj.hobbies} / Endereço: ${obj.endereco.rua}, ${obj.endereco.cidade}, ${obj.endereco.estado}` //altera o template para exibir a nova propriedade 'edereco'
    console.log(info);    
}
//mostrarInfoPessoa(pessoa); //exibe as informações da pessoa

//Cria função que aceita a lista pessoas como parâmetro.
function mostrarListaPessoas(lista) {
    lista.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`))
}

//Adicione uma nova pessoa à lista pessoas
pessoas.push({
    nome: 'Maria Clara Pereira',
    idade: 72,
    cidade: 'Bananal'
})

mostrarListaPessoas(pessoas); //Imprime no console as informações de cada pessoa na lista.