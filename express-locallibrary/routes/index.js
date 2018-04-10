var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' }); // old landing page
  res.redirect('/catalog'); // index redirects to the catalog page
});

module.exports = router;
