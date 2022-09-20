//var sql = require('./db.js');

// DB...
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

// Modelos:

//Airport object constructor
var Airport = function(Airport) {
  this.Airport = Airport.Airport;
  this.status = Airport.status;
  this.created_at = new Date();
};

var Distance = function(Distance) {
  this.Distance = Distance.Distance;
  this.status = Distance.status;
  this.created_at = new Date();
};

Airport.getAllAirport = function(result) {
    result(null, {airports: 2});
};

Distance.getAllDistance = function(result) {
    conn.connect().then(function () {
        var sql_req = new sql.Request(conn);
        var consulta = 'Select * from distancias';
        sql_req.query(consulta)
        .then(function(res) {
            result(null, {distance: {distanceList: res}});
            conn.close();
        })
    })
};

module.exports.Airport = Airport;
module.exports.Distance = Distance;
