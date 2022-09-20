var sql = require("mssql");

var user = process.env.DB_USERNAME || "root";
var password = process.env.DB_PASSWORD || "";
var database = process.env.DB_DATABASE || "copadataset";
var server = process.env.DB_SERVER || "localhost";
var port = process.env.DB_PORT || 3306;

var dbConfig = {
    server: server,
    database: database,
    user: user, 
    password: password, 
    port: port,
    options: {
          encrypt: true
      }
   };

var conn = new sql.ConnectionPool(dbConfig);
conn.connect();
var req = new sql.Request(conn);

module.exports = req;
