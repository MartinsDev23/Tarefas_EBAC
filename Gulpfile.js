const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp
    .src('./src/main.scss')
    .pipe(sass(
        { outputStyle: 'compressed' }
    ))
    .pipe(gulp.dest('./dist/styles'));
}

function comprimeImagens() {
    return gulp
    .src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.sass = compilaSass;
exports.images = comprimeImagens;

exports.default = function() {
    gulp.watch('./src/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}

