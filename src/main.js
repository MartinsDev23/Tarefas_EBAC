const alunos = [
    {nome: 'Daniel', nota: 9 },
    {nome: 'Diene', nota: 10 },
    {nome: 'Marcos', nota: 3 },
    {nome: 'Lucas', nota: 6 },
    {nome: 'Rubens', nota: 5 },
    {nome: 'Rafael', nota: 2 },
]

const alunosAprovados = alunos.filter(function(aluno){
    return aluno.nota >= 6;
});

console.log(alunosAprovados);