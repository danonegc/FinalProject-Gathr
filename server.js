var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(bodyParser.json({ extended: true }));
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Server is running :]');
});
