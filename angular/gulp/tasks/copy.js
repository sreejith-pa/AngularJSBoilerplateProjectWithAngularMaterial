'use strict';

import config from '../config';
import gulp from 'gulp';

gulp.task('copy', function() {
  return gulp.src([
      'app/assets/styles/fonts/{,*/}*.*',
      'app/assets/images/**/*',
      'app/assets/docs/**/*'
    ], {
      base: 'app'
    })
    .pipe(gulp.dest(config.buildDir));
});
