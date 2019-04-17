class Transactions {
  constructor(description = ' ', amount = 0.0, date = new Date()) {
    this.description = description;
    this.amount = amount;
    this.date = date;
  }
}
module.exports = Transactions;
