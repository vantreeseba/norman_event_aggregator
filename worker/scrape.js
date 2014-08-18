var async = require('async')

var scrapers = [require('./scrapers/thedeli')]; //require all files under scrapers
var concurrency = 2;

async.eachLimit(scrapers, concurrency, function(scraper, callback) {
    scraper(callback);
}, function(err) {
    //log dat error
});
