const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );
	var myDocument = {
		name: 'Company Inc',
		address: 'Highway 38'
	};

	new Promise( ( resolve, reject ) => {
		db.collection( 'customers' ).insertOne( myDocument, ( error, response ) => {
			if ( error ) throw error;
			console.log( '1 document inserted' );
		});
	});
 
	new Promise( ( resolve, reject) => {
		resolve( db.collections() );
	}).then( resolved => {
		console.log( resolved );
	});

	new Promise( ( resolve, reject) => {
		resolve( db.collection( 'customers' ).find() );
	}).then( resolved => {
		console.log( resolved );
	});

	client.close();

});