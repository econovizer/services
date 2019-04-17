const Transaction = require('../src/model/transaction');

describe('Transaction functionality', () => {
  it('Has a description', () => {
    const testDescription = 'test description';
    const transaction = new Transaction(testDescription);
    expect(transaction.description).toEqual(testDescription);
  });

  it('Has an amount', () => {
    const testAmount = 23.8;
    const transaction = new Transaction('Name', testAmount);
    expect(transaction.amount).toEqual(testAmount);
  });

  it('Has a date', () => {
    const testDate = new Date();
    const transaction = new Transaction('Name', 0.0, testDate);
    expect(transaction.date).toEqual(testDate);
  });
});
