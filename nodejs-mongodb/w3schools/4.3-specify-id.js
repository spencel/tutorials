const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );
	
	var myDocuments = [
		{ _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
	]

	db.collection( 'products' ).insertMany( myDocuments, ( error, response ) => {
		if ( error ) throw error;
		console.log( response );
	})

	client.close();

});