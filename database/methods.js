const connection = require('./index');

const retrieve = (id, callback) => {
  connection.query(
    `SELECT * FROM items WHERE listing_id=${id};`,
    (error, results) => {
      if (error) {
        console.log('Error retrieving item: ', error);
      } else {
        console.log('Item retrieved:', results);
        callback(results);
      }
    }
  );
};

module.exports = { retrieve };
