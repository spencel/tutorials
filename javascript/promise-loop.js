/* jshint esversion: 6 */
new Promise( ( resolve, reject ) => {
	length = 20;
	asyncLoop( 0, length, () => {
		resolve();
	});
});

function asyncLoop( i, length, callback ) {
	var elapsedTime = Math.random() * 1000;
	if ( i < length ) {
		setTimeout( () => {
			console.log( `i: ${i}; elapsedTime: ${elapsedTime}` );
			new Promise( ( resolve, reject ) => {
				i++;
				asyncLoop( i, length, () => {
					resolve();
				});
			}).then( () => {
				callback();
			});
		}, elapsedTime );
	} else {
		callback();
	}
}