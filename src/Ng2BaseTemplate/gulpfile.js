var gulp = require('gulp');

var paths = {
    node: './wwwroot/node_modules'
};

gulp.task('copy-node-modules', function () {
    console.log('Outputting node files');
    gulp.src([
        'node_modules/angular2/bundles/js',
        'node_modules/angular2/bundles/angular2.*.js*',
        'node_modules/angular2/bundles/http.*.js*',
        'node_modules/angular2/bundles/router.*.js*',
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/systemjs/dist/*.*',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/@angular2-material/checkbox/checkbox.js',
        'node_modules/@angular2-material/button/button.js',
        'node_modules/@angular2-material/core/core.js',
        'node_modules/ng2rest/ng2rest.js',
        'node_modules/es6-promise/dist/es6-promise.js',

    ]).pipe(gulp.dest(paths.node));
    
});

gulp.task('compile-typescript', function () {
    console.log('Compiling TypeScript');
 

});
