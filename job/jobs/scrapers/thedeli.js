var request = require('request'),
    cheerio = require('cheerio'),
    format = require('util').format;

var deliRegex = /(\d*)\s?-?\s?(.*)/;

function getCurrentCalender(body) {
    var $ = cheerio.load(body);
    return $('a.main-headline').first().attr('href');
}

function parseEventEntry() {
    var text = deliRegex.exec(this.text());
    var date = text[1].trim();
    var band = text[2].trim();

    if (band == 'pm' || band.indexOf('pm') == 0 || band == '') {
        return;
    }

    var entry = {
        date: date,
        band: band
    }
    console.log(entry);
}

function theDeliScraper(callback) {
    var url = format('http://www.thedeli.us/');
    request(url, function(err, response, body) {
        if (err) callback(err);

        var currentCalendarLink = getCurrentCalender(body);

        request(currentCalendarLink, function(err, response, body) {
            var $ = cheerio.load(body);
            var data = [];
            var content = $('div#content-area')
                .find('div')
                .each(parseEventEntry);
        });

        callback();
    });
}

module.exports = theDeliScraper;
