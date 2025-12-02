class Atleta{
    static #qtdAtletas = 0;
    #idAtleta;
    #nome;
    #idade;
    #cpf;

    constructor(nome,idade = "",cpf){
        this.#nome = nome;  
        this.#idade = idade;
        this.#cpf = cpf;

        Atleta.#qtdAtletas++;
        this.#idAtleta = ""+ new Date().getFullYear() + Atleta.#qtdAtletas;
    }

   static get quantidadeAtletas(){
        return Atleta.#qtdAtletas;
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
        if (newIdade != undefined && newIdade > 0 ) {
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

}