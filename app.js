var express = require('express');
var app = express();

var OPTIONS = {
  port: 5000
};

app.use(express.static('public'));

var server = app.listen(OPTIONS.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});