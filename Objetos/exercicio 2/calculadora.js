const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        return a / b;
    },
    media: function (arr) { //adiciona um novo método (média) para o objeto calculadora
        var calculo = arr.reduce((ac, valor) => ac + valor, 0) / arr.length;
        return calculo;
    }
}; //cria o objeto calculadora;

//4)a chama as funções do objeto calculadora;
console.log(calculadora.soma(192038, 112003))
console.log(calculadora.subtracao(29380, 12809))
console.log(calculadora.multiplicacao(7, 23))
console.log(calculadora.divisao(48, 3))
//4)c chama metodo media da calculadora;
console.log(calculadora.media([7.5, 8.5, 3.5, 6]));
