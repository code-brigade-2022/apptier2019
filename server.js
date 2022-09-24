var express = require('express');
var bodyParser = require('body-parser');

app = express();

var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route

var port = 3000;
app.listen(port);
console.log('API server started on: ' + port);