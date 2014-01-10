var request = require('request')
  , cheerio = require('cheerio')
  , async = require('async')
  , format = require('util').format;

var reddits = [ 'programming', 'javascript', 'node' ]
  , concurrency = 2;

async.eachLimit(reddits, concurrency, function (reddit, next) {
    var url = format('http://reddit.com/r/%s', reddit);
    request(url, function (err, response, body) {
        if (err) throw err;
        var $ = cheerio.load(body);
        $('a.title').each(function () {
            console.log('%s (%s)', $(this).text(), $(this).attr('href'));
        });
        next();
    });
});