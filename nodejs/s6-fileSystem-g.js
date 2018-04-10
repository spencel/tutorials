var fileSystem = require( 'fs' );

fileSystem.unlink( 's6-mynewfile2.txt', function ( error ) {
  if ( error ) throw error;
  console.log( 'File deleted!' );
});