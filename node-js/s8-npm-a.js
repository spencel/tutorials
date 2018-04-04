var http = require( 'http' );
var upperCase = require( 'upper-case' );

http.createServer( function( request, response ) {
	response.writeHead( 200, { 'Content-type': 'text/html' });
	response.write( upperCase( 'Hello World!' ) );
	response.end();
}).listen( 8080 );