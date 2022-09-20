const express = require('express');
app = express();
var node_env = process.env.NODE_ENV || "development";

var port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on: ' + port);

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
