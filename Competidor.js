import Atleta from "./Atleta.js";
import Competicao from "./Competicao.js";

export class Competidor extends Atleta {
    #posicao;
    #refCompeticao;
    #refAtleta;
    #tempoMinutos;

    constructor(nome, idade = "", cpf, refCompeticao, refAtleta, tempoMinutos = null, posicao) {
        super(nome, idade, cpf);
        this.posicao = posicao;
        this.refCompeticao = refCompeticao;
        this.refAtleta = refAtleta;
        this.#tempoMinutos = tempoMinutos;
    }

    get posicao() {
        return this.#posicao;
    }
    get refCompeticao() {
        return this.#refCompeticao;
    }
    get refAtleta() {
        return this.#refAtleta;
    }
    get tempoMinutos() {
        return this.#tempoMinutos;
    }
    set tempoMinutos(novoTempoMinutos) {
        if (novoTempoMinutos != undefined && novoTempoMinutos >= 0) {
            this.#tempoMinutos = novoTempoMinutos;
        }
    }
    set refCompeticao(competicao) {
        if (competicao != undefined && competicao instanceof Competicao) {
            this.#refCompeticao = competicao;
        }
    }

    set refAtleta(atleta) {
        if (atleta != undefined && atleta instanceof Atleta) {
            this.#refAtleta = atleta;
        }
    }
    set posicao(novaPosicao) {
        if (novaPosicao != undefined && novaPosicao > 0 && novaPosicao <= Competicao.limiteParticipante) {
            this.#posicao = novaPosicao;
        }
    }

    toString() {
        return super.toString() +
            `\nPosição: ${this.posicao}` +
            `\nTempo em minutos: ${this.tempoMinutos}`;
    }
}