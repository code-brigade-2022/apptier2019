//var sql = require('./db.js');

//Airport object constructor
var Airport = function(Airport) {
  this.Airport = Airport.Airport;
  this.status = Airport.status;
  this.created_at = new Date();
};

var Distance = function(Distance) {
  this.Distance = Distance.Distance;
  this.status = Distance.status;
  this.created_at = new Date();
};

Airport.getAllAirport = function(result) {
    result(null, {airports: 1});
};

Distance.getAllDistance = function(req, result) {
    result(null, {distance: {distanceList: 2}});
};

module.exports.Airport = Airport;
module.exports.Distance = Distance;
