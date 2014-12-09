var nat = require('natural');
var fs = require('fs');
var readline = require('readline');
var filename = 'test.txt'
var _ = require('lodash');

var reader = readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
});

var lines = [];

reader.on('line', function(line) {
    lines.push(line);
});

reader.on('close', function() {
    var scores = [];

    _.map(lines, function(line, i) {
        _.forEach(lines.slice(i), function(other) {
            var lineScore = {
                left: line,
                right: other,
                lscore: nat.LevenshteinDistance(line, other),
                jwscore: nat.JaroWinklerDistance(line, other)
            };

            scores.push(lineScore);
        });

    });

	var matching = 0;
    _.forEach(scores, function(score) {
		if(score.lscore == 0 || score.jwscore == 1){
		return;
		}
		if (score.lscore < 8 || score.jwscore > .85) {

			console.log(score);
			matching++;
        }
    });

	console.log('recorded strings total: ' + scores.length + ' matched: ' + matching);
});

//console.log(nat.LevenshteinDistance('test band', 'test baand'));
//console.log(nat.JaroWinklerDistance('test band', 'test baand'));
//console.log(nat.JaroWinklerDistance('dixon', 'dixonn'));
