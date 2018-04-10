var url = require( 'url' );
var address = 'http://localhost:8080/default.htm?year=2017&month=february';
var parsedUrl = url.parse( address, true );

console.log( parsedUrl.host ); // returns 'localhost:8080'
console.log( parsedUrl.pathname ); // returns 'default.htm'
console.log( parsedUrl.search ); // returns '?year=2017&month=february'

var parsedUrlData = parsedUrl.query; // returns an object: { year: 2017, month: 'february' }
console.log( parsedUrlData.month ); // returns 'february'