process.env.NODE_ENV = 'test';
process.env.API_BASE = '/api'

const app     = require('../app');
const chai    = require('chai');
const should  = chai.should();
const request = require('supertest')(app);

const user = { username: 'test', password: 'test' };
const auth = async () => {
  return request.post(`${process.env.API_BASE}/authenticate`)
          .send(user)
          .expect(200);
}

module.exports = {
  app,
  chai,
  auth,
  user,
  should,
  request
}
