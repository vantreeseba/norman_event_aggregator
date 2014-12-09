'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var header = require('gulp-header');
var options = require('../options.js');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');


function generateCompatibilityJs() {

    var src = ['src/public/scripts/compatibility/json3.js',
        'src/public/scripts/compatibility/es5-shim.js',
        'src/public/scripts/compatibility/ie-shiv.js',
        'src/public/scripts/compatibility/placeholders.js',
        'src/public/scripts/angular/compatibility.js',
        'src/public/common/telogical-ui/compatibility.js',
        'src/public/features/**/compatibility.js'
    ];

    //TODO: Replace with Browserify
    return gulp
        .src(src)
        .pipe(concat('compatibility.js'))
        .pipe(gutil.env.production ? uglify() : gutil.noop())
        .pipe(gulp.dest(options.appOutput));

}


gulp.task('script-compatibility', generateCompatibilityJs);