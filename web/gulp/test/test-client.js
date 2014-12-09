var gulp = require('gulp');
var options = require('./../options');
var karma = require('karma').server;
var path = require('path');

function testClient(single) {
    var configFile = single === true ? options.karmaConfigSingle : options.karmaConfigLocal;
    karma.start({
        configFile: path.resolve(configFile)
    }, function (exitCode) {
        process.exit(exitCode);
    });
}

function testClientWatch() {
    testClient(false);
}

function testClientSingle() {
    testClient(true);
}

gulp.task('test-client', testClientWatch);
gulp.task('test-client-single', testClientSingle);
