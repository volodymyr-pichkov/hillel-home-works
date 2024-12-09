const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

const paths = {
  scss: "src/scss/**/*.scss",
  html: "src/*.html",
  js: "src/js/**/*.js",
};

function styles() {
  return gulp
    .src(paths.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src(paths.html).pipe(gulp.dest("dist")).pipe(browserSync.stream());
}

function scripts() {
  return gulp.src(paths.js).pipe(gulp.dest("dist/js")).pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  });

  gulp.watch(paths.scss, styles);
  gulp.watch(paths.html, html);
  gulp.watch(paths.js, scripts);
}

exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.serve = gulp.series(gulp.parallel(styles, html, scripts), serve);
exports.default = gulp.series(gulp.parallel(styles, html, scripts), serve);
