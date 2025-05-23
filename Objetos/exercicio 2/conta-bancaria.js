//cria o objeto contaBancaria;
const contaBancaria = {
    titular: 'Lucas Monteiro e Costa',
    saldo: 15487.87,
    depositar: function (valor) {
        return this.saldo += valor;
    },
    sacar: function (valor) {
        return this.saldo -= valor
    }
}
//cria o objeto cliente;
const cliente = {
    nome: 'Lucas Monteiro e Costa',
    conta: contaBancaria,
}
//cria funcao que exibe o saldo de um cliente
function mostrarSaldo(objeto) {
    console.log(`Nome: ${objeto.nome}, Saldo: R$ ${objeto.conta.saldo}`);
}

mostrarSaldo(cliente);

cliente.conta.depositar(112.13);

mostrarSaldo(cliente);

cliente.conta.sacar(10000);

mostrarSaldo(cliente);