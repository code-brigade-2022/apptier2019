const express = require('express');
app = express();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('API server started on: ' + port);

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
