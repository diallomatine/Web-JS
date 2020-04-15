var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('about.ejs');
  res.sendFile('about.html', { root: 'public' });
  // res.sendFile('public/about.html');
});

module.exports = router;
