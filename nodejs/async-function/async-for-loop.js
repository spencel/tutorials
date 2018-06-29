	var promiseFileNameArray = new Promise (( resolve, reject ) => {
		fs.readdir( config.dataFileDirectory, ( error, fileNameArray ) => {
			if ( error ) console.error( error )
			resolve( fileNameArray )
		})
	})
	var fileNameArray = await promiseFileNameArray // this forces the following for loop to execute only after the promise is fulfilled

	var dataFileNameArray = []
	for ( var i = 0; i < fileNameArray.length; i++ ) {
		var fileName = fileNameArray[ i ];
		console.log( `if ( ${path.extname( fileName )} === ${config.dataFileExtension} )`)
		if ( path.extname( fileName )  === config.dataFileExtension ) {
			dataFileNameArray.push( fileName );
		}
	}

	console.log( dataFileNameArray )