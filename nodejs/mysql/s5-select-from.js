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



	// Select all from customers table and return all columns
	var sqlQuery = 'SELECT * FROM customers;';
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

	// Select all from customers and return name and address columns
	var sqlQuery = 'SELECT name, address FROM customers;';
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'result:\n' + prettyjson.render( result ) );
		console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

})