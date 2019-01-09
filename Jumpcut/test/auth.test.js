const { request, auth } = require('./common.test');

describe('# Auth APIs', () => {
  it('should retrieve the token', () => {
    return auth().then(res => {
      res.status.should.equal(200);
      res.body.token.should.not.be.empty;
    });
  });

  it('should not authenticate with wrong password', () => {
    return request.post(`${process.env.API_BASE}/authenticate`)
            .send()
            .expect(400);
  })
});
