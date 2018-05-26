const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	db.collection( 'customers' ).findOne( {}, ( error, result ) => {
		
	});

	client.close();

});