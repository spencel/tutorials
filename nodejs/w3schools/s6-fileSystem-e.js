var fileSystem = require( 'fs' );

fileSystem.appendFile( 's6-mynewfile1.txt' , 'This is my text.', function ( error ) {
  if ( error ) throw error;
  console.log( 'Updated!' );
});