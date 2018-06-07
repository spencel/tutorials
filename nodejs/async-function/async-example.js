/* jshint ignore: start */
( async () => {
	var z = await main();
	console.log( `z: ${z}` );
})();



async function resolveAfter( ms ) {

	// this doesn't work
	/*var y = await setTimeout( () => {
		return true;
	}, 3000 );
	console.log( `y: ${y}` );
	return y;*/

	// this works
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			resolve( true );
		}, ms );
	});

	
}

async function main() {
	console.log('about to call resolveAfter2Seconds');
	var x = await resolveAfter( 2000 ); // await must return a promise
	console.log( `x: ${x}` );
	var a = await resolveAfter( 3000 );
	console.log( `a: ${a}` );
	var b = await resolveAfter( 4000 );
	console.log( `b: ${b}` );
	return true;
}