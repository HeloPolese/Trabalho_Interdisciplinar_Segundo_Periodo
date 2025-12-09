export class Atleta{
    #idAtleta;
    #nome;
    #idade;
    #cpf;
    #nacionalidade;

    constructor(id,nome,idade = 0,cpf, nacionalidade){
        this.#nome = nome;  
        this.#idade = idade;
        this.#cpf = cpf;
        this.#idAtleta = id;
        this.#nacionalidade = nacionalidade;
    }
    get idAtleta(){
        return this.#idAtleta;
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