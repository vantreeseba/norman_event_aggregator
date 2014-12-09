'use strict';
var gulp = require('gulp');
var options = require('../options.js');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

function generateLocalDev() {
    var src = './src/public/localdev/' + options.appName + '.develop.js';

    return browserify(src)
        .bundle({
            debug: !gutil.env.production
        })
        .pipe(gutil.env.production ? uglify() : gutil.noop())
        .pipe(source('localdev.js'))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('script-localdev', generateLocalDev);
