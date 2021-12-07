const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
// const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const sourcemaps = require("gulp-sourcemaps");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const csscomb = require("gulp-csscomb");

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "source",
    },
  });

  gulp.watch("source/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return (
    gulp
      .src("source/sass/**/*.+(scss|sass)")
      .pipe(csscomb())
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
      // .pipe(postcss([autoprefixer()])) // сделай автопрефиксер потом, как было, постcss без ошибок работать не могёт
      // .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(sourcemaps.write())
      // .pipe(gulp.dest("dist/css"))
      .pipe(gulp.dest("source/css"))
      .pipe(browserSync.stream())
  );
});
// exports.styles = styles;
// exports.server = server;
gulp.task("watch", function () {
  gulp.watch("source/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
});

gulp.task("default", gulp.parallel("watch", "server", "styles"));
// extports.defaults = gulp.parallel("watch", "server", "styles");
