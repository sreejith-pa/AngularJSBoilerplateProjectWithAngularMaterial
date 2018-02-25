'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], function(callback) {
  runSequence('views', 'styles', 'copy', 'browserify', callback);
});
