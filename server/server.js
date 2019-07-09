const express = require("express");
const path = require("path");
const axios = require("axios");
const db = require("../database/index");
const data = require("../database/data");
const port = 3001;

const app = express();

app.use(express.json());
app.use(express.static("dist"));

// Database has been seeded!
// db.seedDB(data);

app.get('/', (req, res) => {
  res.send();
});

app.post('/', (req, res) => {
  res.end();
});

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
