var express = require('express');
var router = express.Router();
var stuff = require('./data');
var pg = require('pg');
var pool = require('./pg-connection-pool');

router.get('/items', function(req, res, next) {
  pool.query('SELECT * from partyitems').then(function(results) {
    console.log(results.rows);
    res.send(results.rows)
  });
});

router.post('/items', function (req, res, next){
  var data = req.body;
  pool.query('INSERT INTO partyitems (item, category, status, username) values ($1::text, $2::text, $3::text, $4::text)', [data.item, data.category, data.status, data.username]).then(function() {
    pool.query('SELECT * from partyitems').then(function(result) {
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});

router.put('/items/:item', function(req, res, next) {
  var item = req.pararms.item;
  var data = req.body;
  pool.query('UPDATE partyitems SET status=$2::text, user=null where item=$1::text', [data.item, "unfulfilled"]).then(function(){
    pool.query('SELECT * from partyitems').then(function(result){
      console.log(result.rows);
      res.send(result.rows);
    });
  });
});


module.exports = router;
