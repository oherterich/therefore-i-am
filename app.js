var express = require('express');
var reload = require('connect-livereload');
var app = express();

var OPTIONS = {
  port: 5000
};

app.use(express.static('public'));
app.use(reload);


var server = app.listen(OPTIONS.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});