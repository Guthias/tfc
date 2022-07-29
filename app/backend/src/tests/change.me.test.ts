import * as sinon from 'sinon';
import * as chai from 'chai';
import resetDatabase from './assets/resetDatabase';

const { expect } = chai;

describe('Seu teste', () => {
  before(function() {
    this.timeout(60000)
    resetDatabase();
  });

  it('Seu sub-teste', async () => {
    expect(false).to.be.eq(true);
  });
});
