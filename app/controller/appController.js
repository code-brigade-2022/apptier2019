var Airport = require('../models/appModel.js').Airport;
var Distance = require('../models/appModel.js').Distance;

exports.list_all_Airports = function(req, res) {
  Airport.getAllAirport(function(err, airports) {
    if (err) res.send(err);
    res.json(airports);
  });
};

exports.list_all_Distances = function(req, res) {
    Distance.getAllDistance(function(err, distances) {
        if (err) res.send(err);
        res.json(distances);
    });
};