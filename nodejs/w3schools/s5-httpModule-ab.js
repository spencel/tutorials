var http = require( 'http' );

// Create a server object:
http.createServer( function( request, response ) {
	response.writeHead(
		200, // first argument is status code, 200 means that all is OK
		{ 'Content-Type': 'text/html' } // 2nd argument is response header, response to be dislayed as HTML (or text)
	);
	response.write( request.url ); // write a response to the client
	response.end(); // end the response
}).listen( 8080 ); // the server object listens on port 8080