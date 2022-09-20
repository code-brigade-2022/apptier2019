var sql;
var connection;
var user = process.env.DB_USERNAME || "root";
var password = process.env.DB_PASSWORD || "";
var database = process.env.DB_DATABASE || "copadataset";
var server = process.env.DB_SERVER || "localhost";
var port = process.env.DB_PORT || "3306";

var sql = require('mysql');
//grant all privileges on copaDataSet.* to admin@'%' identified by 'copadb2020';
//local mysql db connection
var connection = sql.createConnection({
    host: server,
    user: user,
    password: password,
    database: database
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
