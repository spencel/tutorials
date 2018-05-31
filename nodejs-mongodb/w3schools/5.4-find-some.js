const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var collectionName = 'customers';
	var collectionOptions = {
	};
	var findQuery = {};
	var findOptions = {
		projection: {
			address: 0 // 0 denotes a field should not be returned
		}
	};
	db.collection(
		collectionName,
		collectionOptions,
		( error, collection ) => {
			if ( error ) throw error;
		}).find( findQuery, findOptions )
	.toArray( ( error, result ) => {
		if ( error ) throw error;
		console.log( 'result:' );
		console.log( result );
		client.close();
	});
});
