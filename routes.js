var express = require('express');
var router = express.Router();
var stuff = require('./data');
var pool = require('./pg-connection-pool');

// router.get('/', function (req, res) {
//   res.json(stuff[Math.floor(Math.random() * stuff.length)]);
// });


  // res.send(data);
  // pool.query('insert into partyitem(item, category, status, user) values($1::text, $2::text, $3::boolean, $4::text))',
  // [protein.item, protein.category, protein.status, protein.user ]).then(function() {
  //   pool.query('select * from partyitems order by id').then(function(result) {
  //     res.send(result.rows);
  //   });
  // });

module.exports = router;
