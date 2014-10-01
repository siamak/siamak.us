/*
  ____    _                               _        __  __           _      _       _                    _ 
 / ___|  (_)   __ _   _ __ ___     __ _  | | __   |  \/  |   ___   | | __ | |__   | |_    __ _   _ __  (_)
 \___ \  | |  / _` | | '_ ` _ \   / _` | | |/ /   | |\/| |  / _ \  | |/ / | '_ \  | __|  / _` | | '__| | |
  ___) | | | | (_| | | | | | | | | (_| | |   <    | |  | | | (_) | |   <  | | | | | |_  | (_| | | |    | |
 |____/  |_|  \__,_| |_| |_| |_|  \__,_| |_|\_\   |_|  |_|  \___/  |_|\_\ |_| |_|  \__|  \__,_| |_|    |_|
 Under licensed [MIT](http://siamak.mit-license.org) - September 2014.
*/


var gulp         = require('gulp'),
	sass 		 = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify       = require('gulp-uglify'),
	csso 		 = require('gulp-csso');

	gulp.task('styles', function() {
		  gulp.src('static/css/*.scss')
		    .pipe(sass())
		    .pipe(autoprefixer('last 2 versions'))
	        .pipe(csso())
		    .pipe(gulp.dest('static/css/'));
	});

	gulp.task('javascript', function() {
		  gulp.src('static/js/*.js')
		    .pipe(uglify())
		    .pipe(gulp.dest('static/js/'));
	});


gulp.task('default', ['styles', 'javascript']);