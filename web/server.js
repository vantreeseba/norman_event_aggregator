var io = require('socket.io');
var http = require('http');
var express = require('express');
var rabbit = require('rabbit.js');

var context = rabbit.createContext();
var app = express();
var server = http.createServer(app);

var push = context.socket('PUSH');

context.on('ready',function(){  
  push.connect('chat');
});

app.use("/", express.static(__dirname));

server.listen(3000);

var socketioserver = io.listen(server);

socketioserver.sockets.on('connection', function(connection) {
  connection.on('message', function(msg) { 
    connection.send(msg);
    connection.broadcast.send(msg);    
    push.write({text:msg}); 
  }); 
});