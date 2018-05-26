const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	client.db( 'mydb' );

	console.log( 'Database connected and switched to or created!');

	client.close();
} )