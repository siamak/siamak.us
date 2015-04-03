/*!
  ____    _                               _        __  __           _      _       _                    _ 
 / ___|  (_)   __ _   _ __ ___     __ _  | | __   |  \/  |   ___   | | __ | |__   | |_    __ _   _ __  (_)
 \___ \  | |  / _` | | '_ ` _ \   / _` | | |/ /   | |\/| |  / _ \  | |/ / | '_ \  | __|  / _` | | '__| | |
  ___) | | | | (_| | | | | | | | | (_| | |   <    | |  | | | (_) | |   <  | | | | | |_  | (_| | | |    | |
 |____/  |_|  \__,_| |_| |_| |_|  \__,_| |_|\_\   |_|  |_|  \___/  |_|\_\ |_| |_|  \__|  \__,_| |_|    |_|
 Under licensed [MIT](http://siamak.mit-license.org) - April 2015 [version: 1.2] .
*/

var gulp         = require('gulp'),
	sass 		 = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify       = require('gulp-uglify'),
	rename       = require('gulp-rename'),
	cssmin       = require('gulp-cssmin'),
	imagemin     = require('gulp-imagemin');

 
	gulp.task('images', function () {
	    gulp.src('static/img/*')
	        .pipe(imagemin({
	            progressive: true,
	            optimizationLevel: 3,
	            svgoPlugins: [{removeViewBox: false}]
	        }))
	        .pipe(gulp.dest('dist/img/'));
	});

	gulp.task('styles', function() {
		gulp.src('static/css/*.scss')
			.pipe(sass())
			.pipe(autoprefixer('last 5 versions'))
			.pipe(cssmin())
			.pipe(gulp.dest('dist/css/'));

	});

	gulp.task('javascript', function() {
		gulp.src('static/js/*.js')
			.pipe(uglify())
			.pipe(rename({
				suffix: ".min",
		    }))
			.pipe(gulp.dest('dist/js/'));
	});


gulp.task('default', ['styles', 'javascript', 'images']);