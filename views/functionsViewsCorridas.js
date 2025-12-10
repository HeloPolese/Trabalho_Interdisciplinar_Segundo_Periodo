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
const btOkCorrida = document.getElementById("btOkCorrida");
const outSaidaCorrida = document.getElementById("outSaidaCorrida");
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
const tableCorrida = document.getElementById("tableCorrida");

selectModalidade.addEventListener("change", verificarModalidade);
selectOpcaoCorrida.addEventListener("change", verificarOpcaoCorridas);

btOkCorrida.addEventListener("click", executarFuncaoCorrida);

btOkCorrida.addEventListener("click", () => {
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
        case "adicionar-atleta-competicao":
            divCpfAtletas.style.display = "block";
            divBuscarId.style.display = "block";
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
            divBuscarId.style.display = "block";
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
            divBuscarId.style.display = "block";
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
            divBuscarId.style.display = "block";
            divCpfAtletas.style.display = "block";
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
        case "listar-competidores-competicao":
            divBuscarId.style.display = "block";
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
    outSaidaCorrida.textContent = "";
    tableCorrida.textContent = "";

    switch (opcao) {
        case "cadastrar-competicao":
            if (inNomeCorrida.value == "" || inDataCorrida.value == "" || inLocal.value == "" || inDistancia.value == "" || inLimiteParti.value == "" || inPreco.value == "" || inLimiteTempo.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Por favor, preencha todos os campos para cadastrar a competição.";
                inNomeCorrida.focus();
            }
            else if (competicaoController.cadastrarCompeticao(selectModalidade.value, inNomeCorrida.value, inDataCorrida.value, inLocal.value, inDistancia.value, parseInt(inLimiteParti.value), parseFloat(inPreco.value), parseInt(inLimiteTempo.value), inCheckPoint.value, inGrauDificuldade.value, inAltimetria.value)) {
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Competição cadastrada com sucesso!";
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
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Erro.";
            }
            break;
        case "editar-competicao":
            if (inBuscarId.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Por favor, preencha todos os campos para editar a competição.";
                inNomeCorrida.focus();
            }
            else if (competicaoController.editarCompeticao(inBuscarId.value, inNomeCorrida.value, inDataCorrida.value, inLocal.value, inDistancia.value, inLimiteParti.value, inPreco.value, inLimiteTempo.value, inCheckPoint.value, inGrauDificuldade.value, inAltimetria.value)) {
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Competição editada com sucesso!";
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
            break;
        case "excluir-competicao":
            if (inBuscarId.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Por favor, insira o ID da competição para excluir.";
                inBuscarId.focus();
            }
            else if (competicaoController.excluirCompeticao(inBuscarId.value)) {
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Competição excluída com sucesso!";
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
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Erro ao excluir a competição. Verifique o ID e tente novamente.";
            }
            break;
        case "adicionar-atleta-competicao":
            if (inBuscarId.value == "" || inCpfAtleta.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Por favor, preencha todos os campos.";
                inBuscarId.focus();
            }
            else if (competicaoController.adicionarAtletaAcompeticao(inBuscarId.value, inCpfAtleta.value)) {
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Adicionado com sucesso!";
            }
            else {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Erro!";
                inBuscarId.focus();
            }
            break;
        case "listar-competidores-competicao":
            if (inBuscarId.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Campos vazios!";
            } else if (competicaoController.listarCompetidores(inBuscarId.value)) {
                outSaidaCorrida.textContent = "";
                tableCorrida.textContent = "";
                outSaidaCorrida.textContent = competicaoController.listarCompetidores(inBuscarId.value);
            }
        case "relatorio-competicao":
            if (inBuscarId.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Campos vazios!";
            } else {
                let tabela = competicaoController.relatorioCompeticao(inBuscarId.value);
                if (tabela) {
                    tableCorrida.innerHTML = "";
                    tableCorrida.appendChild(tabela);
                } else {
                    outSaidaCorrida.style.color = "red";
                    outSaidaCorrida.textContent = "Competição não encontrada!";
                }
            }
            break;
        case "relatorio-todas-competicoes":
            let tabelaGerada = competicaoController.listarCompeticoes();
            if (tabelaGerada != undefined) {
                tableCorrida.innerHTML = "";
                outSaidaCorrida.textContent = "";
                tableCorrida.textContent = "";
                tableCorrida.appendChild(tabelaGerada);
            }
            break;
        case "excluir-competidor-competicao":
            if (inBuscarId.value == "" || inCpfAtleta.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Campos vazios!";
            } else if (competicaoController.excluirCompetidor(inBuscarId.value, inCpfAtleta.value)) {
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Excluido com sucesso!";
            }
            else {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Valor Inválido!";
            }
    }
}
console.log(competicaoController.listaCompeticoes);