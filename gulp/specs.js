var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var babel = require('gulp-babel');

var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var _ = require('lodash');

/**
 * Inject all the spec files into the specs.html
 * @return {Stream}
 */
gulp.task('build:specs', ['partial:specs'], function () {
  log('building the spec runner');

  var injectNonMockE2EScripts = [
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mocke2e.js')
  ];

  var injectScripts = gulp.src(injectNonMockE2EScripts)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  var nodeModules = 'node_modules';
  var injectTestLibs = gulp.src([
    nodeModules + '/mocha/mocha.js',
    nodeModules + '/chai/chai.js',
    nodeModules + '/sinon-chai/lib/sinon-chai.js'
  ]);
  var injectTestLibsOptions = {
    starttag: '<!-- inject:testlibraries:js -->',
    addRootSlash: false,
    relative: true
  };

  var injectSpecsLibs = gulp.src([path.join(conf.paths.src, '/app/**/*.spec.js')]);
  var injectSpecsOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    starttag: '<!-- inject:specs:js -->', addRootSlash: false
  };

  var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/serve/templateCacheHtml.js'), {read: false});
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/serve'),
    addRootSlash: false
  };

  return gulp
    .src(path.join(conf.paths.src, '/specs.html'))
    .pipe(wiredep(_.extend({devDependencies: true}, conf.wiredep)))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe($.inject(injectTestLibs, injectTestLibsOptions))
    .pipe($.inject(injectSpecsLibs, injectSpecsOptions))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('partial:specs', ['partials'], function () {
  return gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
