var request = require('request')
  , cheerio = require('cheerio')
  , async = require('async')
  , format = require('util').format;

var reddits = ['programming'];
var concurrency = 1;

async.eachLimit(reddits, concurrency, function (reddit, next) {
    var url = format('https://www.udacity.com/courses');
    request(url, function (err, response, body) {
        if (err) throw err;
        var $ = cheerio.load(body);
        $('span.crs-li-info').each(function () {

            var course = {
              'Name' : $(this).find('.crs-li-title').text()
            }

            console.log(course);
        });
        next();
    });
});