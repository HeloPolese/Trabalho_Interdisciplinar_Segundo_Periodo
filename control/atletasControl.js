import { Atleta } from "../atletas.js";

var vetAtletas = [];
let idAtletaCounter = 1;

export function cadastrarAtleta(nome, idade, cpf, nacionalidade = "Brasil") {
    let objExiste = vetAtletas.find(obj => obj.cpf === cpf);
    if (objExiste === undefined) {
        if (nome != undefined && idade != undefined && idade > 0 && cpf && cpf.length == 11) {
            let id = idAtletaCounter++;
            var objAtleta = new Atleta(id, nome, parseInt(idade), cpf, nacionalidade);
            vetAtletas.push(objAtleta);
            return true;
        }
    }
    return false;
}

export function editarAtleta(buscaCpf, novoNome, novaIdade, novoCpf, novaNacionalidade = "Brasil") {
    let buscaObj = vetAtletas.find(obj => obj.cpf == buscaCpf);
    
    if (!buscaObj) {
        return false;
    }
    
    // Verificar se novo CPF já existe (apenas se for diferente)
    if (novoCpf && novoCpf !== buscaCpf) {
        let cpfRepetido = vetAtletas.find(obj => obj.cpf == novoCpf);
        if (cpfRepetido) {
            return false;
        }
    }
    
    // Aplicar mudanças apenas se os valores forem válidos
    if (novoNome && novoNome !== "") {
        buscaObj.nome = novoNome;
    }
    
    if (novaIdade && novaIdade > 0) {
        buscaObj.idade = parseInt(novaIdade);
    }
    
    if (novoCpf && novoCpf.length === 11) {
        buscaObj.cpf = novoCpf;
    }
    
    if (novaNacionalidade && novaNacionalidade !== "") {
        buscaObj.nacionalidade = novaNacionalidade;
    }
    
    return true;
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

export function buscarAtleta(cpf) {
    let atletaEncontrado = vetAtletas.find(obj => obj.cpf == cpf);  
    return atletaEncontrado;
}

export function getVetAtletas() {
    return vetAtletas;
}

function gerarTabelaAtletas(vetAtletasFiltrados = vetAtletas) {
    if (vetAtletasFiltrados.length > 0) {
        let table = document.createElement("table");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");

        // Cabeçalho
        let cabecalho = document.createElement("tr");
        ["ID", "Nome", "Idade", "CPF", "Nacionalidade"].forEach(coluna => {
            let th = document.createElement("th");
            th.textContent = coluna;
            cabecalho.appendChild(th);
        });
        thead.appendChild(cabecalho);
        table.appendChild(thead);

        // Linhas
        for (let i = 0; i < vetAtletasFiltrados.length; i++) {
            let linha = document.createElement("tr");
            
            let tdId = document.createElement("td");
            let tdNome = document.createElement("td");
            let tdIdade = document.createElement("td");
            let tdCPF = document.createElement("td");
            let tdNacionalidade = document.createElement("td");

            tdId.textContent = vetAtletasFiltrados[i].idAtleta;
            tdNome.textContent = vetAtletasFiltrados[i].nome;
            tdIdade.textContent = vetAtletasFiltrados[i].idade;
            tdCPF.textContent = vetAtletasFiltrados[i].cpf;
            tdNacionalidade.textContent = vetAtletasFiltrados[i].nacionalidade;

            linha.appendChild(tdId);
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