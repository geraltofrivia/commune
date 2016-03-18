var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
	console.log('hellololo!');
	//Serving the main page
	res.sendFile(path.join(__dirname,'/html/page.html'));
});

io.on('connection', function(socket){
	console.log('A user connected!');
	socket.on('disconnect', function() {
		console.log('A user disconnected!');
	});

	socket.on('newmsg', function(msg) {
		process.stdout.write(msg);
	});
});


http.listen(3000, function() {
	console.log('Example up and fucking running!');
});

//Serving static files
app.use(express.static(path.join(__dirname,'public')));
