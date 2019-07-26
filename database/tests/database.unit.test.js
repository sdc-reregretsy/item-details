const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'test_reregretsy_database',
  user: 'ross',
  password: '',
});

describe('Database helper functions', () => {
  test('should connect to DB', async () => {
    await client.connect();
    const result = await client.query('select * from products');
    expect(result.rows.length).toBe(3);
  });
});

afterAll(async () => client.end());
