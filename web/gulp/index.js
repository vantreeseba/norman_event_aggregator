'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var options = require('./options.js');
var htmlmin = require('gulp-htmlmin');
var gutil = require('gulp-util');

function generateIndex() {

    var target = gutil.env.production ? 'index.production.html' : 'index.dev.html';
    var renameOpts = {
        basename: 'index'
    };

    var htmlMinOpts = {
        collapseWhitespace: true
    };

    return gulp
        .src('src/public/common/index/' + target)
        .pipe(rename(renameOpts))
        .pipe(gutil.env.production ? htmlmin(htmlMinOpts) : gutil.noop())
        .pipe(gulp.dest(options.appOutput));

}


gulp.task('index', generateIndex);