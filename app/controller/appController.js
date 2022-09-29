'use strict';

var model = require('../models/appModel.js');

exports.list_all_airports = async function (req, res) {
    try {
        res.json(await model.getAllAirports())
    } catch(err) {
        res.json({"Error": err})
    }
};

exports.get_distance = async function (req, res) {
    try {
        res.json(await model.getDistance(req))
    } catch(err) {
        res.json({"Error": err})
    }
};