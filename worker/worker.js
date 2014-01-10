//var mongoose = require('mongoose');
var rabbitConf = require('../rabbit.conf');
var context = require('rabbit.js').createContext(rabbitConf.host);

//mongoose setup
//mongoose.connect('localhost','chat');
//var msgSchema = mongoose.Schema({text: 'string'});
//var Message = mongoose.model('Message', msgSchema);

var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://web_worker:11asterisks@10.10.0.20/web_worker";


var handleMessage = function(msg) {	
	console.log(msg);

	var message = JSON.parse(msg);

	pg.connect(conString, function(err,client,done) {
	  if(err) {
	    return console.error('could not connect to postgres', err);
	  }
	  client.query('INSERT INTO messages VALUES(\'' + message.text + '\')', function(err, result) {
	    if(err) {
	      return console.error('error running query', err);
	    }
	    done();
	  });
	});
};

//rabbit.js setup.
var onReady = function() {
	console.log("Connecting to rabbitmq on: " + rabbitConf.host + " queue: " + rabbitConf.chatQueue)
    var sub = context.socket('PULL');    
    
    sub.setEncoding('utf8');  
    sub.connect(rabbitConf.chatQueue);
    sub.on('data', handleMessage); 	
};

//run
context.on('ready', onReady);

