'use strict';
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var options = require('./options.js');
var header = require('gulp-header');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');


function stylusCore() {
    return gulp
        .src('src/public/styles/core/core.styl')
        .pipe(stylus())
        .pipe(header())
        .pipe(gulp.dest('src/public/styles/'));
}

function stylusThemes() {
    console.log('Called gulp build with "--production"? ', gutil.env.production ? 'YES' : 'NO');
    var themes = options.w9.themes;
    function makeThemes(themes) {
        for (var i = 0, ii = themes.length; i < ii; i++) {
            var theme = themes[i],
                themeFolder = 'src/public/styles/themes/' + theme,
                stylusConfig = {
                    use: ['nib']
                };


            return gulp
                .src(themeFolder + '/theme.styl')
                .pipe(stylus(stylusConfig))
                .pipe(header())
                .pipe(gutil.env.production ? minifyCSS() : gutil.noop())
                .pipe(gulp.dest(themeFolder));
        }
    }

    if (themes && themes.length) {
        makeThemes(themes);
    } else {
        console.log('There are currently no themes in your warp9.json file');
    }
}

gulp.task('styles-core', stylusCore);
gulp.task('styles-themes', stylusThemes);
gulp.task('styles', ['styles-core', 'styles-themes']);