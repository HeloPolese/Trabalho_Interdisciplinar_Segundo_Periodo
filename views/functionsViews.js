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