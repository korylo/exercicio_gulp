const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Tarefa para compilar Sass para CSS
function compilaSass() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(gulp.dest("./builld/styles"));
}

// Tarefa padrão que compila Sass e observa alterações
gulp.task("default", function () {
  gulp.watch("sass/**/*.scss", gulp.series("sass"));
});
