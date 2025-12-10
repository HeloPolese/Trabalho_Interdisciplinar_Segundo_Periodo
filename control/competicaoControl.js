import { Maratona } from "../model/Maratona.js";
import { CompeticaoTrilha } from "../model/CompeticaoTrilha.js";
import { Atleta } from "../model/atletas.js";
import { vetAtletas } from "../control/atletasControl.js";

export var listaCompeticoes = [];
export var listaCompetidor = [];

export function gerarID() {
    if (listaCompeticoes.length == 0) {
        return 1;
    } else {
        let maiorID = listaCompeticoes[0].idCompeticao;

        for (let i = 1; i < listaCompeticoes.length; i++) {
            if (listaCompeticoes[i].idCompeticao > maiorID) {
                maiorID = listaCompeticoes[i].idCompeticao;
            }
        }
        return maiorID + 1;
    }
}

export function cadastrarCompeticao(nomeModalidade, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint,
    grauDificuldade, altimetria) {

    let novoID = gerarID();
    let novaCompeticao;

    if (nomeModalidade == "TRILHA") {
        novaCompeticao = new CompeticaoTrilha(
            nome,
            data,
            local,
            distancia,
            limiteParticipante,
            preco,
            limiteTempoMinutos,
            qtdCheckPoint,
            grauDificuldade,
            novoID
        );
    } else if (nomeModalidade == "MARATONA") {
        novaCompeticao = new Maratona(
            nome,
            data,
            local,
            distancia,
            limiteParticipante,
            preco,
            limiteTempoMinutos,
            altimetria,
            novoID
        );
    }
    listaCompeticoes.push(novaCompeticao);
    return true;
}


export function editarCompeticao(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint, grauDificuldade, altimetria) {

    let competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);

    if (!competicao) {
        return "Competição não encontrada!";
    }

    if (nome !== undefined) competicao.nome = nome;
    if (data !== undefined) competicao.data = data;
    if (local !== undefined) competicao.local = local;
    if (distancia !== undefined) competicao.distancia = distancia;
    if (limiteParticipante !== undefined) competicao.limiteParticipante = limiteParticipante;
    if (preco !== undefined) competicao.preco = preco;
    if (limiteTempoMinutos !== undefined) competicao.limiteTempoMinutos = limiteTempoMinutos;
    if (qtdCheckPoint !== undefined) competicao.qtdCheckPoint = qtdCheckPoint;
    if (grauDificuldade !== undefined) competicao.grauDificuldade = grauDificuldade;
    if (altimetria !== undefined) competicao.altimetria = altimetria;

    return true;
}



export function excluirCompeticao(idCompeticao) {

    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {
            let removida = listaCompeticoes[i];
            listaCompeticoes.splice(i, 1);
            return removida;
        }
    }
    return null;

}

export function adicionarAtletaAcompeticao(idCompeticao, cpfAtleta) {

    const atletaEncontrado = vetAtletas.find(a => a.cpf === cpfAtleta);

    if (!atletaEncontrado) {
        return false;
    }

    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);

    if (!competicao) {
        return false;
    }
    competicao.adicionarAtleta(atletaEncontrado);
    //console.log("Competidores da competição:", competicao.lstCompetidores);
    return true;
}

export function listarCompetidores(idCompeticao) {
    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);

    if (!competicao) {
        return null;
    }
    return competicao.lstCompetidores;
}

export function listarCompeticoes(listaCompeticoesFiltradas = listaCompeticoes) {
    if (listaCompeticoesFiltradas.length != 0) {
        var tabela = document.createElement('table');
        thead.textContent = "Nome da Competição";
        thead = document.createElement('thead');
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        for (let i = 0; i < listaCompeticoesFiltradas.length; i++) {
            tbody = document.createElement('tbody');
            tbody.textContent = listaCompeticoesFiltradas[i].nome;
        }
    }

}

export function relatorioCompeticao(idCompeticao) {
    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {
            var tabela = document.createElement('table');
            var thead = document.createElement('thead');
            var tbody = document.createElement('tbody');

            var cabecalhoLinha = document.createElement('tr');
            var cabecalho = ['Nome', 'Data', 'Local', 'Distância (km)', 'Limite de Participantes', 'Preço (R$)', 'Tipo'];
            cabecalho.forEach(cabecalhoTexto => {
                var header = document.createElement('th');
                header.textContent = cabecalhoTexto;
                cabecalhoLinha.appendChild(header);
            });
            thead.appendChild(cabecalhoLinha);
            tabela.appendChild(thead);

            lstCompeticoesFiltradas.forEach(competicao => {
                var linha = document.createElement('tr');
                lstCompeticoesFiltradas.indexOf(competicao);
                var celulas = [
                    competicao.nome,
                    competicao.data,
                    competicao.local,
                    competicao.distancia,
                    competicao.limiteParticipante,
                    competicao.preco,
                    (competicao instanceof Maratona) ? 'Maratona' : 'Trilha'
                ];
                celulas.forEach(celulaTexto => {
                    var celula = document.createElement('td');
                    celula.textContent = celulaTexto;
                    linha.appendChild(celula);
                });
                tbody.appendChild(linha);
            });

            tabela.appendChild(tbody);

            return tabela;
        }
    }
    return null;
}



export function excluirCompetidor(idCompeticao, cpfAtleta) {
    if (listaCompeticoes.length <= idCompeticao) {
        listaCompeticoes[idCompeticao.dataCompeticao].splice(cpfAtleta, 1);
        return true;
    } else {
        return false;
    }


}