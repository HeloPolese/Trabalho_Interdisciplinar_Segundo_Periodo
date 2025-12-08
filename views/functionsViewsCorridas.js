import * as competicaoController from "../control/competicaoControl.js";

const inNomeCorrida = document.getElementById("inNomeCorrida");
const inCpfAtleta = document.getElementById("inCpfAtleta");
const inDataCorrida = document.getElementById("inDataCorrida");
const inLocal = document.getElementById("inLocal");
const inDistancia = document.getElementById("inDistancia");
const inLimiteParti = document.getElementById("inLimiteParti");
const inPreco = document.getElementById("inPreco");
const inCheckPoint = document.getElementById("inCheckPoint");
const inGrauDificuldade = document.getElementById("inGrauDificuldade");
const divAltimetria = document.getElementById("divAltimetria");
const divGrauDificuldade = document.getElementById("divGrauDificuldade");
const divBuscarId = document.getElementById("divBuscarId");
const inAltimetria = document.getElementById("inAltimetria");
const inLimiteTempo = document.getElementById("inLimiteTempo");
const inBuscarId = document.getElementById("inBuscarId");
const btOk = document.getElementById("btOk");
const outSaida = document.getElementById("outSaida");
const divNomeCorrida = document.getElementById("divNomeCorrida");
const divCpfAtletas = document.getElementById("divCpfAtletas");
const divQtdCheckPoint = document.getElementById("divQtdCheckPoint");
const divData = document.getElementById("divData");
const divLocal = document.getElementById("divLocal");
const divDistancia = document.getElementById("divDistancia");
const divLimiteAtletas = document.getElementById("divLimiteAtletas");
const divPreco = document.getElementById("divPreco");
const divLimiteTempo = document.getElementById("divLimiteTempo");
const selectOpcaoCorrida = document.getElementById("selectOpcaoCorrida");
const divSelection = document.getElementById("divSelection");
const selectModalidade = document.getElementById("selectModalidade");
const table = document.getElementById("table");

selectModalidade.addEventListener("change", verificarModalidade);
selectOpcaoCorrida.addEventListener("change", verificarOpcaoCorridas);

btOk.addEventListener("click", executarFuncaoCorrida);

btOk.addEventListener("click", () => {
  selectModalidade.value = "Selecione-Uma-Opção";
});

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcaoCorridas();
    verificarModalidade();
});

function verificarOpcaoCorridas() {
    divNomeCorrida.style.display = "none";
    divBuscarId.style.display = "none";
    divSelection.style.display = "none";
    divCpfAtletas.style.display = "none";
    divData.style.display = "none";
    divLocal.style.display = "none";
    divDistancia.style.display = "none";
    divLimiteAtletas.style.display = "none";
    divPreco.style.display = "none";
    divAltimetria.style.display = "none";
    divGrauDificuldade.style.display = "none";
    divQtdCheckPoint.style.display = "none";
    divLimiteTempo.style.display = "none";

    switch (selectOpcaoCorrida.value) {
        case "cadastrar-competicao":
            divSelection.style.display = "block";
            divNomeCorrida.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "block";
            divLimiteAtletas.style.display = "block";
            divPreco.style.display = "block";
            divLimiteTempo.style.display = "block";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "editar-competicao":
            divBuscarId.style.display = "block";
            divSelection.style.display = "block";
            divNomeCorrida.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divDistancia.style.display = "block";
            divLimiteAtletas.style.display = "block";
            divPreco.style.display = "block";
            divLimiteTempo.style.display = "block";
            inNomeCorrida.value = "";
            inBuscarId.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "excluir-competicao":
            divBuscarId.style.display = "block";
            inBuscarId.value = "";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "listar-competicao":
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "adicionar-atleta-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            divSelection.style.display = "block";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "listar-competidores-corrida":
            divNomeCorrida.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "relatorio-competicao":
            divNomeCorrida.style.display = "block";
            divData.style.display = "block";
            divLocal.style.display = "block";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "relatorio-todas-competicoes":
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
            break;
        case "excluir-competidor-competicao":
            divNomeCorrida.style.display = "block";
            divCpfAtletas.style.display = "block";
            divData.style.display = "block";
            inNomeCorrida.value = "";
            inDataCorrida.value = "";
            inLocal.value = "";
            inDistancia.value = "";
            inCheckPoint.value = "";
            inGrauDificuldade.value = "";
            inAltimetria.value = "";
            inLimiteParti.value = "";
            inPreco.value = "";
            inLimiteTempo.value = "";
    }
}

function verificarModalidade() {
    divGrauDificuldade.style.display = "none";
    divAltimetria.style.display = "none";
    divQtdCheckPoint.style.display = "none";

    switch (selectModalidade.value) {
        case "MARATONA":
            divAltimetria.style.display = "block";
            divGrauDificuldade.style.display = "none";
            divQtdCheckPoint.style.display = "none";
            break;
        case "TRILHA":
            divAltimetria.style.display = "none";
            divGrauDificuldade.style.display = "block";
            divQtdCheckPoint.style.display = "block";
            break;
    }
}
function executarFuncaoCorrida() {

    let opcao = selectOpcaoCorrida.value;
    outSaida.textContent = "";
    table.textContent = "";

    switch (opcao) {
        case "cadastrar-competicao":
            if (inNomeCorrida.value == "" || inDataCorrida.value == "" || inLocal.value == "" || inDistancia.value == "" || inLimiteParti.value == "" || inPreco.value == "" || inLimiteTempo.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, preencha todos os campos para cadastrar a competição.";
                inNomeCorrida.focus();
            }
            else if (competicaoController.cadastrarCompeticao(selectModalidade.value, inNomeCorrida.value, inDataCorrida.value, inLocal.value, inDistancia.value, parseInt(inLimiteParti.value), parseFloat(inPreco.value), parseInt(inLimiteTempo.value), inCheckPoint.value, inGrauDificuldade.value, inAltimetria.value)) {
                outSaida.style.color = "green";
                outSaida.textContent = "Competição cadastrada com sucesso!";
                inNomeCorrida.value = "";
                inDataCorrida.value = "";
                inLocal.value = "";
                inDistancia.value = "";
                inCheckPoint.value = "";
                inGrauDificuldade.value = "";
                inAltimetria.value = "";
                inLimiteParti.value = "";
                inPreco.value = "";
                inLimiteTempo.value = "";
            }
            else {
                outSaida.style.color = "red";
                outSaida.textContent = "Erro.";
            }
            break;
        case "editar-competicao":
            if (inBuscarId.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, preencha todos os campos para editar a competição.";
                inNomeCorrida.focus();
            }
            else if (competicaoController.editarCompeticao(inBuscarId.value, inNomeCorrida.value, inDataCorrida.value, inLocal.value, inDistancia.value, inLimiteParti.value, inPreco.value, inLimiteTempo.value, inCheckPoint.value, inGrauDificuldade.value, inAltimetria.value)) {
                outSaida.style.color = "green";
                outSaida.textContent = "Competição editada com sucesso!";
            }
            break;
            case "excluir-competicao":
            if (inBuscarId.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, insira o ID da competição para excluir.";
                inBuscarId.focus();
            }
            else if (competicaoController.excluirCompeticao(inBuscarId.value)){
                outSaida.style.color = "green";
                outSaida.textContent = "Competição excluída com sucesso!";
            }
            else {
                outSaida.style.color = "red";
                outSaida.textContent = "Erro ao excluir a competição. Verifique o ID e tente novamente.";
            }
            break;
    }
}

console.log(competicaoController.listaCompeticoes);