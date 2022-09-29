'user strict';

var client = require('./db.js');
var model = {};

model.getAllAirports = async function () {
    const querySpec = {
        query: 'SELECT a.IATA, a.Airport, a.Location FROM aeropuertos a'
    }

    const { resources: results } = await client
    .database(process.env.DB_NAME)
    .container("aeropuertos")
    .items.query(querySpec)
    .fetchAll()
    return results;
}

model.getDistance = async function (req) {
    const querySpec = {
        query: `SELECT d.MILES FROM distancias d WHERE d.ORIG_CD = @orig AND d.DEST_CD = @dest`,
        parameters: [
          {
            name: '@orig',
            value: req.query.orig
          },
          {
            name: '@dest',
            value: req.query.dest
          },
        ]
    }

    const { resources: results } = await client
    .database(process.env.DB_NAME)
    .container("distancias")
    .items.query(querySpec)
    .fetchAll()
    return results;
}

module.exports = model;