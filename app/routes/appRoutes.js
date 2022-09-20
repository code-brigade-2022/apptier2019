module.exports = function(app) {
  var Airports = require('../controller/appController.js');
  var Distance = require('../controller/appController.js');

  app.get('/envs', (req, res) => {
    res.json({
        node_env: process.env.NODE_ENV,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        server: process.env.DB_SERVER,
        port: process.env.DB_PORT
    })
  });

  app.get('/', (req, res) => {
    res.send('Hola')
  });

  app.get('/airports', function(req, res) {
    Airports.list_all_Airports(req, res);
  });

  app.get('/distances', function(req, res) {
    Distance.list_all_Distances(req, res);
  });

};
