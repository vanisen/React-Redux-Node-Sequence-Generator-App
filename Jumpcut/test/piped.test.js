const { request, auth } = require('./common.test');

describe('# Piped Generator APIs', () => {
  let token;

  beforeEach(async () => {        
    let res =  await auth();
    token = res.body.token;
  })

  it('should initialize piped factorial sequence generator with isEven pipe', () => {
    return request.post(`${process.env.API_BASE}/piped/factorialSeq/isEven`)
            .set("Authorization", `Bearer ${token}`)
            .expect(201)
            .expect(res => {
              res.body.message.should.equal('Pipeed sequencer initialized.');
            });
  })

  it('should not initialize piped random sequence generator with isEven pipe', () => {
    return request.post(`${process.env.API_BASE}/piped/random/isEven`)
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect(res => {
              res.body.message.should.equal('Invalid sequencer or pipe!');
            });
  })

  it('should not initialize piped factorial sequence generator with random pipe', () => {
    return request.post(`${process.env.API_BASE}/piped/factorialSeq/random`)
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect(res => {
              res.body.message.should.equal('Invalid sequencer or pipe!');
            });
  })
});
