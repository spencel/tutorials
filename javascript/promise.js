// Self executing promise
new Promise( ( resolve, reject ) => {

	
	setTimeout( () => {
		resolve( 'Self executing promise has been resolved!' ); // exits {} goes to then
		//reject(); // exits {} and goes to next then
	}, 1000);
	
	
}).then( resolved => {

	console.log( resolved );

}).then( () => {

}).catch( error => {
	console.log( error );
});

// Variable assigned to result of promise
var promise1 = new Promise( ( resolve, reject ) => {

	resolve( 'promise1 has been resolved!' ); // exits {} goes to then
	//reject(); // exits {} and goes to next then
	
}).then( resolved => {

	console.log( resolved );

}).then( () => {

}).catch( error => {
	console.log( error );
});

// Function assigned to promise
var myAsyncFunction = () => {
	new Promise( ( resolve, reject ) => {

		resolve( 'myAsyncFunction has been resolved!' ); // exits {} goes to then
		//reject(); // exits {} and goes to next then
		
	}).then( resolved => {

		console.log( resolved );

	}).then( () => {

	}).catch( error => {
		console.log( error );
	});
};

myAsyncFunction();