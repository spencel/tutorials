/*jshint esversion: 6*/
const fs = require( 'fs' );
const path = require( 'path' );
const LineByLineReader = require( 'line-by-line' );
const mongodb = require( 'mongodb' );
const AdmZip = require( 'adm-zip' );

const mongodbUrl = 'mongodb://localhost:27017/';
const dbName = 'epmTest';
const dataFileExtension = '.data';
const shapeFileExtension = '.shp';
const allShapeFilExtensions = [
	'.cpg',
	'.dbf',
	'.prj',
	'.sbn',
	'.sbx',
	'.shp',
	'.shp.xml',
	'.shx'
];
// Zip Files for ArcGIS Online



// get list of file names in current directory
new Promise( ( resolve, reject ) => {
	fs.readdir( './', ( error, fileNameArray ) => {
		// get data files only
		var shapeFileNames = [];
		for ( var i = 0; i < fileNameArray.length; i++ ) {
			var fileName = fileNameArray[ i ];
			if ( path.extname( fileName )  === shapeFileExtension ) {
				shapeFileNames.push( fileName );
			}
		}
		resolve( shapeFileNames );
	});
}).then( shapeFileNames => {
	return new Promise( ( resolve, reject ) => {
		var i = 0;
		asyncZip( shapeFileNames, i, shapeFileNames.length, () => {
			resolve();
		});
	});
});

function asyncZip( shapeFileNames, i, length, callback ) {
	if ( i < length ) {
		var shapeFileBaseName = path.basename( shapeFileNames[ i ], shapeFileExtension );
		console.log( shapeFileBaseName );
		var zip = new AdmZip();
		// make file names to be added to zip
		var zipFileNames = [];
		for ( var j = 0; j < allShapeFilExtensions.length; j++ ) {
			zip.addLocalFile( `./${shapeFileBaseName + allShapeFilExtensions[ j ]}`)
		}
		console.log( zipFileNames );
		zip.writeZip( `./${shapeFileBaseName}.zip`, () => {
			new Promise( ( resolve, reject ) => {
				i++;
				asyncZip( shapeFileNames, i, length, () => {
					resolve();
				});
			}).then( () => {
				callback();
			});
		});
	} else {
		callback();
	}
}

// Load Mongo DB

// get list of file names in current directory
new Promise( ( resolve, reject ) => {
	fs.readdir( './', ( error, fileNameArray ) => {
		// get data files only
		var dataFileNames = [];
		for ( var i = 0; i < fileNameArray.length; i++ ) {
			var fileName = fileNameArray[ i ];
			if ( path.extname( fileName )  === dataFileExtension ) {
				dataFileNames.push( fileName );
			}
		}
		mongodb.MongoClient.connect(
			mongodbUrl,
			( error, client ) => {
				if ( error ) throw error;
				console.log( 'connected to database' );
				resolve( [ client, dataFileNames ] );
			}
		);
	});
}).then( resolved => {
	var client = resolved[ 0 ];
	var dataFileNames = resolved[ 1 ];
	return new Promise( ( resolve, reject ) => {
		asyncRemoveCollections( client, dataFileNames, 0, () => {
			resolve( [ client, dataFileNames ] );
		});
	});
}).then( resolved => {
	var client = resolved[ 0 ];
	var dataFileNames = resolved[ 1 ];
	return new Promise( ( resolve, reject ) => {
		asyncLineRead( client, dataFileNames, 0, () => {
			resolve( [ client, dataFileNames ] );
		});
	});
}).then( resolved => {
	var client = resolved[ 0 ];
	var dataFileNames = resolved[ 1 ];
	client.close();
});

function asyncRemoveCollections( client, dataFileNames, i, callback ) {
	console.log( 'asyncRemoveCollections: i: ' + i );
	if ( i < dataFileNames.length ) {
		console.log( `${i+1}th run of asyncRemoveCollections` );
		var dataFileName = dataFileNames[ i ];
		var collectionName = path.basename( dataFileName, dataFileExtension );
		client.db( dbName ).dropCollection( collectionName, ( error, result ) => {
			console.log( collectionName + ' collection dropped' );	
			i++;
			new Promise( (resolve, reject ) => {
				asyncRemoveCollections( client, dataFileNames, i, () => {
					console.log( 'resolve asyncRemoveCollections A: i: ' + i );
					resolve();
				});
			}).then( () => {
				callback();
			});
		});
	} else {
		console.log( 'resolve asyncRemoveCollections B: i: ' + i );
		callback();
	}
}

function asyncLineRead( client, dataFileNames, i, callback ) {
	console.log( 'asyncLineRead: i: ' + i );
	if ( i < dataFileNames.length ) {
		var dataFileName = dataFileNames[ i ];
		var collectionName = path.basename( dataFileName, dataFileExtension );
		console.log( 'collectionName: ' + collectionName );
		return new Promise( ( resolve, reject ) => {
			
			var iLine = 0;
			var columnNames = [];
			var lineReader = new LineByLineReader( dataFileName );

			lineReader.on( 'error', ( error ) => {
					console.log( 'line reader error:' );
					console.error( error );
				});

			lineReader.on( 'line', ( line ) => {
				if ( columnNames.length === 0 ) {
					console.log( 'getting column names' );
					columnNames = line.split( '\t' );
				} else {
					var arValues = line.split( '\t' );
					mongoDocument = {};
					for ( var j = 0; j < arValues.length; j++ ) {
						//console.log( 'columnNames[ j ]: ' + columnNames[ j ] );
						//console.log( `arValues[ j ]: ${arValues[ j ]}` );
						mongoDocument[ columnNames[ j ]] = arValues[ j ];
						//console.log( `mongoDocument[ columnNames[ j ]]: ${mongoDocument[ columnNames[ j ]]}` );						
					}
					client.db( dbName ).collection( collectionName ).insertOne( mongoDocument, ( error, result ) => {
						if ( error ) throw error;
						iLine++;
						process.stdout.write( `line no.: ${iLine}\r`);
					});
				}
			});

			lineReader.on( 'end', () => {
				console.log( 'line reader end' );
				new Promise( ( resolve, reject ) => {
					i++;
					asyncLineRead( client, dataFileNames, i, () => {
						resolve();
					});
				}).then( () => {
					callback();
				});
			});
		});

	} else {
		callback();
	}
}