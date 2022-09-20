'user strict';

var sql;
var connection;
var host = process.env.DB_HOST || "localhost";
var user = process.env.DB_USERNAME || "root";
var password = process.env.DB_PASSWORD || "";
var database = process.env.DB_DATABASE || "copadataset";

sql = require('mysql');
//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = sql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
