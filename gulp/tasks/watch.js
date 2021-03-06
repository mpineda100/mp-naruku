var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
    watch('./app/index.html', function() {
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.setMaxListeners('cssInject');
    });
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.setMaxListeners('scriptsRefresh');
    });


});

gulp.task('cssInject', function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', function() {
    browserSync.reload();
})
