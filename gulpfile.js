var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//
gulp.task('sass', function(){
	return gulp.src('app/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest("app/css"))
	.pipe(browserSync.stream())
})
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		browser: "google chrome",
		server: './app'
	})
	gulp.watch(['app/sass/*.scss', 'app/sass/partials/*.scss'], ['sass'])
	gulp.watch('app/css/*.css').on('change', browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload)
})
gulp.task('default', ['serve']);