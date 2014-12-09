'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var nodemon = require('gulp-nodemon');

function startServer() {
    nodemon({
        script: options.appServer,
        watch: ['src/server']
    });
}

gulp.task('serve', startServer);