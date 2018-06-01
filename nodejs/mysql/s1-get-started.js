var mysql = require( 'mysql' );

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mypassword'
})

var sqlQuery = '';

connection.connect( function( error ) {
	if ( error ) throw error;
	console.log( 'Connected!' );
})