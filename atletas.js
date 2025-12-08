export class Atleta{
    #idAtleta;
    #nome;
    #idade;
    #cpf;

    constructor(id,nome,idade = 0,cpf){
        this.#nome = nome;  
        this.#idade = idade;
        this.#cpf = cpf;
        this.#idAtleta = id;
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

    toString(){
        return "Nome: " + this.#nome + 
               "\nIdade: " + this.#idade +
               "\nCpf: " + this.#cpf;
    }

}