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

	// Delete all records with the address Mountain 21
	var sqlQuery = "DELETE FROM customers WHERE address = 'Mountain 21';";
	connection.query( sqlQuery, function( error, result, fields) {
		if ( error ) throw error;
		console.log( 'number of deleted reocords:\n' + result.affectedRows );
	});


})