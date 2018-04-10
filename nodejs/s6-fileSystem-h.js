var fileSystem = require( 'fs' );

fileSystem.rename( 's6-mynewfile1.txt', 's6-myrenamedfile.txt', function ( error ) {
  if ( error ) throw error;
  console.log( 'File renamed!' );
});