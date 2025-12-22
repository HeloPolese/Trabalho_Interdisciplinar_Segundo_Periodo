import { Competicao } from "../model/Competicao.js";

export class Maratona extends Competicao {
    #altimetria;
    static #qtdMaratona = 0;
    #idMaratona;

    constructor(nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, altimetria) {
        super(nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos);
        this.altimetria = altimetria;
        Maratona.#qtdMaratona++;
        this.#idMaratona = "" + new Date().getFullYear() + Maratona.#qtdMaratona;
    }

    get altimetria() {
        return this.#altimetria;
    }
    get idMaratona(){
        return this.#idMaratona;
    }
    set altimetria(novaAltimetria) {
        this.#altimetria = Number(novaAltimetria);
    }

    toString() {
        return super.toString() +
            `\nAltimetria: ${this.altimetria} m`;
              `\nId: ${this.#idMaratona} m`;
    }

}