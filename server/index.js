const express = require('express');
const axios = require('axios');
const db = require('../database/index');
const itemData = require('../database/itemData');
const sellerData = require('../database/sellerData.js');
const port = 3001;

const app = express();

app.use('/', express.static('./client/dist'));
app.use(express.json());

// Database has been seeded! Uncomment to seed DB again:
// db.seedDBItems(itemData);
// db.seedDBSellers(sellerData);

app.get('/details/:id', (req, res) => {
  db.retrieveItem(req.params.id, response => {
    res.send(response);
  });
});

// app.post('/details', (req, res) => {
//   res.end();
// });

app.listen(port, () => {
  console.log(`Item Details server listening on port ${port}`);
});
