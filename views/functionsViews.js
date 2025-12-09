import * as Atleta from "../control/atletasControl.js";

// Elementos do DOM
const selectOpcao = document.getElementById("selectOpcao");
const inCpfEditar = document.getElementById("inCpfEditar");
const inNome = document.getElementById("inNome");
const inIdade = document.getElementById("inIdade");
const inCpf = document.getElementById("inCpf");
const inNacionalidade = document.getElementById("inNacionalidade");
const outSaida = document.getElementById("outSaida");
const btOk = document.getElementById("btOk");
const table = document.getElementById("table");

// Adicione também as divs
const divCpfPes = document.getElementById("divCpfPes");
const divNome = document.getElementById("divNome");
const divIdade = document.getElementById("divIdade");
const divCpf = document.getElementById("divCpf");
const divNacionalidade = document.getElementById("divNacionalidade");

// Event Listeners
if (selectOpcao) {
    selectOpcao.addEventListener("change", verificarOpcao);
}
if (btOk) {
    btOk.addEventListener("click", executarFuncaoAtleta);
}

// Inicializar quando a página atleta estiver ativa
document.addEventListener('DOMContentLoaded', function () {
    // Verificar se estamos na página atleta
    const paginaAtleta = document.getElementById('atleta');
    if (paginaAtleta && paginaAtleta.classList.contains('ativa')) {
        verificarOpcao();
    }
});

function verificarOpcao() {
    console.log("verificarOpcao chamado, valor:", selectOpcao.value);
    
    // Primeiro, esconder TODOS os campos
    const todosCampos = [divCpfPes, divNome, divIdade, divCpf, divNacionalidade];
    todosCampos.forEach(campo => {
        if (campo) {
            campo.style.display = 'none';
            console.log("Escondendo:", campo.id);
        }
    });
    
    // Agora mostrar os campos necessários
    switch (selectOpcao.value) {
        case "cadastrar-atleta":
            console.log("Mostrando campos para cadastrar");
            mostrarCampo(divNome);
            mostrarCampo(divIdade);
            mostrarCampo(divCpf);
            mostrarCampo(divNacionalidade);
            break;
            
        case "editar-atleta":
            console.log("Mostrando campos para editar");
            mostrarCampo(divCpfPes);
            mostrarCampo(divNome);
            mostrarCampo(divIdade);
            mostrarCampo(divCpf);
            mostrarCampo(divNacionalidade);
            break;
            
        case "excluir-atleta":
            console.log("Mostrando campos para excluir");
            mostrarCampo(divCpfPes);
            break;
            
        case "listar-atletas":
            console.log("Listar atletas - sem campos extras");
            // Nenhum campo adicional
            break;
    }
}

function mostrarCampo(elemento) {
    if (elemento) {
        elemento.style.display = 'block';
        console.log("Mostrando:", elemento.id);
    }
}

// ... resto das suas funções (executarFuncaoAtleta, etc.)