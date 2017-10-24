var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

const https = require('https');

https.get('https://sigma-itc-watering.herokuapp.com/api', (resp) => {
    let data;

// A chunk of data has been recieved.
resp.on('data', (chunk) => {
    data = chunk;
    console.log(' Our vegetables. For now.')
});

// The whole response has been received. Print out the result.
resp.on('end', () => {
    console.log(JSON.parse(data));
});

}).on("error", (err) => {
    console.log("Error: " + err.message);
});

server.listen(3000, () => {
    console.log("Nu lyssnar vi på 3000.");
})
