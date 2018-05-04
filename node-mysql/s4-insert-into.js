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

	// Create a table if it doesn't exist
	var sqlQuery = 'CREATE TABLE IF NOT EXISTS customers (\
		id INT AUTO_INCREMENT PRIMARY KEY,\
		name VARCHAR(255),\
		address VARCHAR(255)\
	);';
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( 'customers table created with primary key' );
	});

	// insert a record
	sqlQuery = "INSERT INTO customers \
		(\
			name,\
			address\
		) \
		VALUES \
		(\
			'Company Inc',\
			'Highway 37'\
		)\
	;";
	connection.query( sqlQuery, function( error, result) {
		if ( error ) throw error;
		console.log( '1 record inserted' );
	});

	// insert multiple records
	sqlQuery = "INSERT INTO customers (name, address) VALUES ?";
	var values = [
	    ['John', 'Highway 71'],
	    ['Peter', 'Lowstreet 4'],
	    ['Amy', 'Apple st 652'],
	    ['Hannah', 'Mountain 21'],
	    ['Michael', 'Valley 345'],
	    ['Sandy', 'Ocean blvd 2'],
	    ['Betty', 'Green Grass 1'],
	    ['Richard', 'Sky st 331'],
	    ['Susan', 'One way 98'],
	    ['Vicky', 'Yellow Garden 2'],
	    ['Ben', 'Park Lane 38'],
	    ['William', 'Central st 954'],
	    ['Chuck', 'Main Road 989'],
	    ['Viola', 'Sideway 1633']
	];
	connection.query( sqlQuery, [values], function( error, result) {
		if ( error ) throw error;
		console.log( 'multiple records inserted' );
		console.log( 'result:\n' + prettyjson.render( result ) );
	});

	// insert a record and return it using result
	sqlQuery = "INSERT INTO customers \
		(\
			name,\
			address\
		) \
		VALUES \
		(\
			'Michelle',\
			'Blue Village 1'\
		)\
	;";
	connection.query( sqlQuery, [values], function( error, result) {
		if ( error ) throw error;
		console.log( '1 record inserted, ID: ' + result.insertId);
	});

})