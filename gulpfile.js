var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
	browserSync = require('browser-sync'),
	del			= require('del');

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('src/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку dist/css
});

gulp.task('pug', function() {
  return gulp.src('src/pug/**/*.pug')
      .pipe(pug())
      .pipe(gulp.dest("dist"))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'dist' // ориентир на папку продакшена
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('dist/*.html', browserSync.reload);
	gulp.watch('dist/css/**/*.css', browserSync.reload);
	gulp.watch('dist/js/**/*.js', browserSync.reload);
});

gulp.task('cleanAll', function() { //сотрёт всю папку продакшена (dist)
	return del.sync('dist');
});

gulp.task('build', ['sass', 'pug'], function() {
	var buldCss = gulp.src('src/libs/css/**/*')
		.pipe(gulp.dest('dist/css'));
	var buldCss = gulp.src('src/libs/js/**/*')
		.pipe(gulp.dest('dist/js'));
	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));
	var buildJs = gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
	var buldHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});