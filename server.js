var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/languages', routes);
app.use(express.static(__dirname + '/public'));

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('App\'s server listening at http://localhost:%s', port);
});
