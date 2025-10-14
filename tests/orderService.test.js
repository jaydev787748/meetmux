const request = require('supertest');
const appUser = require('../src/user-service/app');
const appOrder = require('../src/order-service/app');

let userId;

beforeAll(async () => {
  // Create user first
  const res = await request(appUser)
    .post('/users')
    .send({ name: 'Jay', email: 'jay@example.com' });
  userId = res.body.id;
});

describe('Order Service', () => {
  it('creates order with valid user', async () => {
    const res = await request(appOrder)
      .post('/orders')
      .send({ userId, product: 'Book', quantity: 2 })
      .expect(201);
    expect(res.body).toHaveProperty('id');
  });

  it('fails to create order with invalid user', async () => {
    await request(appOrder)
      .post('/orders')
      .send({ userId: 'invalid', product: 'Book', quantity: 2 })
      .expect(400);
  });
});
