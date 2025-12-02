//atletas------------>
const selectOpcao = document.getElementById("selectOpcao");
const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const btFiltrar = document.getElementById("btFiltrar");

selectOpcao.addEventListener("change", verificarOpcao);

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcao();
});

function verificarOpcao() {
    switch (selectOpcao.value) {
        case "cadastrar-atleta":
            inNome.disabled = false;
            inIdade.disabled = false;
            inCpf.disabled = false;
            inCpf.style.display = "block";
            inNome.style.display = "block";
            inIdade.style.display = "block";
            inNome.focus();
            break;
            case "editar-atleta":
            inNome.disabled = false;
            inIdade.disabled = false;
            inCpf.disabled = false;
            inCpf.style.display = "block";
            inNome.style.display = "block";
            inIdade.style.display = "block";
            inNome.focus();
            break;
            case "excluir-atleta":
            inNome.disabled = false;
            inIdade.disabled = true;
            inCpf.display = false;
            inCpf.style.display = "block";
            inNome.style.display = "block";
            inIdade.style.display = "none";
            break;        
            default:
            inNome.style.display = "none";
            inIdade.style.display = "none";
            inCpf.style.display = "none";
    }
}
