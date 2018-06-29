// requres es 7 (babel transpiler)
// semicolon is to prevent an error if the last symbol used is ')'?
;( async (/*parameter(s) to pass in*/ window, jQuery, etc) => {
		console.log( request.body );
		var slow = await resolveAfter2Seconds();
		var fast = await resolveAfter1Second();
		console.log( await `slow: ${slow}` );
		console.log( await `fast: ${fast}` );

		function resolveAfter1Second() {
		  console.log("starting fast promise");
		  return new Promise(resolve => {
		    setTimeout(function() {
		    	console.log("fast promise is done");
		      resolve(10);
		    }, 1000);
		  });
		};
	  function resolveAfter2Seconds() {
	  	console.log("starting slow promise");
		  return new Promise(resolve => {
		    setTimeout(function() {
		    	console.log("slow promise is done");
		      resolve(20);
		    }, 2000);
		  });
		};
	})(/*parameter(s) to pass in*/ window, jQuery, etc);