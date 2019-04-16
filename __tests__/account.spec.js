const Account = require('../src/model/account');

describe('Account function', () => {
  it('Has a name', () => {
    const testName = 'test name';
    const account = new Account('test name');
    expect(account.name).toEqual(testName);
  });
  it('Has an initial balance', () => {
    const testBalance = 23.8;
    const account = new Account('Name', testBalance);
    expect(account.initialBalance).toEqual(testBalance);
  });
});
