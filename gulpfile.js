const { src, dest, series } = require('gulp');
const del = require('del');

function clean() {
  return del(['dist/assets/**/*']);
}

function copyFiles() {
  return src('src/assets/**/*')
    .pipe(dest('dist/assets/'));
}

const copy = series(clean, copyFiles,)

exports.copy = copy