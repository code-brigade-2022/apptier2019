var sql;
var connection;
var user = process.env.DB_USERNAME || "root";
var password = process.env.DB_PASSWORD || "";
var database = process.env.DB_DATABASE || "copadataset";
var server = process.env.DB_SERVER || "localhost";
var port = process.env.DB_PORT || "3306";

// Con Mysql
var sql = require('mysql');
var connection = sql.createConnection({
    host: server,
    user: user,
    password: password,
    database: database
});
connection.connect(function(err) {
    if (err) throw err;
});

// Con Mssql




module.exports = connection;
