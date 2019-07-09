var mysql = require('mysql');
var connection = mysql.createConnection(require('../config.js'));

connection.connect((err) => {
    if (err) {
        console.log('database not connected, error: ', err);
    } else {
        console.log('database connected!');
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

module.exports = { seedDB };