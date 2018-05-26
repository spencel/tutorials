const mongodb = require( 'mongodb' );

mongodb.MongoClient.connect( 'mongodb://localhost:27017/', ( error, client ) => {
	
	var db = client.db( 'mydb' );

	db.createCollection( 'myCollection' );

	db.collection( 'myCollection' ).insert({
	   title: 'MongoDB Overview', 
	   description: 'MongoDB is no sql database',
	   by: 'tutorials point',
	   url: 'http://www.tutorialspoint.com',
	   tags: ['mongodb', 'database', 'NoSQL'],
	   likes: 100
	});

	db.close();

});

