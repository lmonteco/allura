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

for (const chave in carro) {
    console.log(chave);    
}

// carro.obterDetalhes();
// carro.ligar(); // Chame o método ligar
// carro.obterDetalhes();
// carro.ligar(); 
// carro.obterDetalhes();
// carro.desligar(); // Chame o método desligar
// carro.obterDetalhes();
// carro.desligar();
// carro.obterDetalhes(); // Chame o método

const propriedadesCarro = Object.keys(carro);
console.log(propriedadesCarro);

console.log(carro.placa);
