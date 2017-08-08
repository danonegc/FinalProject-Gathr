var express = require('express');
var router = express.Router();
var stuff = require('./data');


router.get('/', function (req, res) {
  res.json(stuff[Math.floor(Math.random() * stuff.length)]);
});

module.exports = router;
