var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080



app.get('/', function(req, res) {
    app.use(express.static(path.join(__dirname + '/')));
    res.sendFile(path.join(__dirname + '/match-game.html'));
});
console.log("app listening on 80");
app.listen(80);
