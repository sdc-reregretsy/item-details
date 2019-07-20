const mysql = require('mysql');
const config = require('../config.js');
// const connection = mysql.createConnection(config.DBCONFIG);

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME
});

// const knex = require('knex')({
//   client: 'mysql',
//   connection: config.DBCONFIG
// });

// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: process.env.RDS_HOSTNAME,
//     user: process.env.RDS_USERNAME,
//     password: process.env.RDS_PASSWORD,
//     port: process.env.RDS_PORT,
//     database: process.env.RDS_DB_NAME
//   }
// });

connection.connect(err => {
  if (err) {
    console.log('Database not connected, error: ', err);
  } else {
    console.log('Database connected!');
  }
});

// connection.query(`DROP TABLE IF EXISTS items`);

// connection.query(
//   `CREATE TABLE items (
//   listing_id BIGINT PRIMARY KEY,
//   title VARCHAR(500),
//   description TEXT CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
//   price VARCHAR(20),
//   quantity INT,
//   sellerName VARCHAR(500),
//   sellerUsername VARCHAR(500),
//   sellerAvatar VARCHAR(500),
//   avgRating INT,
//   cartImage VARCHAR(500),
//   mainImage VARCHAR(500));`,
//   function(err, results) {
//     if (err) {
//       console.log('error in creating table query ', err);
//     }
//   }
// );

const seedDBItems = function(data) {
  const inventory = data.itemData.results;
  inventory.forEach(item => {
    connection.query(
      `INSERT INTO items (listing_id, title, description, price, quantity, cartImage, mainImage) VALUES (${
        item.listing_id
      }, "${item.title}", "${item.description}", "${item.price}", ${
        item.quantity
      }, "${item.MainImage.url_170x135}", "${item.MainImage.url_fullxfull}")`,
      function(error, results) {
        if (error) {
          console.log('Error in seedDB: ', error);
        } else {
          console.log('DB seeded!', results);
        }
      }
    );
  });
};

// const seedDBItems = data => {
//   const inventory = data.itemData.results;
//   inventory.forEach(item => {
//     knex('items')
//       .insert({
//         listing_id: item.listing_id,
//         title: item.title,
//         description: item.description,
//         price: item.price,
//         quantity: item.quantity,
//         cartImage: item.MainImage.url_170x135,
//         mainImage: item.MainImage.url_fullxfull
//       })
//       .then(result => {
//         console.log(item, 'successfully inserted into DB');
//       })
//       .catch(error => {
//         console.log('Error inserting item into DB: ', item, error);
//       });
//   });
// };

const seedDBSellers = function(data) {
  const sellers = data.sellerData;
  sellers.forEach(seller => {
    connection.query(
      `UPDATE items SET sellerName="${seller.sellerName}", sellerUsername="${
        seller.sellerUsername
      }", sellerAvatar="${seller.sellerAvatar}", avgRating=${
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

// const seedDBSellers = function(data) {
//   const sellers = data.sellerData;
//   sellers.forEach(seller => {
//     knex('items')
//       .where({ listing_id: seller.item })
//       .update({
//         sellerName: seller.sellerName,
//         sellerUsername: seller.sellerUsername,
//         sellerAvatar: seller.sellerAvatar,
//         avgRating: seller.avgRating
//       });
//   });
// };

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

// const retrieveItem = (id, callback) => {
//   knex
//     .select()
//     .table('items')
//     .where({ listing_id: id })
//     .then(row => {
//       console.log('Successfully retrieved item details using knex: ', row);
//       callback(row);
//     })
//     .catch(error => {
//       console.log('Error retrieving item: ', error);
//     });
// };

module.exports = { seedDBItems, seedDBSellers, retrieveItem };
