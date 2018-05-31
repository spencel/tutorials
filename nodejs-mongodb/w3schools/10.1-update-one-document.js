const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/';
//var options = {};
mongodb.MongoClient.connect(url, /*options,*/ (error, client) => {
	if (error) {console.error(error); return;}
	console.log('connected to database');

	// get database
	var dbName = 'mydb';
	var options = {}
	var db = client.db(dbName, options);

	var collectionName = 'customers';
	var collectionOptions = {};
	var updateOneFilter = {
		address: 'Valley 345'
	};
	var updateOneUpdate = {
		$set: {
			name: 'Mickey',
			address: 'Canyon 123'
		}
	};
	var updateOneOptions = {};
	console.log('starting update');
	new Promise((resolve, reject) => {
		db.collection(
			collectionName,
			collectionOptions,
			(error, collection) => {
				if (error) {console.error(error); return;}
				console.log('collection:');
				console.log(collection);
			}
		)
		.updateOne(
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
	.then(resolution => {
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
