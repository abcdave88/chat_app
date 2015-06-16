
var express = require('express');
var app = express();

var http = require('http');
server = http.createServer(app);
server.listen(process.env.PORT || 4000)

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', { header: 'index!'});
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.emit('connected');
  socket.on('chat', function(data) {
  writeLine(data.name, data.line);
  });
});




