'user strict';

var sql;
var connection;

sql = require('mysql');
//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
