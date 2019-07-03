const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
