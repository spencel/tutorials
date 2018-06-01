// set jshint to not warn when using newer keywords or syntax
/*jshint esversion: 6*/
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/';
//var options = {};
mongodb.MongoClient.connect(url, /*options,*/ (error, client) => {
	if (error) {console.error(error); client.close(); return;}
	console.log('connected to database');

	// get database
	var dbName = 'mydb';
	var options = {};
	var db = client.db(dbName, options);

	var collectionName = 'customers';
	var collectionOptions = {};
	console.log('starting update');
		// get collection
	db.collection(
		collectionName,
		collectionOptions,
		(error, collection) => {
			if (error) {console.error(error); client.close(); return;}
			console.log('collection:');
			console.log(collection);
		}
	)
	.find().limit(5)
	.toArray(
		(error, documents) => {
			if (error) {console.error(error); client.close(); return;}
			console.log('documents:');
			console.log(documents);
			client.close();
		}
	);
});