const { Client } = require('pg');
const { retrieve } = require('../methods');

// jest.mock('../index.js', () => {});

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'test_reregretsy_database',
});

describe('Database helper functions', () => {
  test('should connect to DB', async () => {
    await client.connect();
    const result = await client.query('select * from products');
    expect(result.rows.length).toBe(3);
  });

  test('retrieves existing item from db', async () => {
    const id = '1213d10e-b6b5-4d6d-af44-2b10d334ed52';
    const result = retrieve(id);
    const expected = {
      id: '1213d10e-b6b5-4d6d-af44-2b10d334ed52',
      product_name: 'Small Soft Ball',
      product_price: 131,
      img_url: 'http://lorempixel.com/640/480/nature',
      seller_name: 'Colleen Hand',
      seller_username: 'Madaline_Greenholt',
      seller_avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bpartridge/128.jpg',
    };
    expect(result.rows[0]).toMatchObject(expected);
  });

  test('doesn\'t retrieve all items with no input', async () => {
    const id = '';
    const expected = await retrieve(id);
    expect(expected).toMatchObject([]);
  });

  test('doesn\'t retrieve items that don\'t exist', async () => {
    const id = 'thisisnotanid';
    const expected = await retrieve(id);
    expect(expected).toMatchObject([]);
  });
});

afterAll(async () => client.end());
