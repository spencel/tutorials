// Module dependencies

const express = require('express');
const mysql = require('mysql');
const bodyParser = require( 'body-parser' );

// Globals

var app = express();
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var jsonParser = bodyParser.json()

// Database connection

var mysqlHostName = 'mysql.sl-sandbox.dreamhosters.com';
var mysqlUserName = 'antiquebandwagon';
var mysqlUserPassword = 'e9w2LcR5fLsLrDsL';
var mysqlDatabase = 'gwpd_alpha_temp';

var mysqlConnection = mysql.createConnection({
	host: mysqlHostName,
	user: mysqlUserName,
	password: mysqlUserPassword,
	database: mysqlDatabase
});
	
// Test connection
mysqlConnection.connect( error => {
	if ( error ) throw error;

	console.log( `Connected to ${mysqlHostName} MySQL database as user ${mysqlUserName}.` );
});

// mysqlConnection.query('INSERT INTO artist ( name ) VALUE ( ? )', 'test2'); // this works


// Configuration

app.use( "/public", express.static( __dirname + "/public" ));

// Routes sends our HTML file

/*
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
*/

app.get('/', ( request, response ) => {
	response.sendFile( __dirname + '/index.html' ); 
});

app.get('/edit-music-db', ( request, response ) => {
	response.sendFile( __dirname + '/edit-music-db.html' ); 
});

app.post( '/get-artist-table', ( request, response ) => {
	mysqlConnection.query(
		'SELECT * FROM artist',
		( error, result ) => {
			if ( error ) throw error;
			// console.log( result );
			response.send( result );
	})
})

app.post( '/add-artist', jsonParser, ( request, response ) => {
	console.log( request.body );
	name = request.body.name;
	mysqlConnection.query(
		'INSERT INTO artist ( name ) VALUE ( ? )', 
		name, 
		function ( error, result ) {
			if ( error ) throw error;
			console.log( result );
			response.send({
				id: result.insertId,
				name: name
			});
		}
	);
});

app.post( '/delete-artist', jsonParser, ( request, response ) => {
	console.log( request.body );
	id = request.body.id;
	mysqlConnection.query(
		'DELETE FROM artist WHERE id = ? ', 
		id, 
		( error, result ) => {
			if ( error ) throw error;
			console.log( result );
			response.send({
				recordDeleted: true
			});
		}
	);
});


// Update MySQL database

app.post('/artist', jsonParser, function ( request, response ) {
	console.log( request.body );
	mysqlConnection.query('INSERT INTO artist ( name ) VALUE ( ? )', request.body.name, 
		function ( error, result ) {
			if ( error ) throw error;
			response.send('User added to database with ID: ' + result.insertId);
		}
	);
});

// Begin listening

app.listen(3000, () => {
	console.log( 'Listening on port 3000.' );
});