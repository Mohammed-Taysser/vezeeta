const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass')(require('sass')),
    del = require('del'),
    pug = require('gulp-pug'),
    paths = {
        html: {
            src: 'src/html/pages/*.pug',
            dest: 'dist/html'
        },
        css: {
            src: ['src/css/**/*.css', 'src/css/*.scss'],
            dest: 'dist/css/'
        },
        js: {
            src: 'src/js/**/*.js',
            dest: 'dist/js/'
        },
        fonts: {
            src: 'src/fonts/**',
            dest: 'dist/fonts/'
        },
        images: {
            src: 'src/images/**',
            dest: 'dist/images/'
        }
    };
function clean() {
    'use strict';
    return del(['dist/**', '!dist']);
}

function un_minified_css_task() {
    'use strict';
    return gulp.src(paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass().on('error', sass.logError))
        // .pipe(csso())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.css.dest));
}

function minified_css_task() {
    'use strict';
    return gulp.src(paths.css.src)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.css.dest));
}

function html_task() {
    'use strict';
    require('./server.js');
    return gulp.src(paths.html.src)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.html.dest));
}

function fonts_task() {
    'use strict';
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

function un_minified_javascript_task() {
    'use strict';
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest));
}

function minified_javascript_task() {
    'use strict';
    return gulp.src(paths.js.src)
        .pipe(sourcemaps.init())
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.js.dest));
}

function images_task() {
    'use strict';
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

function watch_fun() {
    'use strict';
    gulp.watch(paths.html.src, html_task);
    gulp.watch(paths.css.src, un_minified_css_task);
    gulp.watch(paths.css.src, minified_css_task);
    gulp.watch(paths.js.src, un_minified_javascript_task);
    gulp.watch(paths.js.src, minified_javascript_task);
    gulp.watch(paths.fonts.src, fonts_task);
    gulp.watch(paths.images.src, images_task);
}


exports.default = gulp.series(
    clean,
    html_task,
    un_minified_css_task,
    minified_css_task,
    un_minified_javascript_task,
    minified_javascript_task,
    fonts_task,
    images_task,
    gulp.parallel(watch_fun)
);
