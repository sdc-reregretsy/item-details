var mysql = require('mysql');
var connection = mysql.createConnection(require('../config.js'));

connection.connect(err => {
  if (err) {
    console.log('Database not connected, error: ', err);
  } else {
    console.log('Database connected!');
  }
});

const seedDBItems = function(data) {
  const inventory = data.itemData.results;
  inventory.forEach(item => {
    connection.query(
      `INSERT INTO items (listing_id, title, description, price, quantity, cartImage) VALUES (${
        item.listing_id
      }, "${item.title}", "${item.description}", "${item.price}", ${
        item.quantity
      }, "${item.MainImage.url_170x135}")`,
      function(error, results) {
        if (error) {
          console.log('Error in seedDB: ', error);
        } else {
          console.log('DB seeded!');
        }
      }
    );
  });
};

const seedDBSellers = function(data) {
  const sellers = data.sellerData;
  sellers.forEach(seller => {
    connection.query(
      `UPDATE items SET seller = "${seller.seller}", avgRating = ${
        seller.avgRating
      } WHERE listing_id = ${seller.item}`,
      function(error, results) {
        if (error) {
          console.log('Error in seedDB: ', error);
        } else {
          console.log('DB seeded!');
        }
      }
    );
  });
};

const retrieveItem = function(id, callback) {
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

module.exports = { seedDBItems, seedDBSellers, retrieveItem };
