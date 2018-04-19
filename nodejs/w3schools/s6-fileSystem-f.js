var fileSystem = require( 'fs' );

fileSystem.writeFile( 's6-mynewfile3.txt', 'This is my text!', function ( error ) {
  if ( error ) throw error;
  console.log( 'Replaced!' );
});