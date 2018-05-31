const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var collectionName = 'customers';
	db.createCollection( 
		collectionName,
		( error, response ) => {
			if ( error ) throw error;
			console.log( 'Collection created!' );
		}
	);

	var collectionName = 'customers';
	var collectionOptions = {};
	var dropOptions = {
		address: /^O/ // delete records with address starting with O
	};
	var deleteManyOptions = {};
	db.collection(
		collectionName,
		collectionOptions,
		( error, collection ) => {
			if ( error ) throw error;
		}
	).drop(
		dropOptions,
		( error, wasDropped ) => {
			if ( error ) throw error;
			console.log( 'wasDropped:' );
			console.log( wasDropped ); // equals true if collection was dropped
			client.close();
		}
	);
});
