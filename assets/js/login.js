function logar() {
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');

    if(usuario.value == "1619067" && senha.value == "Prepara_12"){
        localStorage.setItem("acesso", true);

        window.location.href = "index.html";

    } else {
        alert("Usuário inválido!")
    };
}