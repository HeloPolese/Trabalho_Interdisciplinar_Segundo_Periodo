//atletas------------>
const selectOpcao = document.getElementById("selectOpcao");
const inCpfEditar = document.getElementById("inCpfEditar");
const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const divCpfPes = document.getElementById("divCpfPes");
const divNome = document.getElementById("divNome");
const divIdade = document.getElementById("divIdade");
const divCpf = document.getElementById("divCpf");

selectOpcao.addEventListener("change", verificarOpcao);

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcao();
});

function verificarOpcao() {
    divCpfPes.style.display = "none";
    divNome.style.display = "none";
    divIdade.style.display = "none";
    divCpf.style.display = "none";

    switch (selectOpcao.value) {
        case "cadastrar-atleta":
            divCpfPes.style.display = "block";
            divNome.style.display = "block";
            divIdade.style.display = "block";
            divCpf.style.display = "block";
            inNome.focus();
            break;
        case "editar-atleta":
            divCpfPes.style.display = "block";
            divNome.style.display = "block";
            divIdade.style.display = "block";
            divCpf.style.display = "block";
            inNome.focus();
            break;
        case "excluir-atleta":
            divCpfPes.style.display = "block";
            divNome.style.display = "none";
            divIdade.style.display = "none";
            divCpf.style.display = "none";
            inNome.focus();
            break;
        case "listar-atletas":
            // Nenhum campo adicional necessário
            break;
    }
}
