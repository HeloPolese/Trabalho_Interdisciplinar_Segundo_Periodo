import { Competicao } from "../Competicao.js";
import { Maratona } from "../Maratona.js";
import { CompeticaoTrilha } from "../CompeticaoTrilha.js";
import { Atleta } from "../atletas.js";

var listaCompeticoes = [];

export function gerarID() {
    if (listaCompeticoes.length == 0) {
        return 0;
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

export function cadastrarCompeticao(obj) {

    let novoID = gerarID();
    let novaCompeticao;

    if (obj.tipo == "TRILHA") {
        novaCompeticao = new CompeticaoTrilha(
            novoID,
            obj.nome,
            obj.data,
            obj.local,
            obj.distancia,
            obj.limiteParticipante,
            obj.preco,
            obj.limiteTempoMinutos,
            obj.qtdCheckPoint,
            obj.grauDificuldade
        );
    } else if (obj.tipo == "MARATONA") {
        novaCompeticao = new Maratona(
            novoID,
            obj.nome,
            obj.data,
            obj.local,
            obj.distancia,
            obj.limiteParticipante,
            obj.preco,
            obj.limiteTempoMinutos,
            obj.altimetria
        );
    }

    listaCompeticoes.push(novaCompeticao);
    return listaCompeticoes;
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


export function excluirCompeticao(id) {

    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == id) {
            let removida = listaCompeticoes[i];
            listaCompeticoes.splice(i, 1);
            return removida;
        }
    }

    return null;

}

export function adicionarAtleta(idCompeticao, atletaNome) {
    if (atletaNome != undefined && atletaNome instanceof Atleta) {
        for (let i = 0; i < listaCompeticoes.length; i++) {
            if (listaCompeticoes[i].idCompeticao == idCompeticao) {
                listaCompeticoes[i].adicionarAtleta(atletaNome);
                return true;
            }
        }
    }
    return false;
}

export function listarCompetidores(nomeCompeticao, data, local) {
    if (nomeCompeticao instanceof Competicao) {
        for (let i = 0; i < listaCompeticoes.length; i++) {
            if (nomeCompeticao[i].data == data) {
                if (nomeCompeticao[i].local == local) {
                    return nomeCompeticao[i].listarCompetidores();
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    } else {
        return null;
    }
}

export function listarCompeticoesPorNome(listaCompeticoesFiltradas = listaCompeticoes) {
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