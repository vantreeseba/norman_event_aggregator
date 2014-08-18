var request = require('request'),
    cheerio = require('cheerio'),
    async = require('async'),
    format = require('util').format;

		var deliRegex = /(\d*)\s?-?\s?(.*)/;

function theDeliScraper(callback) {
    var url = format('http://www.thedeli.us/');
    request(url, function(err, response, body) {
        if (err) callback(err);

        //console.log(response, body);
        var $ = cheerio.load(body);
        var currentCalendarLink = $('a.main-headline').first().attr('href');

        request(currentCalendarLink, function(err, response, body) {
			var cal = cheerio.load(body);
			var data = [];
			var content = cal('div#content-area')
				.find('div')
				.each(function(){
					var text = deliRegex.exec(this.text());
					var date = text[1].trim();
					var band = text[2].trim();

					if(band == 'pm' || band.indexOf('pm') == 0 || band == ''){
						return;
					}

					var entry = {
						date: date,
						band: band
					}
					console.log(entry);
				});
        });

        callback();
    });
}

module.exports = theDeliScraper;
