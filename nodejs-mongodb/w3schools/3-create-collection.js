const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	db.createCollection( 'customers', ( error, response ) => {
		if ( error ) throw error;
		console.log( 'Collection create!' );
	});

	client.close();
});