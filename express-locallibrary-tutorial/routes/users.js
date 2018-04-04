var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/cool", function( req, res, next ) {
	//res.render( "cool", { content: "You're cool!" } )
	res.render( "cool", { content: "Hello cool world!" } );
});

module.exports = router;
