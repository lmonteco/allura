// Utilize o objeto carro do exercício 2
const carro = {
    marca: 'Volkswagen',
    modelo: 'Gol 1.6',
    ano: 2006,
    cor: 'prata',
    ligado: false, // ligado (boolean): indica se o carro está ligado ou não.
    ligar: function () { // ligar (function): altera o status da propriedade 'ligado'
        if (this.ligado === true) {
            console.log('O carro já está ligado');            
        } else {
            this.ligado = true;
            console.log('O carro ligou');
        }
    },
    desligar: function () { // desligar (function): altera o status da propriedade 'ligado'
        if (this.ligado === false) {
            console.log('O carro já está desligado');
        } else {
            this.ligado = false;
            console.log('O carro desligou');
        }
    },
    obterDetalhes: function() {
        var status = '';
        this.ligado === true ? status = 'ligado' : status = 'desligado';
        console.log(`Esse é um carro da marca ${this.marca}, modelo ${this.modelo}. Seu ano de fabricação é ${this.ano} e tem a cor ${this.cor}. No momento ele está ${status}`);
    } // obterDetalhes (function): retorna os detalhes do carro    
}
// adicione uma nova propriedade chamada placa

Object.defineProperty(carro, 'placa', {
  value: 'KAK-8159',
  enumerable: false // não enumerável
});

// for (const chave in carro) {
//     console.log(chave);    
// }

// carro.obterDetalhes();
// carro.ligar(); // Chame o método ligar
// carro.obterDetalhes();
// carro.ligar(); 
// carro.obterDetalhes();
// carro.desligar(); // Chame o método desligar
// carro.obterDetalhes();
// carro.desligar();
// carro.obterDetalhes(); // Chame o método

// const propriedadesCarro = Object.keys(carro);
// console.log(propriedadesCarro);

// console.log(carro.placa);

// Crie um novo objeto chamado:
const carroNovo = {
    marca: 'Fiat', // marca (string): marca do novo carro.
    modelo: 'Uno', // modelo (string): modelo do novo carro.
    ano: 2004, // ano (number): ano de fabricação do novo carro.
    cor: 'amarelo' // cor (string): cor do novo carro.
}
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
const carroComNovosDetalhes = { ...carro, ...carroNovo };

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
console.log('Carro antigo');
console.log(carro);
console.log('Carro novo');
console.log(carroNovo);
console.log('Detalhes Atualizados');
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.cor = 'preto';

console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.