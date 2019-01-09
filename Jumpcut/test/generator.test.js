const { request, auth } = require('./common.test');

describe('# Generator APIs', () => {
  let token;

  beforeEach(async () => {        
    let res =  await auth();
    token = res.body.token;
  })

  it('should initialize factorial sequence generator', () => {
    return request.post(`${process.env.API_BASE}/generator/factorialSeq`)
            .set("Authorization", `Bearer ${token}`)
            .expect(201)
            .expect(res => {
              res.body.message.should.equal('Sequencer initialized.');
            });
  })

  it('should not initialize random sequence generator', () => {
    return request.post(`${process.env.API_BASE}/generator/random`)
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect(res => {
              res.body.message.should.equal('Invalid sequencer!');
            });
  })
});
