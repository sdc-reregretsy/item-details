const express = require('express');
const axios = require('axios');
const db = require('../database/index');
const data = require('../database/data');
const port = 3001;

const app = express();

app.use('/', express.static('./client/dist'));
app.use(express.json());

// Database has been seeded! Uncomment to seed DB again:
// db.seedDB(data);

app.get('/', (req, res) => {
  res.send();
});

app.post('/', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`Item Details Server listening on port ${port}`);
});
