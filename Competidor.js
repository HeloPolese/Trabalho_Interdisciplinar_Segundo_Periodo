import Atleta from "./Atleta.js";
import Competicao from "./Competicao.js";

export class Competidor extends Atleta {

    #refCompeticao;
    #refAtleta;
    #tempoMinutos;

    constructor(refCompeticao, refAtleta, tempoMinutos = null, nome, idade = "", cpf, posicao) {
        super(nome, idade, cpf);
        this.posicao = posicao;
        this.#refCompeticao = refCompeticao;
        this.#tempoMinutos = tempoMinutos;
    }

    get nome() {
        return super.nome;
    }
    get idade() {
        return super.idade;
    }
    get cpf() {
        return super.cpf;
    }
    get posicao() { 
        return this.posicao;
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
    set posicao(novaPosicao){
        if(novaPosicao != undefined && novaPosicao > 0 && novaPosicao < Competicao.limiteParticipante){
            this.posicao = novaPosicao;
        }   
    }

    toString(){
        return  super.toString() +
                `\nPosição: ${this.posicao}` +
                `\nTempo em minutos: ${this.tempoMinutos}`;
    }
}