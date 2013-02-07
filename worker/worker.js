var mongoose = require('mongoose');
var context = require('rabbit.js').createContext();

//mongoose setup
mongoose.connect('localhost','chat');
var msgSchema = mongoose.Schema({text: 'string'});
var Message = mongoose.model('Message', msgSchema);


//rabbit.js setup.
var QUEUE = 'chat';
var onReady = function() {
    var sub = context.socket('PULL');    
    sub.connect(QUEUE);
    sub.setEncoding('utf8');
    sub.on('data', function(msg) {
    	var msg = JSON.parse(msg);
     	console.log(msg.text); 
 		var dbmsg = new Message(msg);
 		dbmsg.save(function(err){
 			if(err){
 				console.log("error saving message to db:",err);
 			}
 		});
 	});
};

//run
context.on('ready', onReady);