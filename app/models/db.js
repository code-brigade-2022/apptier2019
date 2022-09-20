'user strict';

var sql;
var connection;

/* if (process.env.NODE_ENV == "development"){

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
} else {
    const config = {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        server: process.env.DB_SERVER,
        port: parseInt(process.env.DB_PORT),
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
    
    sql = require('mssql')
    const pool = new sql.ConnectionPool(config);
    connection = pool.connect(); 
}
 */

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
