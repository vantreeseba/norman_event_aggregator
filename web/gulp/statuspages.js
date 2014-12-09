'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');


function generateStatusPages() {

    var htmlMinOpts = {
        collapseWhitespace: true
    };

    return gulp
        .src('src/public/common/statuspages/*.html')
        .pipe(gutil.env.production ? htmlmin(htmlMinOpts) : gutil.noop())
        .pipe(gulp.dest(options.appOutput));

}


gulp.task('statuspages', generateStatusPages);