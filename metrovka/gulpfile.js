var gulp = require('gulp'),
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function() {
   return gulp.src('app/scss/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function(){
gulp.watch('app/scss/**/*.scss', ['sass']);
// другие ресурсы
})