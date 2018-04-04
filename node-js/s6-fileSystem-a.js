var http = require( 'http' );
var fileSystem = require( 'fs' );

http.createServer( function( request, response ) {
	fileSystem.readFile( 's6-demofile1.html', function( err, data ) {
		response.writeHead( 
			200,
			{ 'Content-Type' : 'text/html' }
		);
		response.write( data );
		response.end();
	});
}).listen( 8080 );