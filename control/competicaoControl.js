import { Maratona } from "../model/Maratona.js";
import { CompeticaoTrilha } from "../model/CompeticaoTrilha.js";
import { Atleta } from "../model/atletas.js";
import { vetAtletas } from "../control/atletasControl.js";

export var listaCompeticoes = [];

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
    if (listaCompeticoesFiltradas.length === 0) {
        return "Nenhuma competição encontrada!";
    }

    // Criar tabela
    const tabela = document.createElement("table");
    tabela.border = "1";
    tabela.style.borderCollapse = "collapse";
    tabela.style.marginTop = "10px";
    tabela.style.width = "100%";
    tabela.style.textAlign = "left";

    // Criar THEAD
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    const colunas = [
        "Nome da Competição",
        "Data",
        "Local",
        "Distância",
        "Preço",
        "Qtd Competidores"
    ];

    colunas.forEach(col => {
        const th = document.createElement("th");
        th.textContent = col;
        th.style.padding = "8px";
        th.style.background = "#eee";
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabela.appendChild(thead);

    // Criar TBODY
    const tbody = document.createElement("tbody");

    listaCompeticoesFiltradas.forEach(comp => {
        const tr = document.createElement("tr");

        const tdNome = document.createElement("td");
        tdNome.textContent = comp.nome;

        const tdData = document.createElement("td");
        tdData.textContent = comp.data;

        const tdLocal = document.createElement("td");
        tdLocal.textContent = comp.local;

        const tdDistancia = document.createElement("td");
        tdDistancia.textContent = comp.distancia;

        const tdPreco = document.createElement("td");
        tdPreco.textContent = `R$ ${comp.preco}`;

        const tdQtdCompetidores = document.createElement("td");
        tdQtdCompetidores.textContent = comp.lstCompetidores.length;

        tr.appendChild(tdNome);
        tr.appendChild(tdData);
        tr.appendChild(tdLocal);
        tr.appendChild(tdDistancia);
        tr.appendChild(tdPreco);
        tr.appendChild(tdQtdCompetidores);

        tr.querySelectorAll("td").forEach(td => td.style.padding = "6px");

        tbody.appendChild(tr);
    });

    tabela.appendChild(tbody);

    return tabela;
}



export function relatorioCompeticao(idCompeticao) {
    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {

            var lstCompeticoesFiltradas = listaCompeticoes.filter(c => c.idCompeticao == idCompeticao);

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
    var competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);

    if (!competicao) {
        return false; 
    }

    const indice = competicao.lstCompetidores.findIndex(
    atleta => String(atleta.cpf) == String(cpfAtleta)
)

    if (indice === -1) {
        return false; // Atleta não encontrado
    }

    competicao.lstCompetidores.splice(indice, 1);

    return true;
}
