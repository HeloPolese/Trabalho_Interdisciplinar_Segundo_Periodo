import { Maratona } from "../Maratona.js";
import { CompeticaoTrilha } from "../CompeticaoTrilha.js";

export var listaCompeticoes = [];

function gerarID() {
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

export function cadastrarCompeticao(nomeModalidade, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos,qtdCheckPoint,
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



export function excluirCompeticao(idCompeticao){

    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {
            let removida = listaCompeticoes[i];
            listaCompeticoes.splice(i, 1);
            return removida;
        }
    }
    return null;
}