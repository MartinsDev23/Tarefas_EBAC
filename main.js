function Pessoa (nome) {
    this.nome = nome;
}

const pessoa1 = new Pessoa ('Gian');
console.log(pessoa1)

/////////////////////////////////////////////////////////////////

function Funcionario (nome, cargo, salario) {
    
    Pessoa.call(this, nome);

    this.cargo = cargo,
    this.salario = salario

}

function Professor (nome, salario) {

    Pessoa.call(this, nome);

    this.salario = salario;
}

/////////////////////////////////////////////////////////////////

const funcionario1 = new Funcionario ('Daniel', 'aluno', 1500);
console.log(funcionario1);

const funcionario2 = new Professor ('Gian', 10000);
console.log(funcionario2);

const funcionario3 = new Professor ('Gustavo Guanabara', 10000);
console.log(funcionario3);