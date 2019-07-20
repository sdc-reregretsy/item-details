const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index');
const itemData = require('../database/itemData');
const sellerData = require('../database/sellerData.js');
const { port, host } = require('../config.js');
const app = express();

app.use('/', express.static('./client/dist'));
app.use(express.json());
app.use(cors());
app.use(compression());

const PORT = port || 3001;
const HOST = host || '0.0.0.0';

// Database has been seeded! Uncomment to seed DB again:
// db.seedDBItems(itemData);
// db.seedDBSellers(sellerData);

app.get('/details/:id', (req, res) => {
  db.retrieveItem(req.params.id, response => {
    res.send(response);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Item Details server listening on host ${HOST} port ${PORT}`);
});
