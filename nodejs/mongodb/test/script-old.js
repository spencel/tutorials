/* jshint esversion: 6 */
/* jshint ignore: start */

const mongodb = require( 'mongodb' );

// Database
/*( async function() {
	var mongoDbUserName = 'slank';
	var mongoDbUserPassword = 'yoohunfer1';
	var mongoDbName = 'web-directory';
	var mongoDbUrl = `mongodb://${mongoDbUserName}:${mongoDbUserPassword}@ds123728.mlab.com:23728/${mongoDbName}`;
	var mongo = new Promise( ( resolve, reject ) => {
		mongodb.MongoClient.connect( mongoDbUrl, ( error, client ) => {
			if ( error ) { console.error( error ); return; }
			console.log( 'connection successful' );
			resolve({
				client: client,
				db: client.db( mongoDbName )
			});		
	});
	console.log( mongoDb );
	//await mongo.client.close();
})();*/

( async () => {
	console.log( 'successful' );
	var mongoDbUserName = 'slank';
	var mongoDbUserPassword = 'yoohunfer1';
	var mongoDbName = 'web-directory';
	var mongoDbUrl = `mongodb://${mongoDbUserName}:${mongoDbUserPassword}@ds123728.mlab.com:23728/${mongoDbName}`;
	var mongo = new Promise( ( resolve, reject ) => {
		mongodb.MongoClient.connect( mongoDbUrl, ( error, client ) => {
			if ( error ) { console.error( error ); return; }
			console.log( 'connection successful' );
			resolve({
				client: client,
				db: client.db( mongoDbName )
			});	
		});
	});
	console.log( await mongo );
})();