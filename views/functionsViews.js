import * as Atleta from "../control/atletasControl.js";

const selectOpcao = document.getElementById("selectOpcao");
const inCpfEditar = document.getElementById("inCpfEditar");
const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const divCpfPes = document.getElementById("divCpfPes");
const divNome = document.getElementById("divNome");
const divIdade = document.getElementById("divIdade");
const divCpf = document.getElementById("divCpf");
const outSaida = document.getElementById("outSaida");
const btOk = document.getElementById("btOk");
const table = document.getElementById("table");
const divNacionalidade = document.getElementById("divNacionalidade");
const inNacionalidade = document.getElementById("inNacionalidade");

selectOpcao.addEventListener("change", verificarOpcao);

btOk.addEventListener("click", executarFuncaoAtleta);

document.addEventListener('DOMContentLoaded', function () {
    verificarOpcao();
});

function verificarOpcao() {
    divCpfPes.style.display = "none";
    divNome.style.display = "none";
    divIdade.style.display = "none";
    divCpf.style.display = "none";
    divNacionalidade.style.display = "none";

    switch (selectOpcao.value) {
        case "cadastrar-atleta":
            divNome.style.display = "block";
            divIdade.style.display = "block";
            divCpf.style.display = "block";
            divNacionalidade.style.display = "block";
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inCpfEditar.value = "";
            inNacionalidade.value = "";
            outSaida.textContent = "";
            table.textContent = "";
            inNome.focus();
            break;
        case "editar-atleta":
            divCpfPes.style.display = "block";
            divNome.style.display = "block";
            divIdade.style.display = "block";
            divCpf.style.display = "block";
            divNacionalidade.style.display = "none";
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inCpfEditar.value = "";
            inNacionalidade.value = "";
            outSaida.textContent = "";
            table.textContent = "";
            inCpfEditar.focus();
            break;
        case "excluir-atleta":
            divCpfPes.style.display = "block";
            inNome.value = "";
            inIdade.value = "";
            inCpf.value = "";
            inCpfEditar.value = "";
            outSaida.textContent = "";
            inNacionalidade.value = "";
            table.textContent = "";
            inCpfEditar.focus();
            break;
        case "listar-atletas":
            // Nenhum campo adicional necessário
            outSaida.textContent = "";
            table.textContent = "";
            btOk.focus();
            break;
    }
}

function executarFuncaoAtleta() {

    let opcao = selectOpcao.value;
    outSaida.textContent = "";
    table.textContent = "";

    switch (opcao) {
        case "cadastrar-atleta":
            if (inNome.value == "" || inIdade.value == "" || inCpf.value == "" || !isNaN(inNome.value) || inNacionalidade.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, preencha todos os campos com valor valido.";
                inNome.focus();
            } else if (inIdade.value <= 0 || inIdade.value > 100) {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, insira uma idade válida.";
                inIdade.focus();
            } else {
                if (Atleta.cadastrarAtleta(inNome.value, inIdade.value, inCpf.value, inNacionalidade.value)) {
                    outSaida.style.color = "blue";
                    outSaida.textContent = "Cadastrado com sucesso!";
                }
                else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Erro! Atleta já cadastrado.";
                }
            }
            break;
        case "editar-atleta":
            if (inCpfEditar.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, preencha todos os campos.";
                inCpfEditar.focus();
            } else if (inIdade.value > 100) {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, insira uma idade válida.";
                inIdade.focus();
            }
            else {
                if (Atleta.editarAtleta(inCpfEditar.value, inNome.value, inIdade.value, inCpf.value, inNacionalidade.value)) {
                    outSaida.style.color = "blue";
                    outSaida.textContent = "Editado com sucesso!";
                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Erro!";
                }
            }
            break;
        case "excluir-atleta":
            if (inCpfEditar.value == "") {
                outSaida.style.color = "red";
                outSaida.textContent = "Por favor, preencha o campo CPF.";
                inCpfEditar.focus();
            } else {
                if (Atleta.excluirAtleta(inCpfEditar.value)) {
                    outSaida.style.color = "blue";
                    outSaida.textContent = "Excluído com sucesso!";
                } else {
                    outSaida.style.color = "red";
                    outSaida.textContent = "Erro! Atleta não encontrado.";
                }
            }
            break;
        case "listar-atletas":
            let tabelaGerada = Atleta.listarAtletas();
            if (tabelaGerada != undefined) {
                table.innerHTML = "";
                table.appendChild(tabelaGerada);
            } else {
                outSaida.style.color = "red";
                outSaida.textContent = "Nenhum atleta cadastrado.";
            }
            break;
    }
}

//--------------------- Funções de Competição View ---------------------//
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
const divTableCorrida = document.getElementById("divTableCorrida");

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
    divTableCorrida.style.display = "none";

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
            divTableCorrida.style.display = "block";
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
            divTableCorrida.style.display = "block";
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
            divTableCorrida.style.display = "block";

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
            divTableCorrida.style.display = "block";
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
            divTableCorrida.style.display = "block";
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
            divTableCorrida.style.display = "block";
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
                inBuscarId.value = "";
            }else if(isNaN(inBuscarId.value) && inBuscarId.value <= competicaoController.listaCompeticoes.length){
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "ID inválido! é maior que o número de competições cadastradas, ou não é um número.";
                inBuscarId.focus();
                inBuscarId.value = "";
            }else if(isNaN(inCpfAtleta.value) && inCpfAtleta.value.length != 11 && competicaoController.listaCompeticoes[inBuscarId.value].lstCompetidores.findIndex(c => c.refAtleta == inCpfAtleta.value) != -1){
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "CPF inválido! verifique se o CPF é numérico, tem 11 dígitos ou se o atleta já está cadastrado na competição.";
                inCpfAtleta.focus();
                inCpfAtleta.value = "";
            }else if (competicaoController.adicionarAtletaAcompeticao(inBuscarId.value, inCpfAtleta.value)) {
            
                outSaidaCorrida.style.color = "green";
                outSaidaCorrida.textContent = "Adicionado com sucesso!";
            }else{
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Erro ao adicionar atleta! verifique os dados inseridos.";
            }
            break;
        case "listar-competidores-competicao":
            if (inBuscarId.value == "") {
                outSaidaCorrida.style.color = "red";
                outSaidaCorrida.textContent = "Campos vazios!";
            } else if (competicaoController.listarCompetidores(inBuscarId.value)) {
                outSaidaCorrida.textContent = "";
                tableCorrida.textContent = "";
                tableCorrida.appendChild(competicaoController.listarCompetidores(inBuscarId.value));
            }
            break;
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