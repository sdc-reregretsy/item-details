var mysql = require('mysql');
var connection = mysql.createConnection(require('../config.js'));

connection.connect((err) => {
    if (err) {
        console.log('Database not connected, error: ', err);
    } else {
        console.log('Database connected!');
    }
});

const seedDB = function (data) {
    const inventory = data.data.results;
    inventory.forEach(item => {
        connection.query(`INSERT INTO items (listing_id, title, description, price) VALUES (${item.listing_id}, "${item.title}", "${item.description}", ${item.price})`, function (error, results) {
            if (error) {
                console.log('Error in seedDB: ', error)
            } else {
                console.log('DB seeded!');
            }
        })

    })
};

const retrieveItem = function (id, callback) {
    connection.query(`SELECT * FROM items WHERE listing_id=${id};`, (error, results) => {
        if (error) {
            console.log('Error retrieving item: ', error)
        } else {
            console.log('Item retrieved:', results);
            callback(results);
        }
    })
}


module.exports = { seedDB, retrieveItem };