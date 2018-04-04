var http = require( 'http' );
var url = require( 'url' );
var fileSystem = require( 'fs' );

http.createServer( function( request, response ) {
	var parsedUrl = url.parse( request.url, true );
	var filename = "." + parsedUrl.pathname;
	fileSystem.readFile( filename, function( error, data ) {
		if ( error ) {
			response.writeHead( 404, { 'Content-Type': 'text/html' } );
			return response.end( "404 Not Found" );
		}
		response.writeHead( 200, { 'Content-Type': 'text/html' } );
		response.write( data );
		return response.end();
	});
}).listen( 8080 );

// Address: http://localhost:8080/s7-summer.html
// Address: http://localhost:8080/s7-winter.html