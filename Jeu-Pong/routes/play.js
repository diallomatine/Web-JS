var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('play.html', { root: 'views' });
  // res.render('play.ejs');
});

module.exports = router;
