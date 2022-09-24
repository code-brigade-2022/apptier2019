'user strict';
var sql = require('./db.js');

//Airport object constructor
var Airport = function (Airport) {
    this.Airport = Airport.Airport;
    this.status = Airport.status;
    this.created_at = new Date();
};

var Distance = function (Distance) {
    this.Distance = Distance.Distance;
    this.status = Distance.status;
    this.created_at = new Date();
};

Airport.getAllAirports = function (result) {
    sql.query('Select * from aeropuertos', function (err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, { airports: res });
        }
    });
};

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
};

module.exports.Airport = Airport;
module.exports.Distance = Distance;
