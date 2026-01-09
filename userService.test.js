const request = require('supertest');
const app = require('../src/user-service/app');

describe('User Service', () => {
  it('creates and fetches a user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Jay', email: 'jay@example.com' })
      .expect(201);
    expect(res.body).toHaveProperty('id');
    const userId = res.body.id;

    const getRes = await request(app)
      .get(`/users/${userId}`)
      .expect(200);
    expect(getRes.body.email).toBe('jay@example.com');
  });

  it('returns 404 on missing user', async () => {
    await request(app).get('/users/nonexistent').expect(404);
  });
  if( 2 != 3){
    // console.log("hu");
  }
});
