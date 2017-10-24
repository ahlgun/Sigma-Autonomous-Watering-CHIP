var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    io.emit('saySomething', 'Hello World');
    socket.on('saySomething', function(msg){
        console.log(msg)
    });
})

server.listen(3000, () => {
    console.log("Nu lyssnar vi på 3000.");
})
