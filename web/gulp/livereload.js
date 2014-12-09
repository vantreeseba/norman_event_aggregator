'use strict';
var gulp = require('gulp');
var options = require('./options.js'),
    livereload = require('gulp-livereload');




function startLivereload() {
    var server = livereload();

    function livereloadUpdate(file) {
        console.log('Something changed: ', file.path);
        server.changed(file.path);
    }

    var src = [
        options.appOutput + '/**',
        './src/public/styles/core.css'
    ];

    gulp
        .watch(src)
        .on('change', livereloadUpdate);
}


gulp.task('livereload', startLivereload);