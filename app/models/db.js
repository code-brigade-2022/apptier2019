'user strict';

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    connectionTimeout: 3000,
    parseJSON: true,
    options: {
      encrypt: true,
      enableArithAbort: true
    },
    pool: {
      min: 0,
      idleTimeoutMillis: 3000
    }
};

const pool = new sql.ConnectionPool(config);
const connection = pool.connect();

/* var mysql = require('mysql');

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
}); */

module.exports = connection;
