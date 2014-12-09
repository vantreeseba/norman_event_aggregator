var path = require('path');
var gutil = require('gulp-util');

function makeHeader(file) {
    'use strict';
    var banner = [
        '/* ------------------',
        'Name: <%= name %> ',
        'Size: <%= size %>',
        'Path: <% fpath %>',
        'Generated Last: <%= date %>',
        '-------------------- */',
        '\n'
    ].join('\n');

    var info = {
        file: file,
        name: path.basename(file.path, '.js'),
        fpath: path.dirname(file.path),
        size: file.stat.size,
        date: new Date()
    };

    var templatedHeader = gutil.template(banner, info);
    file.contents = new Buffer([templatedHeader, file.contents, '\n'].join(''));
}

module.exports = makeHeader;
