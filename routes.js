var express = require('express');
var router = express.Router();
var stuff = require('./data');
var pool = require('./pg-connection-pool');

// router.get('/', function (req, res) {
//   res.json(stuff[Math.floor(Math.random() * stuff.length)]);
// });

pool.query('SELECT * from test').then(function(results){
  console.log(results.rows);
})

module.exports = router;
