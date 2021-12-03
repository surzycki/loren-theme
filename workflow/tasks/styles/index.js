const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");

const styles = () =>
  src("src/styles/theme.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename("theme.css"))
    .pipe(dest("dist/assets/"));

module.exports = styles;
