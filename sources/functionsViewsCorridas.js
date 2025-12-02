const inNomeCor = document.getElementById("inNomeCor");
const inDataCor = document.getElementById("inDataCor");
const inLocal = document.getElementById("inLocal");
const inDistancia = document.getElementById("inDistancia");
const inLimiteParti = document.getElementById("inLimiteParti");
const inPreco = document.getElementById("inPreco");
const inLimiteTempo = document.getElementById("inLimiteTempo");
const btOk = document.getElementById("btOk");
const selectOpcaoCorrida = document.getElementById("selectOpcaoCorrida");

selectOpcaoCorrida.addEventListener("change", verificarOpcaoCorridas);

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcaoCorridas();
});

function verificarOpcaoCorridas() {
    switch (selectOpcaoCorrida.value) {
        case "cadastrar-corrida":
            inNomeCor.disabled = false;
            inDataCor.disabled = false;
            inLocal.disabled = false;
            inDistancia.disabled = false;
            inLimiteParti.disabled = false;
            inPreco.disabled = false;
            inLimiteTempo.disabled = false;
            inNomeCor.style.display = "block";
            inDataCor.style.display = "block";
            inLocal.style.display = "block";
            inDistancia.style.display = "block";
            inLimiteParti.style.display = "block";
            inPreco.style.display = "block";
            inLimiteTempo.style.display = "block";
            inNomeCor.value = "";
            inDataCor.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            inNomeCor.focus();
            break;
        case "editar-corrida":
            inNomeCor.disabled = false;
            inDataCor.disabled = false;
            inLocal.disabled = true;
            inDistancia.disabled = true;
            inLimiteParti.disabled = true;
            inPreco.disabled = true;
            inLimiteTempo.disabled = true;
            inNomeCor.style.display = "block";
            inDataCor.style.display = "block";
            inLocal.style.display = "block";
            inDistancia.style.display = "none";
            inLimiteParti.style.display = "none";
            inPreco.style.display = "none";
            inLimiteTempo.style.display = "none";
            inNomeCor.value = "";
            inDataCor.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            inNomeCor.focus();
            break;
            case "excluir-corrida":
            inNomeCor.disabled = false;
            inDataCor.disabled = false;
            inLocal.disabled = true;
            inDistancia.disabled = true;
            inLimiteParti.disabled = true;
            inPreco.disabled = true;
            inLimiteTempo.disabled = true;
            inNomeCor.style.display = "block";
            inDataCor.style.display = "block";
            inLocal.style.display = "block";
            inDistancia.style.display = "none";
            inLimiteParti.style.display = "none";
            inPreco.style.display = "none";
            inLimiteTempo.style.display = "none";
            inNomeCor.value = "";
            inDataCor.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            inNomeCor.focus();
            break;
            case "listar-corrida":
            inNomeCor.disabled = true;
            inDataCor.disabled = true;
            inLocal.disabled = true;
            inDistancia.disabled = true;
            inLimiteParti.disabled = true;
            inPreco.disabled = true;
            inLimiteTempo.disabled = true;
            inNomeCor.style.display = "none";
            inDataCor.style.display = "none";
            inLocal.style.display = "none";
            inDistancia.style.display = "none";
            inLimiteParti.style.display = "none";
            inPreco.style.display = "none";
            inLimiteTempo.style.display = "none";
            inNomeCor.value = "";
            inDataCor.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
            default:
            inNomeCor.style.display = "none";
            inDataCor.style.display = "none";
            inLocal.style.display = "none";
            inDistancia.style.display = "none";
            inLimiteParti.style.display = "none";
            inPreco.style.display = "none";
            inLimiteTempo.style.display = "none";
    }} 