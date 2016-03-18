var express = require('express');
var app = express()

app.get('/', function (req, res) {
	console.log('hellololo!');
	res.send('Hello World!');
});

app.listen(3000, function() {
	console.log('hello!');
	console.log('Example up and fucking running!');
});