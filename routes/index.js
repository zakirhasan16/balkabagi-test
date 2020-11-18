var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ek-sayfa', function(req, res, next) {
  res.render('ekSayfa');
});

module.exports = router;
