var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(83);
console.log('Server is listening on port 80');
