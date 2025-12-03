import { Competicao } from "./Competicao.js";

export class CompeticaoTrilha extends Competicao {
    #qtdCheckPoint;
    #grauDificuldade;

    constructor(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, qtdCheckPoint, grauDificuldade = "FÁCIL"){
        super(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos)
        this.qtdCheckPoint = qtdCheckPoint;
        this.grauDificuldade = grauDificuldade;
    }

    get qtdCheckPoint(){
        return this.#qtdCheckPoint;
    }

    set qtdCheckPoint(novaQtdCheckPoint){
        const valor = Number(novaQtdCheckPoint);
        if (valor > 0) {
            this.#qtdCheckPoint = valor;
        }
    }

    get grauDificuldade(){
        return this.#grauDificuldade;
    }

    set grauDificuldade(novoGrauDificuldade){
    if (novoGrauDificuldade != ""){
        const dificuldade = novoGrauDificuldade.toUpperCase();
        const niveisValidos = ["FÁCIL", "MÉDIO", "DIFÍCIL"];

        if (niveisValidos.includes(dificuldade)) {
            this.#grauDificuldade = dificuldade;
        }
        }
    }

    toString() {
    return super.toString() +
           `\nQuantidade de Checkpoints: ${this.qtdCheckPoint}` +
           `\nGrau de Dificuldade: ${this.grauDificuldade}`;
    }

}