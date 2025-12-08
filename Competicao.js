export class Competicao {

    #idCompeticao;
    #nome;
    #data;
    #local;
    #distancia;
    #limiteParticipante;
    #preco;
    #limiteTempoMinutos;
    #lstCompetidores;

    constructor(idCompeticao, nome, data, local, distancia, limiteParticipante, preco, limiteTempoMinutos) {
        this.#idCompeticao = idCompeticao;
        this.#nome = nome;
        this.#data = data;
        this.#local = local;
        this.#distancia = distancia;
        this.#limiteParticipante = limiteParticipante;
        this.#preco = preco;
        this.#limiteTempoMinutos = limiteTempoMinutos;
        this.#lstCompetidores = []; // lista é criada dentro do constructor, para que inicialmente uma competição não inicie com atletas já inseridos.
    }

    get idCompeticao() {
        return this.#idCompeticao;
    }

    get nome() {
        return this.#nome;
    }

    set nome(_nome) {
        if (_nome != undefined && _nome != "") {
            this.#nome = _nome;
        }
    }

    get data() {
        return this.#data;
    }

    set data(_data) {
        if (_data != undefined && _data.lenght == 10) { // igual a 10 pois o formato é DD/MM/AAAA
            this.#data = _data
        }
    }

    get local() {
        return this.#local;
    }

    set local(_local) {
        if (_local != undefined && _local != "") {
            this.#local = _local;
        }
    }

    get distancia() {
        return this.#distancia;
    }

    set distancia(_distancia) {
        const valor = Number(_distancia);

        if (valor > 0) {
            this.#distancia = valor;
        }
    }

    get limiteParticipante() {
        return this.#limiteParticipante
    }

    set limiteParticipante(_limiteParticipante) {
        const limite = Number(_limiteParticipante);

        if (limite > 0) {
            this.#limiteParticipante = limite;
        }
    }
    get preco() {
        return this.#preco;
    }

    set preco(_preco) {
        const preco = Number(_preco);

        if (preco >= 0) {
            this.#preco = preco;
        }
    }

    get limiteTempoMinutos() {
        return this.#limiteTempoMinutos;
    }

    set limiteTempoMinutos(_limiteTempoMinutos) {
        const limite = Number(_limiteTempoMinutos);

        if (limite > 0) {
            this.#limiteTempoMinutos = limite;
        }
    }

    get lstCompetidores() {
        return this.#lstCompetidores.slice();
    }

    toString() {
        return `Competição: ${this.#nome}\n` +
            `Data: ${this.#data}\n` +
            `Local: ${this.#local}\n` +
            `Distância: ${this.#distancia} km\n` +
            `Preço: R$ ${this.#preco}\n` +
            `Limite Participantes: ${this.#limiteParticipante}\n` +
            `Inscritos: ${this.#lstCompetidores.length}`;
    }
}