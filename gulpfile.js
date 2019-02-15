var gulp = require('gulp')
var watch = require('gulp-watch')
var bs = require('browser-sync').create()

gulp.task('default', () => {

  bs.init({
    port: 9000,
    server: {
      baseDir: "./"
    }
  })

  return watch([
    './*.html',
    './**/*/*.css',
  ], function() {
    bs.reload()
    console.log('Updated files...');
  })
})
