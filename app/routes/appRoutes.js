'use strict';
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
    res.send('Hello World!')
  });

  app.get('/airports', function(req, res) {
    -Airports.list_all_Airports(req, res);
  });

  app.get('/distances', function(req, res) {
    -console.log('from:', req.query.from);
    console.log('to:', req.query.to);
    Distance.list_all_Distances(req, res);
  });

  //app.route('/airports')
  // .get(Airports.list_all_Airports, );
  //app.route('/distances')
  //  .get(Airports.list_all_distances, );
};
