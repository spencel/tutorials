const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var collectionName = 'customers';
	var collectionOptions = {};
	var findQuery = {};
	var findOptions = {};
	//var sortKeyOrList = "" // or [] or {}
	var sortDirection = {  // 1 (alphabetically or ascending) or -1 (unalphabetically or descending)
		name: 1
	};
	db.collection(
		collectionName,
		collectionOptions,
		( error, collection ) => {
			if ( error ) throw error;
		}
	).find( findQuery, findOptions )
	.sort( /*sortKeyOrList,*/ sortDirection )
	.toArray( ( error, result ) => {
		if ( error ) throw error;
		console.log( 'result:' );
		console.log( result );
		client.close();
	});
});
