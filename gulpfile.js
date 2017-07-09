var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
	browserSync = require('browser-sync'),
	del			= require('del');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});

gulp.task('pug', function() {
  return gulp.src('app/pug/**/*.pug')
      .pipe(pug())
      .pipe(gulp.dest("app"))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/pug/**/*.pug', ['pug']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/**/*.css', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('build', ['clean'], function() {
	var buldCss = gulp.src('app/css/main.css')
		.pipe(gulp.dest('dist/css'));
	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));
	var buldHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});