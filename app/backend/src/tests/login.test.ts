import * as sinon from 'sinon';
import * as chai from 'chai';
import resetDatabase from './assets/resetDatabase';
const request = require('supertest');
import { app } from '../app';
import { Response } from 'supertest';

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
        expect(result.body.message).to.equal('All fields must be filled')
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
        expect(result.body.message).to.equal('All fields must be filled')
      });
    });
  })

  describe('Quando o formato dos dados estiverem corretos', () => {
    let response: Response;

    before(async () => {
      response = await request(app).post('/login').send({
        email: 'user@user.com',
        password: 'secret_user'
      })
    })

    describe('Quando os dados estiverem corretos', () => {
      it('Deve ter o status 400', () => {
        expect(response.status).to.equal(200);
      })

      it('Deve conter um token', () => {
        expect(response.body.token).not.be.undefined;
      })
    })
  });
});
