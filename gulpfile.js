const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Caminho para os arquivos de JavaScript
const jsSources = "src/js/**/*.js";
// Caminho para os arquivos de imagem
const imgSources = "src/images/**/*";

// Tarefa para minificar arquivos JavaScript
gulp.task("minify-js", function () {
  return gulp.src(jsSources).pipe(uglify()).pipe(gulp.dest("dist/js"));
});

// Tarefa para compressão de imagens
gulp.task("compress-images", function () {
  return gulp.src(imgSources).pipe(imagemin()).pipe(gulp.dest("dist/images"));
});

// Tarefa padrão que executa todas as tarefas
gulp.task("default", gulp.series("minify-js", "compress-images"));
