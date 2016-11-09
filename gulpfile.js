var gulp = require('gulp');

var del = require('del');

var src = 'src/';
var dist = 'dist/';


gulp.task('build-copy', function () {
    gulp.src([src + 'assets/**/*.*'])
        .pipe(gulp.dest(dist + 'assets'));

    return gulp.src([src + 'index.html'])
        .pipe(gulp.dest(dist));
});

gulp.task('clean', function() {
   del(dist);
});


gulp.task('default', ['build-copy']);