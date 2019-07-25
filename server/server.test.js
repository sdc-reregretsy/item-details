const request = require('supertest');
const app = require('./app');

jest.mock('../database/index', () => ({
  retrieveItem: (id, cb) => cb([{}]),
}));

describe('GET /', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).get('/');
  });

  test('responds with html', () => expect(result.type).toBe('text/html'));

  test('responds with status code of 200', () => expect(result.status)
    .toBe(200));

  test('serves compressed content', () => {
    const regex = /Accept-Encoding: gzip/g;
    const match = result.req._header.match(regex).length > 0;
    expect(match).toBe(true);
  });
});

describe('POST /', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).post('/');
  });

  test('responds with status code of 404', () => expect(result.status)
    .toBe(404));
});

describe('GET /products', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).get('/products');
  });

  test('responds with status code of 404', () => expect(result.status)
    .toBe(404));
});

describe('POST /products', () => {
  let result;
  beforeAll(async () => {
    result = await request(app).post('/products');
  });

  test('responds with status code of 404', () => expect(result.status)
    .toBe(404));
});

describe('GET /products/{id}', () => {
  const id = '0';
  let result;
  beforeAll(async () => {
    result = await request(app).get(`/products/${id}`);
  });

  test('responds with html', () => expect(result.type)
    .toBe('application/json'));

  test('responds with status code of 200', () => expect(result.status)
    .toBe(200));

  test('serves compressed content', () => {
    const regex = /Accept-Encoding: gzip/g;
    const match = result.req._header.match(regex).length > 0;
    expect(match).toBe(true);
  });

  test('route should reflect correct product id', () => {
    const regex = /\d+$/g;
    const actual = result.req.path.match(regex);
    expect(actual).toContain(id);
  });

  // test('has a db method that responds correctly', () => {
  //   expect(result.body[0]).toHaveProperty('avgRating');
  //   expect(result.body[0]).toHaveProperty('cartImage');
  //   expect(result.body[0]).toHaveProperty('description');
  //   expect(result.body[0]).toHaveProperty('item_id');
  //   expect(result.body[0]).toHaveProperty('mainImage');
  //   expect(result.body[0]).toHaveProperty('price');
  //   expect(result.body[0]).toHaveProperty('quantity');
  //   expect(result.body[0]).toHaveProperty('sellerAvatar');
  //   expect(result.body[0]).toHaveProperty('sellerHandle');
  //   expect(result.body[0]).toHaveProperty('sellerName');
  //   expect(result.body[0]).toHaveProperty('title');
  // });
});

describe('POST /products/{id}', () => {
  const id = '0';
  let result;
  beforeAll(async () => {
    result = await request(app).post(`/products/${id}`);
  });

  test('responds with status code of 404', () => expect(result.status)
    .toBe(404));
});
