export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //GET 
    get data() {
        return this.data;
    }
    get quantidade() {
        return this.quantidade;
    }
    get valor() {
        return this.valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
