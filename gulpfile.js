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
	watch 		 = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify       = require('gulp-uglify'),
	rename       = require('gulp-rename'),
	cssmin       = require('gulp-cssmin'),
	imagemin     = require('gulp-imagemin'),
	BrowserSync  = require('browser-sync').create(),
	reload       = BrowserSync.reload;

 
	gulp.task('images', function () {
	    gulp.src('static/img/*')
	        .pipe(imagemin({
	            progressive: true,
	            optimizationLevel: 3,
	            svgoPlugins: [{removeViewBox: false}]
	        }))
	        .pipe(gulp.dest('dist/img/'));

	    gulp.src('store/projects/*.jpg')
	        .pipe(imagemin({
	            progressive: true,
	            optimizationLevel: 3
	        }))
	        .pipe(gulp.dest('store/projects/'));

	    gulp.src('store/*.*')
	        .pipe(imagemin({
	            progressive: true,
	            optimizationLevel: 3,
	            multipass: true
	        }))
	        .pipe(gulp.dest('store/'));
	});


	gulp.task('styles', function() {
		gulp.src('static/css/*.scss')
			.pipe(sass())
			.pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
			.pipe(cssmin())
			.pipe(gulp.dest('dist/css/'))
			.pipe(reload({stream:true}));
	});

	gulp.task('javascript', function() {
		gulp.src('static/js/*.js')
			.pipe(uglify())
			.pipe(rename({
				suffix: ".min",
		    }))
			.pipe(gulp.dest('dist/js/'))
			// .pipe(reload());
			.pipe(reload({stream:true}));
	});

	gulp.task('watch', function () {
		BrowserSync.init({
			proxy: "localhost:9000",
			notify: false
		});
		gulp.watch('static/css/**/*.scss', ['styles']).on('change', reload);
		gulp.watch('static/js/*.js', ['javascript']).on('change', reload);
		gulp.watch('**/*.jade').on('change', reload);
	});

	gulp.task('browser-sync', function(){
		BrowserSync.init({
			proxy: "localhost:9000",
			notify: false
		});
	});

gulp.task('default', ['watch', 'images']);

