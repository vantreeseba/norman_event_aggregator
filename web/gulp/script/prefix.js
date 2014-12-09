var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-prefixer';

function prefixStream(prefixText) {
  var stream = through();
  stream.write(prefixText);
  return stream;
}

function gulpPrefixer(prefixText) {

  if (!prefixText) {
    throw new PluginError(PLUGIN_NAME, "Missing prefix text!");
  }
  prefixText = new Buffer(prefixText); // allocate ahead of time

  var stream = through.obj(function(file, enc, callback) {
    if (file.isBuffer()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Buffers not supported!'));
      return callback();
    }

    if (file.isStream()) {
      var streamer = prefixStream(prefixText);
      streamer.on('error', this.emit.bind(this, 'error'));
      file.contents = file.contents.pipe(streamer);
    }

    this.push(file);
    callback();
  });

  return stream;
};

module.exports = gulpPrefixer;