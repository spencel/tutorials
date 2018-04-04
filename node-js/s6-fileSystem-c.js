var fileSystem = require( 'fs' );

fileSystem.open( 's6-mynewfile2.txt', 'w', function( error, file ) {
	if ( error ) throw error;
	console.log( 'Saved!' );
});