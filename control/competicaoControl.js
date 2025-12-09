import { Maratona } from "../model/Maratona.js";
import { CompeticaoTrilha } from "../model/CompeticaoTrilha.js";
import { Atleta } from "../model/atletas.js";

export var listaCompeticoes = [];

const salvo = localStorage.getItem("competicoes");
if (salvo) {
    const bruto = JSON.parse(salvo);

    bruto.forEach(c => {
        if (c.altimetria !== undefined) {
            listaCompeticoes.push(
                new Maratona(
                    c.nome,
                    c.data,
                    c.local,
                    c.distancia,
                    c.limiteParticipante,
                    c.preco,
                    c.limiteTempoMinutos,
                    c.altimetria,
                    c.idCompeticao
                )
            );
        } else {
            listaCompeticoes.push(
                new CompeticaoTrilha(
                    c.nome,
                    c.data,
                    c.local,
                    c.distancia,
                    c.limiteParticipante,
                    c.preco,
                    c.limiteTempoMinutos,
                    c.qtdCheckPoint,
                    c.grauDificuldade,
                    c.idCompeticao
                )
            );
        }
    });
}

function salvarStorage() {
    localStorage.setItem("competicoes", JSON.stringify(listaCompeticoes));
}

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
    salvarStorage();
    return true;
}

export function editarCompeticao(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint, grauDificuldade, altimetria) {

    let competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);

    if (!competicao) {
        return "Competição não encontrada!";
    }

    if (nome !== undefined && nome == "") competicao.nome = nome;
    if (data !== undefined && data == "") competicao.data = data;
    if (local !== undefined && local == "") competicao.local = local;
    if (distancia !== undefined && distancia == "") competicao.distancia = distancia;
    if (limiteParticipante !== undefined && limiteParticipante == "") competicao.limiteParticipante = limiteParticipante;
    if (preco !== undefined && preco == "") competicao.preco = preco;
    if (limiteTempoMinutos !== undefined && limiteTempoMinutos == "") competicao.limiteTempoMinutos = limiteTempoMinutos;
    if (qtdCheckPoint !== undefined && qtdCheckPoint == "") competicao.qtdCheckPoint = qtdCheckPoint;
    if (grauDificuldade !== undefined && grauDificuldade == "") competicao.grauDificuldade = grauDificuldade;
    if (altimetria !== undefined && altimetria == "") competicao.altimetria = altimetria;

    salvarStorage();
    return true;
}

export function excluirCompeticao(idCompeticao) {
    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {
            let removida = listaCompeticoes[i];
            listaCompeticoes.splice(i, 1);
            salvarStorage();
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
                salvarStorage();
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
        salvarStorage();
        return true;
    } else {
        return false;
    }
}
