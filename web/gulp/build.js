'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');



//TODO : change build on environment
var buildWatchTasks = ['index', 'styles', 'partials', 'statuspages', 'scripts'];

function cleanBuild() {
    console.log('Cleaning build folder: ', options.appOutput);
    var src = options.appOutput + '/*.*';
    return gulp.src(src)
        .pipe(rimraf({ force: true }));
}

function buildTasks(cb) {
    runSequence('clean',
        ['index', 'styles', 'partials', 'statuspages', 'scripts'],
        cb);
}

gulp.task('clean', cleanBuild);
gulp.task('build', buildTasks);

gulp.task('buildWatch', buildWatchTasks);