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
	var oldAddress = 'Valley 345';
	var newAddress = 'Canyon 123';
	var sqlQuery = "UPDATE customers SET address = ? WHERE address = ?;";
	connection.query( sqlQuery, [ newAddress, oldAddress ], function( error, result ) {
		if ( error ) throw error;
		console.log( 'address updated' );
		console.log( 'result:\n' + prettyjson.render( result ) );
		//console.log( 'fields:\n' + prettyjson.render( fields ) );
	});

})