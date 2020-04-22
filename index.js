var express = require('express');
var path = require("path");

var app = express();


app.all('/', function (req, res) {
    res.send('SRP UI Frame');
});

app.use('/ysy', express.static('gsd'));
app.all('/ysy', function (req, res) {
    res.sendFile(path.join(__dirname + '/gsd/ysy.html'));
});

app.listen(8080);
