var rabbitConf = require('./rabbit.conf');
var context = require('rabbit.js').createContext(rabbitConf.host);

function runScraper(queue) {
    queue.write("BANANANAS");
};

function connectToScraperQueue() {
    console.log(context);
    var socket = context.socket('PUSH');
    socket.connect(rabbitConf.scrapers, function(){
		runScraper(socket);
	});
}

var onReady = function() {
    connectToScraperQueue();
};

//run
context.on('ready', onReady);
