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
    cidade: 'Volta Redonda'
}]; //cria um array de objetos 'pessoas'

function mostrarInfoPessoa(obj) {
    var info = `Nome: ${obj.nome} / Idade: ${obj.idade} / Solteiro: ${obj.solteiro} / Hobbies: ${obj.hobbies} / Endereço: ${obj.endereco.rua}, ${obj.endereco.cidade}, ${obj.endereco.estado}` //altera o template para exibir a nova propriedade 'edereco'
    console.log(info);    
}
//mostrarInfoPessoa(pessoa); //exibe as informações da pessoa

//Cria função que aceita a lista pessoas como parâmetro.
function mostrarListaPessoas(lista) {
    lista.forEach(individuo => console.log(`Nome: ${individuo.nome}, Idade: ${individuo.idade}, Cidade: ${individuo.cidade}`))
}

//Adicione uma nova pessoa à lista pessoas
pessoas.push({
    nome: 'Maria Clara Pereira',
    idade: 72,
    cidade: 'Bananal'
})

// Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros.
function filtrarPorCidade(lista, cidade) {
    lista.map((individuo) => {
        if (individuo.cidade === cidade) {
            console.log(`Nome: ${individuo.nome}, Idade: ${individuo.idade}, Cidade: ${individuo.cidade}`);
        }
    });
}

// mostrarListaPessoas(pessoas); //Imprime no console as informações de cada pessoa na lista.

filtrarPorCidade(pessoas, 'Volta Redonda') //A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.