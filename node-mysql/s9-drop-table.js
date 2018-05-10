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

	// Drop a table
	var sqlQuery = "DROP TABLE IF EXISTS customers;";
	connection.query( sqlQuery, function( error, result ) {
		if ( error ) throw error;
		console.log( 'customers table deleted' );
		console.log( 'result:\n' + prettyjson.render( result ) );
	});

})