import { spawn, exec } from 'child_process'

const propyBatPath = 'C:/\"Program Files\"/ArcGIS/Pro/bin/Python/Scripts/propy.bat'

//var pyProcess = spawn( 'python', [ propyBatPath, './pyscript.py' ])
//var pyProcess = spawn( 'python', [ 'C:/Users/slank/Documents/projects/epm-test0/arcgis/pyscript.py' ])


//pyProcess.stdout.on( 'data', data => console.log( data ));

//exec( `python ${__dirname}/script.py`, ( error, stdout, stderr ) => {
exec( `${propyBatPath} ${__dirname}/script.py`, ( error, stdout, stderr ) => {
	if ( error ) console.error( error )
	if ( stdout ) console.log( 'script.js: ' + stdout )
	if ( stderr ) console.error ( stderr )
});