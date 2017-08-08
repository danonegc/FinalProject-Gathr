var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('App\'s server listening at http://localhost:%s', port);
});
