var myFunction1 = () => {
	return 'success';
}

var myFunction2 = parameter1 => {
	return ( parameter1 + parameter1 );
}

var myFunction3 = ( parameter1, parameter2 ) => {
	return ( parameter1 + parameter2 );
}

console.log( myFunction1() );
console.log( myFunction2( 'cool' ) );
console.log( myFunction3( 'cool', 'bananas' ) );