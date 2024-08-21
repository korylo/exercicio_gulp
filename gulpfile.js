const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Tarefa para compilar Sass para CSS
gulp.task("sass", function () {
  return gulp
    .src("sass/**/*.scss") // Caminho dos arquivos Sass
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css")); // Destino dos arquivos CSS
});

// Tarefa padrão que compila Sass e observa alterações
gulp.task("default", function () {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
});
