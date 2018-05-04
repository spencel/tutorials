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



	// Select all records and return all columns sorted by name
	var sqlQuery = "SELECT * FROM customers ORDER BY name;";
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
	});

	// Select all records and return all columns sorted by name in descending order
	var sqlQuery = "SELECT * FROM customers ORDER BY name DESC;";
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
	});

})