'use strict';

module.exports = function (app) {
    var controller = require('../controller/appController.js');

    app.get('/', function (req, res) {
        res.json({ "Hola": "Adiós" });
    });

    app.get('/airports', function (req, res) {
        controller.list_all_airports(req, res);
    });

    app.get('/distance', function (req, res) {
        controller.get_distance(req, res);
    });
};