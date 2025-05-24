// Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas.
const pessoa = {
    nome: 'Lucas',
    notas: [7.5, 8, 9.5, 3]
}

//  Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
pessoa.calcularMediaNotas = function () {
    const totalNotas = this.notas.reduce((total, val) => total + val, 0);
    const mediaNotas = totalNotas / this.notas.length;
    return mediaNotas;
}

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
pessoa.classificarDesempenho = function () {
    var media = this.calcularMediaNotas();
    if (media >= 9) {
        return 'Desempenho Excelente'; // Desempenho excelente: média >= 9
    }
    if (media > 7.5 && media < 9) {
        return 'Bom Desempenho'; // Bom desempenho: 7.5 <= média entre 7.6 e 8.9
    }
    if (media >= 6 && media <= 7.5) {
        return 'Desempenho Regular'; // Desempenho regular: 6 <= média entre 6 e 7.5
    }
    if (media < 6) {
        return 'Desempenho Insuficiente'; // Desempenho insuficiente: média < 6
    }
}

// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
console.log(pessoa.calcularMediaNotas());

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(pessoa.classificarDesempenho());
