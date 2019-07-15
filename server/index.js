const express = require('express');
const cors = require('cors');
const db = require('../database/index');
const itemData = require('../database/itemData');
const sellerData = require('../database/sellerData.js');
const port = 3001;

const app = express();

app.use('/', express.static('./client/dist'));
app.use(express.json());
app.use(cors());

// Database has been seeded! Uncomment to seed DB again:
// db.seedDBItems(itemData);
// db.seedDBSellers(sellerData);

app.get('http://localhost:3001/details/:id', (req, res) => {
  db.retrieveItem(req.params.id, response => {
    res.send(response);
  });
});

app.listen(port, () => {
  console.log(`Item Details server listening on port ${port}`);
});
