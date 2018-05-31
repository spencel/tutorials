const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var collectionName = 'customers';
	var collectionOptions = {};
	var findQuery = {};
	var findOptions = {};
	db.collection( collectionName, collectionOptions, ( error, collection ) => {
		if ( error ) throw error;
	}).find( findQuery, findOptions )
	.toArray( ( error, documents ) => {
		if ( error ) throw error;
		console.log( 'documents:' );
		console.log( documents );
		client.close();
	});
});