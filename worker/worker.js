var mongoose = require('mongoose');
var context = require('rabbit.js').createContext();
var rabbitConf = require('../rabbit.conf');

//mongoose setup
mongoose.connect('localhost','chat');
var msgSchema = mongoose.Schema({text: 'string'});
var Message = mongoose.model('Message', msgSchema);


var handleMessage = function(msg) {	
	Message(JSON.parse(msg)).save();
};

//rabbit.js setup.
var onReady = function() {
    var sub = context.socket('PULL');    
    
    sub.connect(rabbitConf.chatQueue);
    sub.setEncoding('utf8');    
    
    sub.on('data', handleMessage); 	
};

//run
context.on('ready', onReady);