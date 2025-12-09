import { Atleta } from "./Atleta.js";
import { Competicao } from "./Competicao.js";

export class Competidor {

    #refAtleta;
    #tempoMinutos;
    #posicao

    constructor(refAtleta, tempoMinutos = null, posicao = -1) {
        if (refAtleta instanceof Atleta) {
            this.#refAtleta = refAtleta.idAtleta;
        } else {
            this.#refAtleta = undefined;
        }
        this.#posicao = posicao;
        this.#tempoMinutos = tempoMinutos;
    }

    get posicao() { 
        return this.#posicao;
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

    set refAtleta(atleta){
        if(atleta != undefined && atleta instanceof Atleta){
            this.#refAtleta = atleta;
        }   
    }  
    set posicao(novaPosicao){
        if(novaPosicao != undefined && novaPosicao > 0 && novaPosicao < Competicao.limiteParticipante){
            this.#posicao = novaPosicao;
        }   
    }

    toString(){
        return  '\n Nome' + this.#refAtleta.nome +
                '\n cpf: ' + this.#refAtleta.cpf +
                '\n Idade: ' + this.#refAtleta.idade +
                `\n Posição: ${this.posicao}` +
                `\n Tempo em minutos: ${this.tempoMinutos}`;
    }
}