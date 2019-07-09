const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const axios = require("axios");

app.use(express.json());
app.use(express.static("dist"));

app.get('/', (req, res) => {
  res.send();
})

axios.get('')

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
