import config from '../config';
import gulp from 'gulp';
import gzip from 'gulp-zip';

gulp.task('gzip', function() {

  return gulp.src(config.gzip.src)
    .pipe(gzip(config.gzip.fileName))
    .pipe(gulp.dest(config.gzip.dest));

});
