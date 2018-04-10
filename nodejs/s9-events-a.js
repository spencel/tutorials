var fileSystem = require( 'fs' );
var readStream = fileSystem.createReadStream( './s9-demofile.txt' );
readStream.on( 'open', function() {
	console.log( 'The file is open' );
})