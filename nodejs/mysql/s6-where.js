var mysql = require( 'mysql' );
var prettyjson = require( 'prettyjson' );

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mypassword',
	database: 'node_sql_tutorial' // can specify database to use at time of connection
})

connection.connect( function( error ) {
	if ( error ) throw error;
	console.log( 'Connected!' );



	// Select all records with address Park Lane 38
	var sqlQuery = "SELECT * FROM customers WHERE address = 'Park Lane 38';";
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

	// Select all records where address starts with the letter s
	sqlQuery = "SELECT * FROM customers WHERE address LIKE 'S%';";
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

	// Prevent sql injections by escaping values
	var address = 'Mountain 21';
	sqlQuery = "SELECT * FROM customers WHERE address = ?;";
	connection.query( sqlQuery, [ address ], function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

	// Multiple ? placeholders
	var name = 'Amy';
	var address = 'Mountain 21';
	sqlQuery = "SELECT * FROM customers WHERE name = ? OR address = ?;";
	connection.query( sqlQuery, [ name, address ], function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

})