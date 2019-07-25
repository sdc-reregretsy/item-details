const request = require('supertest');
const app = require('./app');

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
