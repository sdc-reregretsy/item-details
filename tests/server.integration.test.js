const { Client } = require('pg');
const request = require('supertest');

const mockClient = new Client({
  host: 'localhost',
  port: 5432,
  database: 'test_reregretsy_database',
});
jest.mock('../database/index', () => mockClient);

const app = require('../server/app');
const { retrieve } = require('../database/methods');

describe('Database connection', () => {
  test('should connect to test database', async () => {
    const result = await mockClient.query('select * from products');
    expect(result.rows.length).toBe(3);
  });
});

describe('GET /products/{id}', () => {
  const id = '1213d10e-b6b5-4d6d-af44-2b10d334ed52';
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
    const regex = /(\w|\d|-)+$/g;
    const actual = result.req.path.match(regex);
    expect(actual).toContain(id);
  });
});

afterAll(() => mockClient.end());
