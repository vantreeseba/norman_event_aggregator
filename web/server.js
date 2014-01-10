var http = require('http');
var express = require('express');
var io = require('socket.io');

var rabbitConf = require('../rabbit.conf');
var context = require('rabbit.js').createContext(rabbitConf.host);

var app = express();
var server = http.createServer(app);

app.use("/", express.static(__dirname));
server.listen(8080);

context.on('ready',function(){
	console.log("Connecting to rabbitmq on: " + rabbitConf.host + " queue: " + rabbitConf.chatQueue)
	var pub = context.socket('PUSH');
	pub.connect(rabbitConf.chatQueue);

	var onConnect = function(connection) {      
		connection.on('message', function(msg) { 
		  connection.send(msg);
		  connection.broadcast.send(msg);
		  pub.write(JSON.stringify({text:msg})); 
		});
	}

	var socketioserver = io.listen(server);
	socketioserver.sockets.on('connection', onConnect);
});