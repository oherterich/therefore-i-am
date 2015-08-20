var gulp = require('gulp');
var runSequence = require('run-sequence');
var server = require('gulp-express');

gulp.task('default', ['dev']);

gulp.task('dev', function() {
  server.run(['app.js']);

  runSequence(
    ['views', 'lint', 'scripts', 'styles'],
    'watch'
  );
});