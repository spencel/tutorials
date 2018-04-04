var http = require('http');
var formidable = require( 'formidable' );
var fileSystem = require( 'fs' );
var move = require( 'mv' );

http.createServer( function( request, response ) {
	if ( request.url === '/fileUpload' ) {
		var form = new formidable.IncomingForm();
		form.parse( request, function( error, fields, files ) {
			var oldPath = files.fileToUpload.path;
			var newPath = 'D:\\Tutorials\\node-js\\' + files.fileToUpload.name;
			console.log( newPath );
			move( oldPath, newPath, function( error ) {
				if ( error ) throw error;
				response.write( 'File uploaded and moved!' );
				response.end();
			});
		});
	} else {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		response.write('<input type="file" name="fileToUpload"><br>');
		response.write('<input type="submit">');
		response.write('</form>');
		return response.end();
	}
}).listen(8080);