import { Competicao } from "../model/Competicao.js";

export class CompeticaoTrilha extends Competicao {
    static #qtdCorridaTrilha = 0;
    #qtdCheckPoint;
    #grauDificuldade;
    #idCorridaTrilha;

    constructor(nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint, grauDificuldade = "FÁCIL") {
        super(nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos)
        CompeticaoTrilha.#qtdCorridaTrilha++;
        this.#idCorridaTrilha = "" + new Date().getFullYear() + CompeticaoTrilha.#qtdCorridaTrilha;
        this.qtdCheckPoint = qtdCheckPoint;
        this.grauDificuldade = grauDificuldade;
    }

    get qtdCheckPoint() {
        return this.#qtdCheckPoint;
    }

    get idCorridaTrilha(){
        return this.#idCorridaTrilha;
    }
    
    set qtdCheckPoint(novaQtdCheckPoint) {
        const valor = Number(novaQtdCheckPoint);
        if (valor > 0) {
            this.#qtdCheckPoint = valor;
        }
    }

    get grauDificuldade() {
        return this.#grauDificuldade;
    }

    set grauDificuldade(novoGrauDificuldade) {
        if (novoGrauDificuldade != "") {
            const dificuldade = novoGrauDificuldade.toUpperCase();
            const niveisValidos = ["FÁCIL", "MÉDIO", "DIFÍCIL", "FACIL", "MEDIO", "DIFICIL"];

            if (niveisValidos.includes(dificuldade)) {
                this.#grauDificuldade = dificuldade;
            }
        }
    }

    toString() {
        return super.toString() +
            `\nQuantidade de Checkpoints: ${this.qtdCheckPoint}` +
            `\nGrau de Dificuldade: ${this.grauDificuldade}`;
             `\nID: ${this.#idCorridaTrilha}`;
    }

}