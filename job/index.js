var express = require('express');
var app = express();
var port = process.env.port || 8080;

app.use(express.static(__dirname + '/jobs/scrapers'));

app.get('/',function(req,res){
	res.send('job server');
});

app.listen(port);
console.log('Job Server listening on: ' + port);
