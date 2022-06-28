var express = require(‘express’);

var app = express();

var port = 8080;

app.use(express.static(__dirname + ‘/public’));

app.get(‘/’, (req, res) => {

return res.render(‘index’);

});
        
