var express = require('express');
var app = express();

app.get("/", function(req, res) {
	res.send("HEJ!");
});

var port = process.env.PORT || 4321;
app.listen(port);