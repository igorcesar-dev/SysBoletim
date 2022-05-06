function logar() {
    function retornaAluno(value) {
        var user = document.getElementById('usuario');
        var pass = document.getElementById('senha');
        if (value.matricula == user.value && value.senha == pass.value) {
            localStorage.setItem("acesso", true);
            window.location.href = "index.html";
            return value;
        };
    };

    var filtraAluno = alunos.filter(retornaAluno);
    filtraAluno.forEach(aluno => {
        console.log(aluno);
    });
}

/* PEGA O LOGIN DO USUARIO */
var form = document.getElementById('formulario');
var campo = document.getElementById('usuario');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    alert(campo.value);
    
    // impede o envio do form
    e.preventDefault();
});