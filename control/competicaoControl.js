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


export function editarCompeticao(id, dados) {

    let competicao = null;

    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == id) {
            competicao = listaCompeticoes[i];
            break;
        }
    }

    if (competicao == null) {
        return "Competição não encontrada!";
    }


    if (dados.nome !== undefined) {
        competicao.nome = dados.nome;
    }

    if (dados.data !== undefined) {
        competicao.data = dados.data;
    }

    if (dados.local !== undefined) {
        competicao.local = dados.local;
    }

    if (dados.distancia !== undefined) {
        competicao.distancia = dados.distancia;
    }

    if (dados.limiteParticipante !== undefined) {
        competicao.limiteParticipante = dados.limiteParticipante;
    }

    if (dados.preco !== undefined) {
        competicao.preco = dados.preco;
    }

    if (dados.limiteTempoMinutos !== undefined) {
        competicao.limiteTempoMinutos = dados.limiteTempoMinutos;
    }


    if (competicao.qtdCheckPoint !== undefined && dados.qtdCheckPoint !== undefined) {
        competicao.qtdCheckPoint = dados.qtdCheckPoint;
    }

    if (competicao.grauDificuldade !== undefined && dados.grauDificuldade !== undefined) {
        competicao.grauDificuldade = dados.grauDificuldade;
    }

    if (competicao.altimetria !== undefined && dados.altimetria !== undefined) {
        competicao.altimetria = dados.altimetria;
    }

    return competicao;

}


export function excluirCompeticao(id){

    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == id) {
            let removida = listaCompeticoes[i];
            listaCompeticoes.splice(i, 1);
            return removida;
        }
    }
    return null;
}

