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
        if (b !== 0) {
            return a / b;
        } else {
            return "Não é possível realizar essa divisão."
        }
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
console.log(calculadora.divisao(1, 2))
//4)c chama metodo media da calculadora;
console.log(calculadora.media([7.5, 8.5, 5, 6]));
