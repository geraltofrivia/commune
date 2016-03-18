var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	console.log('hellololo!');
	// res.send('Hello World!');
	res.sendFile(path.join(__dirname,'html/page.html'));
});

app.listen(3000, function() {
	console.log('hello!');
	console.log('Example up and fucking running!');
});

//Serving static files
app.use(express.static(path.join(__dirname,'public')));