import { Maratona } from "../Maratona.js";
import { CompeticaoTrilha } from "../CompeticaoTrilha.js";
import * as atletaControl from "../control/atletasControl.js";

export var listaCompeticoes = [];
let idCompeticaoCounter = 1;

export function gerarID() {
    return idCompeticaoCounter++;
}

export function cadastrarCompeticao(nomeModalidade, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint,
    grauDificuldade, altimetria) {
    
    // Validações básicas
    if (!nome || !data || !local || !distancia || !limiteParticipante || !preco || !limiteTempoMinutos) {
        return false;
    }
    
    let novoID = gerarID();
    let novaCompeticao;
    
    if (nomeModalidade == "TRILHA") {
        // Converter para número
        const checkpoints = qtdCheckPoint ? Number(qtdCheckPoint) : 0;
        const dificuldade = grauDificuldade || "FÁCIL";
        
        novaCompeticao = new CompeticaoTrilha(
            nome,
            data,
            local,
            Number(distancia),
            Number(limiteParticipante),
            Number(preco),
            Number(limiteTempoMinutos),
            checkpoints,
            dificuldade,
            novoID
        );
    } else if (nomeModalidade == "MARATONA") {
        const alt = altimetria ? Number(altimetria) : 0;
        
        novaCompeticao = new Maratona(
            nome,
            data,
            local,
            Number(distancia),
            Number(limiteParticipante),
            Number(preco),
            Number(limiteTempoMinutos),
            alt,
            novoID
        );
    } else {
        return false;
    }
    
    listaCompeticoes.push(novaCompeticao);
    return true;
}

export function editarCompeticao(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint, grauDificuldade, altimetria) {
    
    let competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);
    
    if (!competicao) {
        return false;
    }
    
    // Aplicar edições apenas se os valores forem válidos
    if (nome !== undefined && nome !== "") {
        competicao.nome = nome;
    }
    
    if (data !== undefined && data !== "") {
        competicao.data = data;
    }
    
    if (local !== undefined && local !== "") {
        competicao.local = local;
    }
    
    if (distancia !== undefined && distancia !== "") {
        competicao.distancia = Number(distancia);
    }
    
    if (limiteParticipante !== undefined && limiteParticipante !== "") {
        competicao.limiteParticipante = Number(limiteParticipante);
    }
    
    if (preco !== undefined && preco !== "") {
        competicao.preco = Number(preco);
    }
    
    if (limiteTempoMinutos !== undefined && limiteTempoMinutos !== "") {
        competicao.limiteTempoMinutos = Number(limiteTempoMinutos);
    }
    
    // Atributos específicos da modalidade
    if (competicao instanceof CompeticaoTrilha) {
        if (qtdCheckPoint !== undefined && qtdCheckPoint !== "") {
            competicao.qtdCheckPoint = Number(qtdCheckPoint);
        }
        if (grauDificuldade !== undefined && grauDificuldade !== "") {
            competicao.grauDificuldade = grauDificuldade;
        }
    } else if (competicao instanceof Maratona) {
        if (altimetria !== undefined && altimetria !== "") {
            competicao.altimetria = Number(altimetria);
        }
    }
    
    return true;
}

export function excluirCompeticao(idCompeticao) {
    for (let i = 0; i < listaCompeticoes.length; i++) {
        if (listaCompeticoes[i].idCompeticao == idCompeticao) {
            listaCompeticoes.splice(i, 1);
            return true;
        }
    }
    return false;
}

export function adicionarAtletaCompeticao(idCompeticao, cpfAtleta) {
    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);
    
    if (!competicao) {
        return "Competição não encontrada";
    }
    
    // Buscar atleta
    const atleta = atletaControl.buscarAtleta(cpfAtleta);
    if (!atleta) {
        return "Atleta não encontrado";
    }
    
    // Verificar se já está inscrito
    if (competicao.lstCompetidores && competicao.lstCompetidores.some(c => c.refAtleta == cpfAtleta)) {
        return "Atleta já inscrito nesta competição";
    }
    
    // Verificar limite de participantes
    const inscritosAtuais = competicao.lstCompetidores ? competicao.lstCompetidores.length : 0;
    if (inscritosAtuais >= competicao.limiteParticipante) {
        return "Limite de participantes atingido";
    }
    
    // Adicionar competidor
    if (!competicao.lstCompetidores) {
        competicao.lstCompetidores = [];
    }
    
    competicao.lstCompetidores.push({
        refAtleta: cpfAtleta,
        tempoMinutos: null,
        posicao: -1
    });
    
    return true;
}

export function listarCompetidoresCompeticao(idCompeticao) {
    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);
    
    if (!competicao) {
        return null;
    }
    
    if (!competicao.lstCompetidores || competicao.lstCompetidores.length === 0) {
        return null;
    }
    
    return gerarTabelaCompetidores(competicao.lstCompetidores);
}

function gerarTabelaCompetidores(competidores) {
    const vetAtletas = atletaControl.getVetAtletas();
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Cabeçalho
    const cabecalhoLinha = document.createElement('tr');
    ['Posição', 'Nome', 'CPF', 'Tempo (min)'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        cabecalhoLinha.appendChild(th);
    });
    thead.appendChild(cabecalhoLinha);
    table.appendChild(thead);
    
    // Linhas
    competidores.forEach(competidor => {
        const atleta = vetAtletas.find(a => a.cpf == competidor.refAtleta);
        if (!atleta) return; // Pular se atleta não for encontrado
        
        const linha = document.createElement('tr');
        
        const celulas = [
            competidor.posicao > 0 ? competidor.posicao : 'N/C',
            atleta.nome,
            atleta.cpf,
            competidor.tempoMinutos || 'N/R'
        ];
        
        celulas.forEach(texto => {
            const td = document.createElement('td');
            td.textContent = texto;
            linha.appendChild(td);
        });
        
        tbody.appendChild(linha);
    });
    
    table.appendChild(tbody);
    return table;
}

export function listarCompeticoes() {
    if (listaCompeticoes.length === 0) {
        return null;
    }
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Cabeçalho
    const cabecalhoLinha = document.createElement('tr');
    ['ID', 'Nome', 'Data', 'Local', 'Distância', 'Modalidade', 'Inscritos'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        cabecalhoLinha.appendChild(th);
    });
    thead.appendChild(cabecalhoLinha);
    table.appendChild(thead);
    
    // Linhas
    listaCompeticoes.forEach(competicao => {
        const linha = document.createElement('tr');
        
        const celulas = [
            competicao.idCompeticao,
            competicao.nome,
            competicao.data,
            competicao.local,
            `${competicao.distancia} km`,
            competicao instanceof Maratona ? 'Maratona' : 'Trilha',
            competicao.lstCompetidores ? competicao.lstCompetidores.length : 0
        ];
        
        celulas.forEach(texto => {
            const td = document.createElement('td');
            td.textContent = texto;
            linha.appendChild(td);
        });
        
        tbody.appendChild(linha);
    });
    
    table.appendChild(tbody);
    return table;
}

export function relatorioCompeticao(idCompeticao) {
    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);
    
    if (!competicao) {
        return null;
    }
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Informações gerais
    const info = [
        ['ID', competicao.idCompeticao],
        ['Nome', competicao.nome],
        ['Data', competicao.data],
        ['Local', competicao.local],
        ['Distância', `${competicao.distancia} km`],
        ['Limite de Participantes', competicao.limiteParticipante],
        ['Preço', `R$ ${competicao.preco.toFixed(2)}`],
        ['Limite de Tempo', `${competicao.limiteTempoMinutos} min`],
        ['Modalidade', competicao instanceof Maratona ? 'Maratona' : 'Trilha'],
        ['Inscritos', competicao.lstCompetidores ? competicao.lstCompetidores.length : 0]
    ];
    
    // Adicionar campos específicos
    if (competicao instanceof Maratona) {
        info.push(['Altimetria', `${competicao.altimetria} m`]);
    } else if (competicao instanceof CompeticaoTrilha) {
        info.push(['Checkpoints', competicao.qtdCheckPoint]);
        info.push(['Dificuldade', competicao.grauDificuldade]);
    }
    
    info.forEach(([campo, valor]) => {
        const linha = document.createElement('tr');
        
        const tdCampo = document.createElement('td');
        tdCampo.textContent = campo;
        tdCampo.style.fontWeight = 'bold';
        
        const tdValor = document.createElement('td');
        tdValor.textContent = valor;
        
        linha.appendChild(tdCampo);
        linha.appendChild(tdValor);
        tbody.appendChild(linha);
    });
    
    table.appendChild(tbody);
    return table;
}

export function relatorioTodasCompeticoes() {
    if (listaCompeticoes.length === 0) {
        return null;
    }
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Cabeçalho
    const cabecalhoLinha = document.createElement('tr');
    ['ID', 'Nome', 'Data', 'Local', 'Modalidade', 'Inscritos/Máx', 'Status'].forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        cabecalhoLinha.appendChild(th);
    });
    thead.appendChild(cabecalhoLinha);
    table.appendChild(thead);
    
    // Linhas
    listaCompeticoes.forEach(competicao => {
        const linha = document.createElement('tr');
        const inscritos = competicao.lstCompetidores ? competicao.lstCompetidores.length : 0;
        const status = inscritos >= competicao.limiteParticipante ? 'Lotada' : 'Vagas';
        
        const celulas = [
            competicao.idCompeticao,
            competicao.nome,
            competicao.data,
            competicao.local,
            competicao instanceof Maratona ? 'Maratona' : 'Trilha',
            `${inscritos}/${competicao.limiteParticipante}`,
            status
        ];
        
        celulas.forEach(texto => {
            const td = document.createElement('td');
            td.textContent = texto;
            linha.appendChild(td);
        });
        
        tbody.appendChild(linha);
    });
    
    table.appendChild(tbody);
    return table;
}

export function excluirCompetidorCompeticao(idCompeticao, cpfAtleta) {
    const competicao = listaCompeticoes.find(c => c.idCompeticao == idCompeticao);
    
    if (!competicao || !competicao.lstCompetidores) {
        return false;
    }
    
    const index = competicao.lstCompetidores.findIndex(
        competidor => competidor.refAtleta == cpfAtleta
    );
    
    if (index !== -1) {
        competicao.lstCompetidores.splice(index, 1);
        return true;
    }
    
    return false;
}