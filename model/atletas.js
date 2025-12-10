export class Atleta {
    static #qtdAtleta = 0;
    #id;
    #nome;
    #idade;
    #cpf;
    #nacionalidade;

    constructor(nome, idade = 0, cpf, nacionalidade = "") {
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
        Atleta.#qtdAtleta++;
        this.#id = "" + new Date().getFullYear() + Atleta.#qtdAtleta;
        this.#nacionalidade = nacionalidade;
    }

    get id(){
        return this.#id;
    }
    get nome(){
        return this.#nome;
    }
    
    set nome(newNome){
        if (newNome != "") {
            this.#nome = newNome;
        }
    }

    get idade(){
        return this.#idade;
    }

    set idade(newIdade){
        if (newIdade != undefined && newIdade > 0) {
            this.#idade = newIdade;
        }
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(newCpf){
        if (newCpf != undefined && newCpf.length == 11 ) {
            this.#cpf = newCpf;
        }
    }
        get nacionalidade(){
            return this.#nacionalidade;
        }
        set nacionalidade(newNacionalidade){
            if (newNacionalidade != "" && newNacionalidade != undefined ) {
                this.#nacionalidade = newNacionalidade;
            }
        }
    toString(){
        return "Nome: " + this.#nome + 
               "\nIdade: " + this.#idade +
               "\nCpf: " + this.#cpf +
               "\nNacionalidade: " + this.#nacionalidade;
    }

}