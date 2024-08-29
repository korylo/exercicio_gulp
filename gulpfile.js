// Importa os módulos necessários
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

// Define a tarefa de minificação de JavaScript
function minifyJs() {
  return gulp
    .src("src/js/**/*.js") // Caminho para os arquivos JavaScript
    .pipe(uglify()) // Minifica os arquivos JavaScript
    .pipe(gulp.dest("dist/js")); // Diretório de destino para os arquivos minificados
}

// Define a tarefa de compressão de imagens
function compressImages() {
  return gulp
    .src("src/images/**/*") // Caminho para os arquivos de imagem
    .pipe(imagemin()) // Comprime as imagens
    .pipe(gulp.dest("dist/images")); // Diretório de destino para as imagens comprimidas
}

// Exporta as tarefas para serem usadas individualmente
exports.minifyJs = minifyJs;
exports.compressImages = compressImages;

// Define a tarefa padrão que executa ambas as tarefas em série
exports.default = gulp.series(minifyJs, compressImages);
