import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount Must be number');
    }
    this._currency = currency;
    if (currency.constructor !== Currency) {
      throw new TypeError('currency Must be instance of Currency');
    }
    this._amount = amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount Must be number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency.constructor !== Currency) {
      throw new TypeError('currency Must be instance of Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
}
