// Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
const carro = {
    marca: 'Volkswagen', // marca (string): marca do carro.
    modelo: 'Gol 1.6', // modelo (string): modelo do carro.
    ano: 2006, // ano (number): ano de fabricação do carro.
    cor: 'prata' // cor (string): cor do carro.
}

// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
/* for (const chave in carro) {
    if (Object.prototype.hasOwnProperty.call(carro, chave)) {
        const element = carro[chave];
        console.log(`${chave}: ${element}`);
    }
}*/

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.portas = 4;
carro.kitGas = true;
carro.vidroEletrico = false;
carro.dono = { nome: 'Lucas Monteiro', cpf: '111111111-11'};

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
for (const chave in carro) {
    var tipo = typeof carro[chave];
    if (tipo !== 'object' && tipo != 'function') {
        console.log(`${chave}: ${carro[chave]}`);
    }
    if (tipo === "object") {
        console.log(`${chave}: ${Object.values(carro[chave]).join(", ")}`);
    }
}