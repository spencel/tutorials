const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var name = 'customers';
	var options = {};
	db.collection( name, options, ( error, collection ) => {
		if ( error ) throw error;
	}).findOne( {}, ( error, result ) => {
		if ( error ) throw error;
		console.log( result );
		client.close();
	});

});