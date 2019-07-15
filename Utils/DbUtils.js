const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://srinivasbekkam:ammu#8598@ds263856.mlab.com:63856/lightbulb";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url, function( err, client ) {
      _db  = client.db('lightbulb');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};