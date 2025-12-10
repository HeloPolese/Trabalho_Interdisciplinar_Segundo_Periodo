import { Atleta } from "../model/atletas.js";

export var vetAtletas = [];

export function cadastrarAtleta(nome, idade, cpf, nacionalidade) {
    let objExiste = vetAtletas.find(obj => obj.cpf === cpf);

    if (objExiste === undefined) {
        if (nome != undefined && idade != undefined && idade > 0 && cpf.length == 11 && nacionalidade != "") {
            let id = vetAtletas.length + 1;
            var objAtleta = new Atleta(id, nome, idade, cpf, nacionalidade);
            vetAtletas.push(objAtleta);
            return true;
        }
    }
    return false;
}

export function editarAtleta(buscaCpf, novoNome, novaIdade, novoCpf, novaNacionalidade) {
    let buscaObj = vetAtletas.find(obj => obj.cpf == buscaCpf);
    let cpfRepetido = vetAtletas.find(obj => obj.cpf == novoCpf && obj.cpf != buscaCpf);

    if (cpfRepetido) {
        return false;
    }

    if (buscaObj != undefined) {
        buscaObj.nome = novoNome;
        buscaObj.idade = novaIdade;
        buscaObj.cpf = novoCpf;
        buscaObj.nacionalidade = novaNacionalidade;
        return true;
    }
    return false;
}

export function excluirAtleta(cpf) {
    let indiceAtleta = vetAtletas.findIndex(obj => obj.cpf == cpf);

    if (indiceAtleta != -1) {
        vetAtletas.splice(indiceAtleta, 1);
        return true;
    }
    return false;
}

export function listarAtletas() {
    if (vetAtletas.length > 0) {
        return gerarTabelaAtletas(vetAtletas);
    }
    return null;
}

export function gerarTabelaAtletas(vetAtletasFiltrados = vetAtletas) {
    if (vetAtletasFiltrados.length > 0) {
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");

        thead.appendChild(document.createElement("th")).textContent = "Nome";
        thead.appendChild(document.createElement("th")).textContent = "Idade";
        thead.appendChild(document.createElement("th")).textContent = "CPF";
        thead.appendChild(document.createElement("th")).textContent = "Nacionalidade";
        table.appendChild(thead);

        for (let lin = 0; lin < vetAtletasFiltrados.length; lin++) {
            let linha = document.createElement("tr");
            let tdNome = document.createElement("td");
            let tdIdade = document.createElement("td");
            let tdCPF = document.createElement("td");
            let tdNacionalidade = document.createElement("td");

            tdNome.textContent = vetAtletasFiltrados[lin].nome;
            tdIdade.textContent = vetAtletasFiltrados[lin].idade;
            tdCPF.textContent = vetAtletasFiltrados[lin].cpf;
            tdNacionalidade.textContent = vetAtletasFiltrados[lin].nacionalidade;

            linha.appendChild(tdNome);
            linha.appendChild(tdIdade);
            linha.appendChild(tdCPF);
            linha.appendChild(tdNacionalidade);

            tbody.appendChild(linha);
        }

        table.appendChild(tbody);
        return table;
    }
    return null;
}

export function buscarAtleta(cpf) {
    let atletaEncontrado = vetAtletas.find(obj => obj.cpf == cpf);
    return atletaEncontrado;
}
