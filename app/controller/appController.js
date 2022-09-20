var Airport = require('../models/appModel.js').Airport;
var Distance = require('../models/appModel.js').Distance;

exports.list_all_Airports = function(req, res) {
  Airport.getAllAirport(function(err, Airport) {
    console.log('controller');
    if (err) res.send(err);
    console.log('res', Airport);
    res.json(Airport);
  });
};

exports.list_all_Distances = function(req, res) {
  Distance.getAllDistance(req, function(err, Distance) {
    console.log('controller');
    if (err) res.send(err);
    console.log('res', Distance);
    res.json(Distance);
  });
};