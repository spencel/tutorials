var http = require( 'http' );
var url = require( 'url' );

http.createServer( function( request, response ) {
	response.writeHead(
		200,
		{ 'Content-Type' : 'text/html' }
	);
	var queryUrl = url.parse( request.url, true ).query;
	var text = queryUrl.year + " " + queryUrl.month;
	response.end( text );
}).listen( 8080 );

// CLI: node s5httpModule-c.js
// Address: http://localhost:8080/?year=2017&month=July
// Results: 2017 July