var http = require('http'),
	fs = require('fs'),

	server = http.createServer(function (req, res) {
		if(req.url == '' || req.url == '/index.html' || req.url == '/index' ){
			fs.readFile('./index.html', function (err, data) {
				res.end(data);
			})
		} else if (req.url == '/draw') {
			fs.readFile('./drawboard.html', function (err, data) {
				res.end(data);
			})
		} else if (req.url == '/guess') {
			fs.readFile('./guess.html', function (err, data) {
				res.end(data);
			})
		}
	}),

	io = require('socket.io')(server);
io.on('connection', function (socket) {
	socket.on('draw', function (msg) {
		io.emit('drawTo', msg)
	})
})

server.listen(3000, '127.0.0.1');
// server.listen(3000, '192.168.1.100');
