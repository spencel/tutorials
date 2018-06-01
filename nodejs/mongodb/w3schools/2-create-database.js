const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/mydb';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	let db = client.db( 'mydb' );

	console.log( 'Database connected and switched to or created!');

	/*var admin = client.admin();
	var options = {};
	admin.listDatabases( options, ( error, result ) => {
		console.log( result );
	});
	var name = 'newCollection';
	var options = {};
	db.createCollection( name, options, ( error, collection ) => {} );

	var filter = {};
	var options = {};
	var collections = db.listCollections( filter, options );
	console.log( collections );*/


	client.close();
});