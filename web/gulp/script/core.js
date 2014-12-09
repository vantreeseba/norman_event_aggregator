'use strict';
var gulp = require('gulp');
var options = require('../options.js');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var prefix = require('./prefix');
var source = require('vinyl-source-stream');
var glob = require('glob');

function generateCoreJs() {

	var globOpts = {		
		root: './node_modules'
	}

	var noParse = [];

    return browserify({
    		entries: './src/public/core/core.js',
    		noParse: noParse
    	})
        .bundle({
            debug: !gutil.env.production
        })
        .pipe(gutil.env.production ? uglify() : gutil.noop())        
        .pipe(source('core.js'))        
        .pipe(prefix('var global=self;'))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('script-core', generateCoreJs);


