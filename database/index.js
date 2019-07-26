const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST,
  port:  process.env.PGPORT,
  database: process.env.PGDATABASE,
});

module.exports = client;
