import Atleta from "./Atleta.js";
import Competicao from "./Competicao.js";

export class Competidor extends Atleta {

    #idCompetidor;
    #idCompeticao;
    #idAtleta;
    #tempoMinutos;

    constructor(idCompetidor, idCompeticao, idAtleta, tempoMinutos = null, nome, idade = "", cpf) {
        super(nome, idade, cpf);
        this.#idCompetidor = idCompetidor;
        this.#idCompeticao = idCompeticao;
        this.#idAtleta = idAtleta;
        this.#tempoMinutos = tempoMinutos;
    }
    get idCompetidor() {
        return this.#idCompetidor;
    }       

    get idCompeticao() {
        return this.#idCompeticao;
    }   
    get idAtleta() {
        return this.#idAtleta;
    }
    get tempoMinutos() {
        return this.#tempoMinutos;
    }   
    set tempoMinutos(novoTempoMinutos) {
        if (novoTempoMinutos != undefined && novoTempoMinutos >= 0) {
            this.#tempoMinutos = novoTempoMinutos;
        }
    }   
    
}