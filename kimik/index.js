var express = require(‘express’);

var app = express();

var port =3000;

app.use(express.static(__dirname + ‘/public’));

app.get('/home', (req, res) => {
  res.render('tc.html', {name: 'hsc'});
});
        
