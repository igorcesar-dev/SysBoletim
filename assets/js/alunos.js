const alunos = [{
    nome: "Igor César da Silva",
    matricula: 1,
    senha: "1",
    telefone: 991711242,
    curso: "Operador de Computador",
},
{
    nome: "Ilana Bruna Lima Pereira",
    matricula: 1619068,
    senha: "Prepara_12",
    telefone: 9919994944,
    curso: "Designer Gráfico"

}];


function exibirAluno(){
    var containerAluno = document.getElementById('aluno');
    alunos.map((value) => {
        containerAluno.innerHTML +=  `
        <div class="box-right-head">
            <p class="name-student">Nome: `+value.nome+`</p>
            <p class="code-student">Matrícula: `+value.matricula+`</p>
            <p class="phone-student">Telefone: `+value.telefone+`</p>
        </div>
        `
    })
}
exibirAluno();


function exibirAvaliação(){
    var containerAvaliacao = document.getElementById('avaliacao');
    alunos.map((value) => {
        containerAvaliacao.innerHTML += `
        <div class="box-right-contents">
            <p class="exam-student border">Avaliações</p>
            <p class="exam-date border">Data da Avaliação</p>
            <p class="exam-note border">Notas</p>
        </div>
        `
    })
}