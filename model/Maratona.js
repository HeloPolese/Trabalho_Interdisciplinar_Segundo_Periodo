import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao {
    #altimetria;

    constructor(nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, altimetria, idCompeticao){
        super(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos);
        this.altimetria = altimetria;
    }

    get altimetria(){
        return this.#altimetria;
    }

    set altimetria(novaAltimetria){
        this.#altimetria = Number(novaAltimetria);
    }

    toString() {
    return super.toString() +
           `\nAltimetria: ${this.altimetria} m`;
    }

}