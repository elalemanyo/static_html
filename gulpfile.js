var gulp = require('gulp');
$ = require('gulp-load-plugins')();

var pathsSrc = {
  scss: 'assets/styles/scss/*.scss',
  css: [
    'bower/normalize.css/normalize.css',
    'assets/styles/css/*.css',
  ],
  img: 'assets/img/**/*',
  js: [
    'bower/jquery/dist/jquery.js',
    'assets/scripts/*.js',
  ]
};

var pathsDest = {
  scss: 'assets/styles/css',
  css: 'public/css',
  img: 'public/img',
  js:  'public/scripts'
};

var fileNames = {
  css: 'main.css',
  js:  'main.js'
};

var pathsWatch = {
  scss: 'assets/styles/scss/**/*',
  css: 'assets/styles/css/*',
  img: 'assets/img/**/*',
  js: [
    'assets/scripts/*.js',
  ]
};

// SASS task
gulp.task('scss', function(){
  gulp.src(pathsSrc.scss)
  .pipe($.sass({outputStyle: 'compressed'}))
  .on('error', $.notify.onError(function (error) {
    return "SASS Compile Error: " + error.message;
  }))
  .pipe(gulp.dest(pathsDest.scss))
  .pipe($.notify({ message: 'SASS task complete' }));
});

// CSS task
gulp.task('css', function() {
  return gulp.src(pathsSrc.css)
    .pipe($.concat(fileNames.css))
    .pipe(gulp.dest(pathsDest.css))
    .pipe($.minifyCss())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(pathsDest.css))
    .pipe($.notify({ message: 'CSS task complete' }));
});

// minify new images
gulp.task('images', function() {
  return gulp.src(pathsSrc.img)
  .pipe($.cache($.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
  .pipe(gulp.dest(pathsDest.img))
  .pipe($.notify({ message: 'Images task complete' }));
});

gulp.task('js', function() {
  gulp.src(pathsSrc.js)
  .pipe($.debug())
  .pipe($.concat(fileNames.js))
  .pipe(gulp.dest(pathsDest.js))
  .pipe($.uglify())
  .pipe($.rename({suffix: '.min'}))
  .pipe(gulp.dest(pathsDest.js))
  .pipe($.notify({ message: 'Javascript is now ugly!'}) );
});

gulp.task('watch', function() {
    gulp.watch(pathsWatch.scss, ['scss']);
    gulp.watch(pathsWatch.css, ['css']);
    gulp.watch(pathsWatch.img, ['img']);
    gulp.watch(pathsWatch.js, ['js']);
});

gulp.task('default', function() {
  gulp.start('scss', 'css', 'images', 'js', 'watch');
});
