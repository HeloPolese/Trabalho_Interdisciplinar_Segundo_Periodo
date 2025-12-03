const inNomeCorrida = document.getElementById("inNomeCorrida");
const inCpfAtleta = document.getElementById("inCpfAtleta");
const inDataCorrida = document.getElementById("inDataCorrida");
const inLocal = document.getElementById("inLocal");
const inDistancia = document.getElementById("inDistancia");
const inLimiteParti = document.getElementById("inLimiteParti");
const inPreco = document.getElementById("inPreco");
const inLimiteTempo = document.getElementById("inLimiteTempo");
const btOk = document.getElementById("btOk");
const divNomeCorrida = document.getElementById("divNomeCorrida");
const divCpfAtletas = document.getElementById("divCpfAtletas");
const divData = document.getElementById("divData");
const divLocal = document.getElementById("divLocal");
const divDistancia = document.getElementById("divDistancia");
const divLimiteAtletas = document.getElementById("divLimiteAtletas");
const divPreco = document.getElementById("divPreco");
const divLimiteTempo = document.getElementById("divLimiteTempo");
const selectOpcaoCorrida = document.getElementById("selectOpcaoCorrida");

selectOpcaoCorrida.addEventListener("change", verificarOpcaoCorridas);

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcaoCorridas();
});

function verificarOpcaoCorridas() {
    divNomeCorrida.style.display = "none";
    divCpfAtletas.style.display = "none";
    divData.style.display = "none";
    divLocal.style.display = "none";
    divDistancia.style.display = "none";
    divLimiteAtletas.style.display = "none";
    divPreco.style.display = "none";
    divLimiteTempo.style.display = "none";

    switch (selectOpcaoCorrida.value) {
        case "cadastrar-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "none";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "block";
            divLimiteAtletas.style.display = "block";
            divPreco.style.display = "block";
            divLimiteTempo.style.display = "block";
            inNomeCor.focus();
            break;
        case "editar-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "none";
            divData.style.display = "block";
            divLocal.style.display = "none";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            inNomeCor.focus();
            break;
        case "excluir-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "none";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            inNomeCor.focus();
            break;
        case "listar-competicao":
            divNomeCorrida.style.display = "none";
            divCpfAtletas.style.display = "none";
            divData.style.display = "none";
            divLocal.style.display = "none";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            break;
        case "adicionar-atleta-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            inNomeCor.focus();
            break;
        case "listar-competidores-corrida":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "none";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            break;
        case "relatorio-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "none";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            break;
        case "relatorio-todas-competicoes":
            divNomeCorrida.style.display = "none";
            divCpfAtletas.style.display = "none";
            divData.style.display = "none";
            divLocal.style.display = "none";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
            break;
        case "excluir-competidor-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "none";
            divDistancia.style.display = "none";
            divLimiteAtletas.style.display = "none";
            divPreco.style.display = "none";
            divLimiteTempo.style.display = "none";
    }
} 