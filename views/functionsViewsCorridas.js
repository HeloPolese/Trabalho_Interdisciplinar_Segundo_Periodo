import * as competicaoController from "../control/competicaoControl.js";

// Elementos do DOM
const selectOpcaoCorrida = document.getElementById("selectOpcaoCorrida");
const btOkCorrida = document.getElementById("btOkCorrida");
const outSaidaCorrida = document.getElementById("outSaidaCorrida");
const tableCorrida = document.getElementById("tableCorrida");

// Obter TODOS os elementos de campos
const divBuscarId = document.getElementById("divBuscarId");
const divSelection = document.getElementById("divSelection");
const divNomeCorrida = document.getElementById("divNomeCorrida");
const divCpfAtletas = document.getElementById("divCpfAtletas");
const divData = document.getElementById("divData");
const divLocal = document.getElementById("divLocal");
const divDistancia = document.getElementById("divDistancia");
const divLimiteAtletas = document.getElementById("divLimiteAtletas");
const divPreco = document.getElementById("divPreco");
const divLimiteTempo = document.getElementById("divLimiteTempo");
const divAltimetria = document.getElementById("divAltimetria");
const divGrauDificuldade = document.getElementById("divGrauDificuldade");
const divQtdCheckPoint = document.getElementById("divQtdCheckPoint");

// Event Listeners
if (selectOpcaoCorrida) {
    selectOpcaoCorrida.addEventListener("change", verificarOpcaoCorridas);
}
if (btOkCorrida) {
    btOkCorrida.addEventListener("click", executarFuncaoCorrida);
}

// Inicializar quando a página competição estiver ativa
document.addEventListener('DOMContentLoaded', function () {
    // Verificar se estamos na página competição
    const paginaCompeticao = document.getElementById('competicao');
    if (paginaCompeticao && paginaCompeticao.classList.contains('ativa')) {
        verificarOpcaoCorridas();
    }
});

function verificarOpcaoCorridas() {
    console.log("verificarOpcaoCorridas chamado, valor:", selectOpcaoCorrida.value);
    
    // Lista de TODOS os campos
    const todosCampos = [
        divBuscarId, divSelection, divNomeCorrida, divCpfAtletas,
        divData, divLocal, divDistancia, divLimiteAtletas,
        divPreco, divLimiteTempo, divAltimetria, divGrauDificuldade, divQtdCheckPoint
    ];
    
    // 1. Esconder TODOS os campos primeiro
    todosCampos.forEach(campo => {
        if (campo) {
            campo.style.display = 'none';
            console.log("Escondendo:", campo.id);
        }
    });
    
    // 2. Mostrar os campos conforme a opção
    switch (selectOpcaoCorrida.value) {
        case "cadastrar-competicao":
            console.log("Mostrando campos para cadastrar competição");
            mostrarCampoCorrida(divSelection);
            mostrarCampoCorrida(divNomeCorrida);
            mostrarCampoCorrida(divData);
            mostrarCampoCorrida(divLocal);
            mostrarCampoCorrida(divDistancia);
            mostrarCampoCorrida(divLimiteAtletas);
            mostrarCampoCorrida(divPreco);
            mostrarCampoCorrida(divLimiteTempo);
            break;
            
        case "editar-competicao":
            console.log("Mostrando campos para editar competição");
            mostrarCampoCorrida(divBuscarId);
            mostrarCampoCorrida(divSelection);
            mostrarCampoCorrida(divNomeCorrida);
            mostrarCampoCorrida(divData);
            mostrarCampoCorrida(divLocal);
            mostrarCampoCorrida(divDistancia);
            mostrarCampoCorrida(divLimiteAtletas);
            mostrarCampoCorrida(divPreco);
            mostrarCampoCorrida(divLimiteTempo);
            break;
            
        case "excluir-competicao":
            console.log("Mostrando campos para excluir competição");
            mostrarCampoCorrida(divBuscarId);
            break;
            
        case "adicionar-atleta-competicao":
            console.log("Mostrando campos para adicionar atleta");
            mostrarCampoCorrida(divBuscarId);
            mostrarCampoCorrida(divCpfAtletas);
            break;
            
        case "listar-competidores-competicao":
            console.log("Mostrando campos para listar competidores");
            mostrarCampoCorrida(divBuscarId);
            break;
            
        case "relatorio-competicao":
            console.log("Mostrando campos para relatório");
            mostrarCampoCorrida(divBuscarId);
            break;
            
        case "relatorio-todas-competicoes":
            console.log("Relatório todas - sem campos extras");
            break;
            
        case "excluir-competidor-competicao":
            console.log("Mostrando campos para excluir competidor");
            mostrarCampoCorrida(divBuscarId);
            mostrarCampoCorrida(divCpfAtletas);
            break;
    }
}

function mostrarCampoCorrida(elemento) {
    if (elemento) {
        elemento.style.display = 'block';
        console.log("Mostrando:", elemento.id);
    }
}

// ... resto das suas funções (executarFuncaoCorrida, etc.)