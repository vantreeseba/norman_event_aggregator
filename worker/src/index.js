var rabbitConf = require('./rabbit.conf');
var context = require('rabbit.js').createContext(rabbitConf.host);

function runScraper(scraperMessage) {
    console.log(scraperMessage);
};

function connectToScraperQueue() {
    console.log(context);
    var scrapers = context.socket('PULL');
    scrapers.setEncoding('utf8');
    scrapers.connect(rabbitConf.scrapers);
    scrapers.on('data', runScraper);
}

function onReady() {
    connectToScraperQueue();
}

function onError(err) {
	console.log("ERROR:", err);
}

function onClose() {}

//run
context.on('ready', onReady);
context.on('error', onError);
context.on('close', onClose);

console.log('Worker started.');
