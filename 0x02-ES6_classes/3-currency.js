export default class Currency {
    constructor(code, name) {
        if (typeof name !== 'string' || typeof code !== 'string') {
            throw new TypeError("name or code Must be string");
        }
        this._name = name;
        this._code = code;
    }

    set code(code) {
        if (typeof code !== 'string') {
            throw new TypeError("code must be string");
        }
        this._code = code;
    }

    get code() {
        return this._code;
    }

    set name(name) {
        if (typeof name !== 'string') {
            throw new TypeError("name must be string");
        }
        this._name = name;
    }

    get name() {
        return this._name;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`
    }
}
