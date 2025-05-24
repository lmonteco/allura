// Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
const carro = {
    marca: 'Volkswagen', // marca (string): marca do carro.
    modelo: 'Gol 1.6', // modelo (string): modelo do carro.
    ano: 2006, // ano (number): ano de fabricação do carro.
    cor: 'prata', // cor (string): cor do carro.
    ligado: false, // ligado (boolean): indica se o carro está ligado ou não.
    ligar: function () {
        if (this.ligado === true) {
            console.log('O carro já está ligado');            
        } else {
            this.ligado = true;
            console.log('O carro ligou');
        }
    },// ligar (function): altera o status da propriedade 'ligado' para true
    desligar: function () {
        if (this.ligado === false) {
            console.log('O carro já está desligado');
        } else {
            this.ligado = false;
            console.log('O carro desligou');
        }
    }, // desligar (function): altera o status da propriedade 'ligado' para false
    obterDetalhes: function() {
        this.ligado === true ? this.ligado = 'ligado' : this.ligado = 'desligado';
        console.log(`Esse é um carro da marca ${this.marca}, modelo ${this.modelo}. Seu ano de fabricação é ${this.ano} e tem a cor ${this.cor}. No momento ele está ${this.ligado}`);
    } // obterDetalhes (function): retorna os detalhes do carro    
}
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
console.log(carro.ligado);
carro.ligar();
carro.ligar();
carro.desligar();
carro.desligar();
// Chame o método obterDetalhes e imprima no console a string retornada.
carro.obterDetalhes();