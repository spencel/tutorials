const mongodb = require( 'mongodb' );

var url = 'mongodb://localhost:27017/';

mongodb.MongoClient.connect( url, ( error, client ) => {
	if ( error ) throw error;

	var db = client.db( 'mydb' );

	var collectionName = 'customers';
	var collectionOptions = {};
	var deleteManyFilter = {
		address: /^O/ // delete records with address starting with O
	};
	var deleteManyOptions = {};
	db.collection(
		collectionName,
		collectionOptions,
		( error, collection ) => {
			if ( error ) throw error;
		}
	).deleteMany(
		deleteManyFilter,
		deleteManyOptions,
		( error, result ) => {
			if ( error ) throw error;
			console.log( 'result:' );
			console.log( result ); // deleteCount should be 1 as long as a record had existed
			client.close();
		}
	);
});
