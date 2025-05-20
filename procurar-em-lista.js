const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10 , 8, 7.5, 9];

const lista = [alunos, medias];

function procura(aluno){
    if (alunos.includes(aluno)) {
        let indexAluno = alunos.indexOf(aluno);
        console.log(medias[indexAluno]);
    } else {
        console.log(`${aluno} não encontrado. Favor checar o status na secretaria`)
    }
}
procura('Lucas');