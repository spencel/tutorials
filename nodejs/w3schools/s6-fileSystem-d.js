var fileSystem = require( 'fs' );

fileSystem.writeFile( 's6-mynewfile3.txt' , 'Hello content!', function ( error ) {
  if ( error ) throw error;
  console.log( 'Saved!' );
});