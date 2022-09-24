'use strict';

var Airport = require('../models/appModel.js').Airport;
var Distance = require('../models/appModel.js').Distance;

exports.list_all_airports = function (req, res) {
    Airport.getAllAirports(function (err, Airport) {
        if (err) res.send(err);
        res.json(Airport);
    });
};

exports.get_distance = function (req, res) {
    Distance.getDistance(req, function (err, Distance) {
        if (err) res.send(err);
        res.json(Distance);
    });
};