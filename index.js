const express = require('express');
app = express();
bodyParser = require('body-parser');
var port = 3000;

// Configurar variables de entorno (.env):
let local_test = true;
var dotenv = require('dotenv');
if (local_test){
    dotenv_path = './env/.env';
    dotenv.config({path: dotenv_path});
}

// CORS:
var cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

const sql = require('mssql')
/* 
// connection configurations
const mc = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'copaDataSet'
}); 
// connect to database
mc.connect();
*/

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

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
