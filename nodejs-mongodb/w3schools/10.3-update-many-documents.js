// set jshint to not warn when using newer keywords or syntax
/*jshint esversion: 6*/
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/';
//var options = {};
mongodb.MongoClient.connect(url, /*options,*/ (error, client) => {
	if (error) {console.error(error); return;}
	console.log('connected to database');

	// get database
	var dbName = 'mydb';
	var options = {};
	var db = client.db(dbName, options);

	var collectionName = 'customers';
	var collectionOptions = {};
	var updateOneFilter = {
		address: /^S/
	};
	var updateOneUpdate = {
		$set: {
			name: 'Minnie'
		}
	};
	var updateOneOptions = {};
	console.log('starting update');
	new Promise((resolve, reject) => {
		// get collection
		db.collection(
			collectionName,
			collectionOptions,
			(error, collection) => {
				if (error) {console.error(error); return;}
				console.log('collection:');
				console.log(collection);
			}
		)
		.updateMany(
			updateOneFilter,
			updateOneUpdate,
			updateOneOptions,
			(error, result) => {
				if (error) {console.error(error); return;}
				console.log('result:');
				console.log(result);
				resolve({});
			}
		);
	})
	// show results
	.then(resolution => {
		// get collection
		db.collection('customers', {})
		.find({}, {})
		.toArray((error, documents) => {
			if (error) {console.error(error); return;}
			console.log('documents:');
			console.log(documents);
			client.close();
		});
	});
});