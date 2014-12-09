var gulp = require('gulp');
var options = require('../options.js');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var browserify = require('browserify');
var manifest = require('./concat-filenames.js');
var source = require('vinyl-source-stream');
var tap = require('gulp-tap');

function generateFeatureJs() {
    'use strict';
    //TODO: modify based on environment.
    var src = [
        'src/public/features/**/*.js',
    ];

    var manifestOptions = {
        root: 'src/public/features',
        prepend: 'require("./',
        append: '");'
    };

    var browserifyConfig = {
        debug: !gutil.env.production
    };

    return gulp
        .src(src)
        .pipe(manifest('features.js', manifestOptions))
        .pipe(tap(function doBrowserification(file, t) {
            return browserify(file)
                .bundle(browserifyConfig)
                .pipe(source('features.js'))
                .pipe(gulp.dest(options.appOutput));
        }));
}

gulp.task('script-features', generateFeatureJs);
