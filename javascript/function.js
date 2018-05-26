/*
 *	Arrow Functions
 *
 *	Unlike other functions, arrow functions do not have their own:
 *		this
 *		arguments
 *		super
 *		new.target
 *
 *	More info:
 *		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

var myArrowFunction = parameter1 => {
	var result = parameter1 + 1
	return result
}