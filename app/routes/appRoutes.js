module.exports = function(app) {
  var Airports = require('../controller/appController.js');
  var Distance = require('../controller/appController.js');

  app.get('/envs', (req, res) => {
    res.json({
        node_env: process.env.NODE_ENV,
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
  });

  app.get('/', (req, res) => {
    res.send('Hola')
  });

  app.get('/airports', function(req, res) {
    res.send('Hola')
  });

  app.get('/distances', function(req, res) {
    res.send('Hola')
  });

};
