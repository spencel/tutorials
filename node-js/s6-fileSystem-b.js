var fileSystem = require( 'fs' );

fileSystem.appendFile( 's6-mynewfile1.txt', 'Hello content!', function( error ) {
	if ( error ) throw error;
	console.log( 'Saved!' );
});