'user strict';

var mysql = require('mysql');

//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = mysql.createConnection({
  host: '',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
