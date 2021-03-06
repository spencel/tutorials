var crypto = require( 'crypto' );
var fs = require( 'fs' );

// Get File
var path = './myfile.txt';
var options = {};
var readStream = fs.createReadStream( path, options );

// Crypto
var algorithm = 'sha1';
var options ={};
var hash = crypto.createHash( 'sha1', options );

// Event Handlers
var dataEvent = 'data'; // emitted when stream releases data to consumer. other constants: close, end, error, readable
var endEvent = 'end';
readStream
	.on( dataEvent, ( chunk ) => { // chuck can be Buffer, string, or any
		hash.update( chunk );
	})
	.on( endEvent, () => {
		var encoding = 'hex'
		console.log( hash.digest( encoding ) );
	});