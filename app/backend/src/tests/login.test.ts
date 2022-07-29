import * as sinon from 'sinon';
import * as chai from 'chai';
import resetDatabase from './assets/resetDatabase';
const request = require('supertest');
import { app } from '../app';

const { expect } = chai;

describe('<POST /login>', () => {
  before(function() {
    this.timeout(60000)
    resetDatabase();
  });

  describe('Quando o formato dos dados estiverem incorretos', () => {
    describe('Quando estiver faltando o e-mail', () => {
      it('Deve responder com o status 400', async () => {
        const result = await request(app)
          .post('/login')
          .send({
            password: 'secret_user',
          });
        expect(result.status).to.equal(400);
      });

      it('Deve responder com a mensagem \"All fields must be filled\"', async () => {
        const result = await request(app)
          .post('/login')
          .send({
            password: 'secret_user',
          });
        expect(result.body).to.equal({ message: 'All fields must be filled' })
      });
    });

    describe('Quando estiver faltando o password', () => {
      it('Deve responder com o status 400', async () => {
        const result = await request(app)
        .post('/login')
        .send({
          email: 'user@user.com',
        });
        expect(result.status).to.equal(400);
      });

      it('Deve responder com a mensagem \"All fields must be filled\"', async () => {
        const result = await request(app)
        .post('/login')
        .send({
          email: 'user@user.com',
        });
        expect(result.body).to.equal({ message: 'All fields must be filled' })
      });
    });
  })
});
