var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 

var path = {
  DEST: './js/'
}

gulp.task('install', function() {
  gulp.src('./node_modules/react/dist/react.min.js')
    .pipe(gulp.dest(path.DEST));
});

gulp.task('browserify', function() {
  var bundler = browserify({
      entries: ['./app/main.js'],
      transform: [reactify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
  });
  var watcher  = watchify(bundler);

  return watcher
  .on('update', function () {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest(path.DEST));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['browserify']);