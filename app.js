var express = require('express');
var app = express();

app.get("/", function(req, res) {
	res.send("HEJ!");
});

app.listen(4321);