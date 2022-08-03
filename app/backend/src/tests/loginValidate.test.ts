import * as sinon from 'sinon';
import * as chai from 'chai';
import resetDatabase from './assets/resetDatabase';
const request = require('supertest');
import { app } from '../app';
import { Response } from 'supertest';

const { expect } = chai;

describe('<GET /login/validate>', () => {
  describe('Sem um Token JWT', () => {
    let response: Response;

    before(async () => {
      response = await request(app).get('/login/validate');
    })

    it('Deve responder com o status 401', () => {
      expect(response.status).to.equal(401);
    })

    it('Deve responder com a mensagem \"Token must be a valid token\"', () => {
      expect(response.status).to.equal(401);
    })
  });

  describe('Com um token JWT', () => {
    describe('Deve informar os dados corretos para um usuario', () => {
      let response: Response;

      before(async () => {
        const { body: { token } } = await request(app).post('/login')
          .send({
            email: 'user@user.com',
            password: 'secret_user'
          })

        response = await request(app).get('/login/validate')
          .set({authorization: token });
      })
  
      it('Deve responder com o status 200', () => {
        expect(response.status).to.equal(401);
      })

      it('Deve informar a \"role\" corretamente', () => {
        expect(response.body).to.equal({role: 'user'});
      })
    })

    describe('Deve informar os dados corretos para um admin', () => {
      let response: Response;

      before(async () => {
        const { body: { token } } = await request(app).post('/login')
          .send({
            email: 'admin@admin.com',
            password: 'secret_admin'
          })

        response = await request(app).get('/login/validate')
          .set({authorization: token });
      })
  
      it('Deve responder com o status 200', () => {
        expect(response.status).to.equal(401);
      })

      it('Deve informar a \"role\" corretamente', () => {
        expect(response.body).to.equal({role: 'admin'});
      })
    })
  })
});
