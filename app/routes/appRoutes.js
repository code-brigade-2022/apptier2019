'use strict';

module.exports = function (app) {
    var Airports = require('../controller/appController.js');
    var Distance = require('../controller/appController.js');

    app.get('/', function (req, res) {
        res.json({ "Hola": "Adiós" });
    });

    app.get('/airports', function (req, res) {
        Airports.list_all_airports(req, res);
    });

    app.get('/distance', function (req, res) {
        Distance.get_distance(req, res);
    });
};