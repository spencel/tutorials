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

	// Tell mysql which database to use
	sqlQuery = 'USE node_sql_tutorial;';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
	});

	// Create a table
	sqlQuery = 'CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255));';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table created' );
	});

	// Drop the table just created
	sqlQuery = 'DROP TABLE customers;';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table dropped' );
	});

	// Create a table with primary key
	sqlQuery = 'CREATE TABLE IF NOT EXISTS customers (\
		id INT AUTO_INCREMENT PRIMARY KEY,\
		name VARCHAR(255),\
		address VARCHAR(255)\
	);';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table created with primary key' );
	});

	// Drop the table just created
	sqlQuery = 'DROP TABLE customers;';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table dropped' );
	});

	// Create a table
	sqlQuery = 'CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255));';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table created' );
	});

	// Alter table to add primary key
	sqlQuery = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table altered: added id column as primary key' );
	});

})