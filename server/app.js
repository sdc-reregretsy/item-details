require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index');

const app = express();

app.use('/', express.static('./client/dist'));
app.use(express.json());
app.use(cors());
app.use(compression());

app.get('/products/:id', (req, res) => {
  db.retrieveItem(req.params.id, (response) => {
    res.send(response);
  });
});

module.exports = app;
