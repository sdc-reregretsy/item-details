const app = require('./app');

const PORT = process.env.SERVER_PORT;
const HOST = process.env.SERVER_HOST;

app.listen(PORT, HOST, () => {
  console.log(`Item Details server listening on host ${HOST} port ${PORT}`);
});
