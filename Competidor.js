import Atleta from "./Atleta.js";
import Competicao from "./Competicao.js";

export class Competidor extends Atleta {

    #refCompeticao;
    #refAtleta;
    #tempoMinutos;

    constructor(refCompeticao, refAtleta, tempoMinutos = null, nome, idade = "", cpf) {
        super(nome, idade, cpf, refAtleta);
        this.#refCompeticao = refCompeticao;
        this.#tempoMinutos = tempoMinutos;
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
    set refCompeticao(competicao){
        if(competicao != undefined && competicao instanceof Competicao){
            this.#refCompeticao = competicao.idCompeticao;
        }
    }

    set refAtleta(atleta){
        if(atleta != undefined && atleta instanceof Atleta){
            this.#refAtleta = atleta.idAtleta;
        }   
    }  
}