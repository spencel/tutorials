const fs = require( 'fs' );
const mysql = require( 'mysql' );
const util = require( 'util' );

var mysqlHostName = 'mysql.sl-sandbox.dreamhosters.com';
var mysqlUserName = 'antiquebandwagon';
var mysqlUserPassword = 'e9w2LcR5fLsLrDsL';

var connection = mysql.createConnection({
	host: mysqlHostName,
	user: mysqlUserName,
	password: mysqlUserPassword
});

new Promise(( resolve, reject ) => {

  	fs.readFile( 'mysql/gwpd-alpha.sql', 'utf8', ( error, data ) => {
			if ( error ) reject( error );
			
			var sqlQuery = data;
			resolve( sqlQuery );

		});

}).then( resolved => {

  connection.connect( error => {
		if ( error ) throw error;

		console.log( `Connected to ${mysqlHostName} MySQL database as user ${mysqlUserName}.` );

		sqlQuery = "SELECT * FROM gwpd_alpha_temp.artist;";
		connection.query( sqlQuery, function( error, result) {
			if ( error ) throw error;
			console.log( result );
		});
	
	});

});