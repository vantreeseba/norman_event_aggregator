'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var header = require('gulp-header');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var tap = require('gulp-tap');
var path = require('path');
var gutil = require('gulp-util');
var html2js = require("gulp-ng-html2js");
var uglify = require('gulp-uglify');


function makeFeaturePartialsFile() {
    var htmlMinOpts = {
        collapseWhitespace: true
    };

    return gulp
        .src('src/public/features/**/*-partial.html')
        .pipe(htmlmin(htmlMinOpts))
        .pipe(html2js({
            moduleName: options.appName + 'Partials',
            stripPrefix: 'src/public/features/'
        }))
        .pipe(concat('partials.js'))
        .pipe(uglify())
        .pipe(header())
        .pipe(gulp.dest(options.appOutput));
}


function makeCommonPartial() {
    var htmlMinOpts = {
        collapseWhitespace: true
    };

    return gulp
        .src('src/public/common/*.html')
        .pipe(gutil.env.production ? htmlmin(htmlMinOpts) : gutil.noop())
        .pipe(gulp.dest(options.appOutput));

}



gulp.task('partials-features', makeFeaturePartialsFile);

gulp.task('partials-common', makeCommonPartial);

gulp.task('partials', ['partials-features', 'partials-common']);
