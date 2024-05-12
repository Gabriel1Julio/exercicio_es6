let alunos = [
    {nome: 'Gabriel', nota: 8},
    {nome: 'Alice', nota: 6},
    {nome: 'Yasmin', nota: 10},
    {nome: 'Gigi', nota: 4},
    {nome: 'Pedro', nota: 5}
]
    
const pesquisaAlunosAprovados = alunos.filter(function(item){
    return item.nota >= 6;
});

console.log(pesquisaAlunosAprovados);