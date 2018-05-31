var fs = require( 'fs' );

var path = './myfile.txt';
var options = {};
var readStream = fs.createReadStream( path, options );

readStream.pipe( process.stdout );