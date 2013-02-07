var socketio = require('./modules/socketService');
var http = require('http');
var express = require('express');
var rabbit = require('rabbit.js');

var context = rabbit.createContext();
var app = express();
var server = http.createServer(app);

app.use("/", express.static(__dirname));
server.listen(3000);

socketio.setUpSocketIO(server,context);

