const express = require('express');
const os = require('os');
const mysql = require('mysql');
var fs = require( 'fs' );

const app = express();

app.use(express.static('dist'));
app.get( '/api/test', ( request, response ) => {
	mysqlPool.getConnection( ( error, connection ) => {
		if ( error ) throw error;
		response.send({ username: os.userInfo().username });
	});
});

app.get( '/api/getOrganismTable', ( request, response ) => {
	mysqlPool.getConnection( ( error, connection ) => {
		connection.query(
			'SELECT * FROM organism_view',
			( error, result ) => {
			connection.release();
			if ( error ) { reponse.send( "" ); }
			// //console.log( result );
			response.send( result );
		});
	});
});

app.listen(8080, () => console.log('Listening on port 8080!'));

var mysqlHostName = 'us-cdbr-iron-east-04.cleardb.net';
var mysqlUserName = 'bf625d1cf3ab45';
var mysqlUserPassword = '6d68558b';
var mysqlDatabase = 'heroku_b2cf77a96af7a57';

var mysqlPool = mysql.createPool({
	connectionLimit: 100,
	host: mysqlHostName,
	user: mysqlUserName,
	password: mysqlUserPassword,
	database: mysqlDatabase,
	ssl: {
		ca: fs.readFileSync( `${__dirname}/mysql/cleardb-ca.pem` ),
		key: fs.readFileSync( `${__dirname}/mysql/bf625d1cf3ab45-key.pem` ),
		cart: fs.readFileSync( `${__dirname}/mysql/bf625d1cf3ab45-cert.pem` )
	}
});

// Test Connection
mysqlPool.getConnection( ( error, connection ) => {
	if ( error ) throw error;
	console.log( 'database connection successful' );
});

