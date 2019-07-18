module.exports = {
  port: process.env.port,
  host: process.env.host,

  DBCONFIG: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'regretsy_items'
  },
  URL: `http://regretsy-item-details.us-east-2.elasticbeanstalk.com`
};
