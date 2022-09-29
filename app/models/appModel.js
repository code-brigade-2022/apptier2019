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

/* 
Distance.getDistance = async function () {
    let orig = req.query.orig;
    let dest = req.query.dest;
    const querySpec = {
        query: `SELECT * FROM distancias d WHERE d.ORIG_CD = '${orig}' AND d.DEST_CD = '${dest}'`,
        parameters: [
            {
                name: '@country',
                value: 'USA'
            }
        ]
    }

    const { resources: results } = await client
        .database(process.env.DB_NAME)
        .container("distancias")
        .items.query(querySpec)
        .fetchAll()
    for (var queryResult of results) {
        let resultString = JSON.stringify(queryResult)
        console.log(`\tQuery returned ${resultString}\n`)
    }
}

Distance.getDistance = function (req, result) {
    let orig = req.query.orig;
    let dest = req.query.dest;
    var query = `SELECT MILES FROM distancias WHERE (ORIG_CD = '${orig}') AND DEST_CD = '${dest}'`;

    sql.query(query, function (err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}; */
