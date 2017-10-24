var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

(function(){
    let Req = new XMLHttpRequest();
    Req.open('POST', 'http://localhost:7000/api/cars/filter',  false);
    Req.setRequestHeader("Content-Type", "application/json");
    Req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            response = JSON.parse(Req.response);
            console.log(response)

        }
    };

})();

server.listen(3000, () => {
    console.log("Nu lyssnar vi på 3000.");
})
