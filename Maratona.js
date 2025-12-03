import { Competicao } from "./Competicao.js";

export class Maratona extends Competicao {
    #altimetria;

    constructor(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos, altimetria){
        super(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos);
        this.altimetria = altimetria;
    }

    get altimetria(){
        return this.#altimetria;
    }

    set altimetria(novaAltimetria){
        this.#altimetria = Number(novaAltimetria);
    }

}