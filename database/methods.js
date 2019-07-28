const connection = require('./index');

(async () => {
  await connection.connect()
    .then(() => console.log('DB connected'));
})();

const retrieve = id => connection.query(`SELECT * FROM products WHERE id='${id}'`)
  .then(result => result.rows)
  .catch(console.error);

module.exports = { retrieve };
