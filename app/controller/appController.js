'use strict';

var Airport = require('../models/appModel.js').Airport;
var Distance = require('../models/appModel.js').Distance;

exports.list_all_Airports = function(req, res) {
  Airport.getAllAirport(function(err, Airport) {
    if (err) res.send(err);
    res.json(Airport);
  });
};

exports.list_all_Distances = function(req, res) {
  Distance.getAllDistance(req, function(err, Distance) {
    if (err) res.send(err);
    res.json(Distance);
  });
};