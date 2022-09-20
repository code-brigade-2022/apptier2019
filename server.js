const express = require('express');
app = express();
bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

// Configurar variables de entorno (.env):
const fs = require("fs");
const env_file = './env/.env';
if (fs.existsSync(env_file)){
    const dotenv = require('dotenv');
    const dotenv_path = './env/.env';
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

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
